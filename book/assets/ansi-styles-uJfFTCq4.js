// ../../node_modules/ansi-styles/index.js
var ANSI_BACKGROUND_OFFSET = 10;
var ANSI_UNDERLINE_OFFSET = 20;
var wrapAnsi16 = (offset = 0) => (code) => `\u{1B}[${code + offset}m`;
var wrapAnsi256 = (offset = 0) => (code) => `\u{1B}[${38 + offset};5;${code}m`;
var wrapAnsi16m = (offset = 0) => (red, green, blue) => `\u{1B}[${38 + offset};2;${red};${green};${blue}m`;
var wrapUnderlineAnsi = (code) => `\u{1B}[58;5;${code < 90 ? code - 30 : code - 90 + 8}m`;
var blackBright = [90, 39];
var bgBlackBright = [100, 49];
var styles = {
	modifier: {
		reset: [0, 0],
		bold: [1, 22],
		dim: [2, 22],
		italic: [3, 23],
		underline: [4, 24],
		underlineDouble: ["4:2", 24],
		underlineCurly: ["4:3", 24],
		underlineDotted: ["4:4", 24],
		underlineDashed: ["4:5", 24],
		overline: [53, 55],
		inverse: [7, 27],
		hidden: [8, 28],
		strikethrough: [9, 29]
	},
	color: {
		black: [30, 39],
		red: [31, 39],
		green: [32, 39],
		yellow: [33, 39],
		blue: [34, 39],
		magenta: [35, 39],
		cyan: [36, 39],
		white: [37, 39],
		blackBright,
		gray: blackBright,
		grey: blackBright,
		redBright: [91, 39],
		greenBright: [92, 39],
		yellowBright: [93, 39],
		blueBright: [94, 39],
		magentaBright: [95, 39],
		cyanBright: [96, 39],
		whiteBright: [97, 39]
	},
	bgColor: {
		bgBlack: [40, 49],
		bgRed: [41, 49],
		bgGreen: [42, 49],
		bgYellow: [43, 49],
		bgBlue: [44, 49],
		bgMagenta: [45, 49],
		bgCyan: [46, 49],
		bgWhite: [47, 49],
		bgBlackBright,
		bgGray: bgBlackBright,
		bgGrey: bgBlackBright,
		bgRedBright: [101, 49],
		bgGreenBright: [102, 49],
		bgYellowBright: [103, 49],
		bgBlueBright: [104, 49],
		bgMagentaBright: [105, 49],
		bgCyanBright: [106, 49],
		bgWhiteBright: [107, 49]
	},
	underlineColor: {
		underlineBlack: ["58;5;0", 59],
		underlineRed: ["58;5;1", 59],
		underlineGreen: ["58;5;2", 59],
		underlineYellow: ["58;5;3", 59],
		underlineBlue: ["58;5;4", 59],
		underlineMagenta: ["58;5;5", 59],
		underlineCyan: ["58;5;6", 59],
		underlineWhite: ["58;5;7", 59],
		underlineBlackBright: ["58;5;8", 59],
		underlineGray: ["58;5;8", 59],
		underlineGrey: ["58;5;8", 59],
		underlineRedBright: ["58;5;9", 59],
		underlineGreenBright: ["58;5;10", 59],
		underlineYellowBright: ["58;5;11", 59],
		underlineBlueBright: ["58;5;12", 59],
		underlineMagentaBright: ["58;5;13", 59],
		underlineCyanBright: ["58;5;14", 59],
		underlineWhiteBright: ["58;5;15", 59]
	}
};
Object.keys(styles.modifier);
var foregroundColorNames = Object.keys(styles.color);
var backgroundColorNames = Object.keys(styles.bgColor);
Object.keys(styles.underlineColor);
[...foregroundColorNames, ...backgroundColorNames];
function assembleStyles() {
	const codes = /* @__PURE__ */ new Map();
	for (const [groupName, group] of Object.entries(styles)) {
		for (const [styleName, style] of Object.entries(group)) {
			styles[styleName] = {
				open: `\u{1B}[${style[0]}m`,
				close: `\u{1B}[${style[1]}m`
			};
			group[styleName] = styles[styleName];
			codes.set(Number(String(style[0]).split(/[:;]/v, 1)[0]), style[1]);
		}
		Object.defineProperty(styles, groupName, {
			value: group,
			enumerable: false
		});
	}
	Object.defineProperty(styles, "codes", {
		value: codes,
		enumerable: false
	});
	styles.color.close = "\x1B[39m";
	styles.bgColor.close = "\x1B[49m";
	styles.underlineColor.close = "\x1B[59m";
	styles.color.ansi = wrapAnsi16();
	styles.color.ansi256 = wrapAnsi256();
	styles.color.ansi16m = wrapAnsi16m();
	styles.bgColor.ansi = wrapAnsi16(ANSI_BACKGROUND_OFFSET);
	styles.bgColor.ansi256 = wrapAnsi256(ANSI_BACKGROUND_OFFSET);
	styles.bgColor.ansi16m = wrapAnsi16m(ANSI_BACKGROUND_OFFSET);
	styles.underlineColor.ansi = wrapUnderlineAnsi;
	styles.underlineColor.ansi256 = wrapAnsi256(ANSI_UNDERLINE_OFFSET);
	styles.underlineColor.ansi16m = wrapAnsi16m(ANSI_UNDERLINE_OFFSET);
	Object.defineProperties(styles, {
		rgbToAnsi256: {
			value(red, green, blue) {
				if (red === green && green === blue) {
					if (red < 8) return 16;
					if (red > 248) return 231;
					return Math.round((red - 8) / 247 * 24) + 232;
				}
				return 16 + 36 * Math.round(red / 255 * 5) + 6 * Math.round(green / 255 * 5) + Math.round(blue / 255 * 5);
			},
			enumerable: false
		},
		hexToRgb: {
			value(hex) {
				const matches = /[\da-f]{6}|[\da-f]{3}/iv.exec(hex.toString(16));
				if (!matches) return [
					0,
					0,
					0
				];
				let [colorString] = matches;
				if (colorString.length === 3) colorString = [...colorString].map((character) => character + character).join("");
				const integer = Number.parseInt(colorString, 16);
				return [
					integer >> 16 & 255,
					integer >> 8 & 255,
					integer & 255
				];
			},
			enumerable: false
		},
		hexToAnsi256: {
			value: (hex) => styles.rgbToAnsi256(...styles.hexToRgb(hex)),
			enumerable: false
		},
		ansi256ToAnsi: {
			value(code) {
				if (code < 8) return 30 + code;
				if (code < 16) return 90 + (code - 8);
				let red;
				let green;
				let blue;
				if (code >= 232) {
					red = ((code - 232) * 10 + 8) / 255;
					green = red;
					blue = red;
				} else {
					code -= 16;
					const remainder = code % 36;
					red = Math.floor(code / 36) / 5;
					green = Math.floor(remainder / 6) / 5;
					blue = remainder % 6 / 5;
				}
				const value = Math.max(red, green, blue) * 2;
				if (value === 0) return 30;
				let result = 30 + (Math.round(blue) << 2 | Math.round(green) << 1 | Math.round(red));
				if (value === 2) result += 60;
				return result;
			},
			enumerable: false
		},
		rgbToAnsi: {
			value: (red, green, blue) => styles.ansi256ToAnsi(styles.rgbToAnsi256(red, green, blue)),
			enumerable: false
		},
		hexToAnsi: {
			value: (hex) => styles.ansi256ToAnsi(styles.hexToAnsi256(hex)),
			enumerable: false
		}
	});
	return styles;
}
var ansiStyles = assembleStyles();
export { ansiStyles as default };
