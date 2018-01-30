
  export function cleanXML(xml) {
    const isInt = /^-?\s*\d+$/,
          isDig = /^(-?\s*\d+\.?\d*)$/,
          radix = 10;

    Object.keys(xml).forEach((node) => {
        let value, singulars,
            l = -1, i = -1, s = -1, e = -1;

        if (xml[node] instanceof Array && xml[node].length === 1) {
            xml[node] = xml[node][0];
        }

        if (xml[node] instanceof Object) {
            value = Object.keys(xml[node]);

            if (value.length === 1) {
                l = node.length;

                singulars = [
                    node.substring(0, l - 1),
                    node.substring(0, l - 3) + 'y'
                ];

                i = singulars.indexOf(value[0]);

                if (i !== -1) {
                    xml[node] = xml[node][singulars[i]];
                }
            }
        }

        if (typeof(xml[node]) === 'object') {
            xml[node] = cleanXML(xml[node]);
        }

        if (typeof(xml[node]) === 'string') {
            value = xml[node].trim();

            if (value.match(isDig)) {
                if (value.match(isInt)) {
                    l = parseInt(value, radix);

                    if (Math.abs(l) <= 9007199254740991) {
                        xml[node] = l;
                    }
                } else {
                    l = value.length;

                    if (l <= 15) {
                        xml[node] = parseFloat(value);
                    } else {
                        for (i = 0, s = -1, e = -1; i < l && e - s <= 15; ++i) {
                            if (value.charAt(i) > 0) {
                                if (s === -1) {
                                    s = i;
                                } else {
                                    e = i;
                                }
                            }
                        }

                        if (e - s <= 15) {
                            xml[node] = parseFloat(value);
                        }
                    }
                }
            } else {
                xml[node] = value;
            }
        }
    });

    return xml;
  }

