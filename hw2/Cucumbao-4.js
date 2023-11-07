let truck1 = [["(-)", "[IIII]", "[))))]"], ["IuI", "[llll]"], ["[@@@@]", "UwU", "[IlII]"], ["IuI", "[))))]", "x"], [] ];
function unpackSausages(truck) {
    let displayCounter = [];
    let rewardCounter = '';

    for (const box of truck) {
        for (const pack of box) {
            if (pack.startsWith("[") && pack.endsWith("]") && (pack.length - 2) % 4 === 0) {
                let validPackage = true;
                for (let i = 1; i < pack.length - 1; i++) {
                    if (pack[i] !== pack[1]) {
                        validPackage = false;
                        break;
                    }
                }

                if (validPackage) {
                    displayCounter++;
                    if (displayCounter % 5 !== 0) {
                        rewardCounter += pack.slice(1, -1).split('').join(' ') + " ";
                    }
                }
            }
        }
    }

    return rewardCounter.trim();
}
console.log(unpackSausages(truck1))