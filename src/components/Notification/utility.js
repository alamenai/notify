export const upperCaseFirstLetter = string => string.charAt(0).toUpperCase().concat(string.slice(1))

export const hexToRgba = (hex, alpha) => {
    if (!isValidHex(hex)) { throw new Error("Invalid HEX") }
    const chunkSize = Math.floor((hex.length - 1) / 3)
    const hexArr = getChunksFromString(hex.slice(1), chunkSize)
    const [r, g, b, a] = hexArr.map(convertHexUnitTo256)
    return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha ? alpha : 1)})`
}

export const rgbToRgba = (color, alpha) => {
    return color.replace(')', `${alpha ? `,${alpha}` : ', 1'}` + ')').replace('rgb', 'rgba');
}

const isValidHex = hex => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hex)

const getChunksFromString = (st, chunkSize) => st.match(new RegExp(`.{${chunkSize}}`, "g"))

const convertHexUnitTo256 = hexStr => parseInt(hexStr.repeat(2 / hexStr.length), 16)

const getAlphafloat = (a, alpha) => {
    if (typeof a !== "undefined") { return a / 255 }
    if ((typeof alpha != "number") || alpha < 0 || alpha > 1) {
        return 1
    }
    return alpha
}