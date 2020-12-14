export * from "./iconTypes";

// Icons to import
import * as SVGIcons from "./svgs";

// Generates the html for an icon
const generateIcon = (svg: string, height: number = 32, width: number = 32) => {
	// Get the icon element
	let elDiv = document.createElement("div");
	elDiv.innerHTML = svg;
	let icon = elDiv.firstChild as HTMLElement;
	if (icon) {
	    // Set the height/width
	    icon.setAttribute("height", (height ? height : 32).toString());
	    icon.setAttribute("width", (width ? width : 32).toString());

	    // Update the styling
	    icon.style.pointerEvents = "none";

	    // Support for IE
	    icon.setAttribute("focusable", "false");
	}

	// Return the icon
	return icon;
}

// Renders an icon by type
export const Icons = (iconType:number, height?:number, width?:number) => {
	// See which icon is selected
	switch(iconType) {
		// alarm-fill.svg
		case 1:
			return generateIcon(SVGIcons.alarmFill, height, width);
		// alarm.svg
		case 2:
			return generateIcon(SVGIcons.alarm, height, width);
		// align-bottom.svg
		case 3:
			return generateIcon(SVGIcons.alignBottom, height, width);
		// align-center.svg
		case 4:
			return generateIcon(SVGIcons.alignCenter, height, width);
		// align-end.svg
		case 5:
			return generateIcon(SVGIcons.alignEnd, height, width);
		// align-middle.svg
		case 6:
			return generateIcon(SVGIcons.alignMiddle, height, width);
		// align-start.svg
		case 7:
			return generateIcon(SVGIcons.alignStart, height, width);
		// align-top.svg
		case 8:
			return generateIcon(SVGIcons.alignTop, height, width);
		// alt.svg
		case 9:
			return generateIcon(SVGIcons.alt, height, width);
		// app-indicator.svg
		case 10:
			return generateIcon(SVGIcons.appIndicator, height, width);
		// app.svg
		case 11:
			return generateIcon(SVGIcons.app, height, width);
		// archive-fill.svg
		case 12:
			return generateIcon(SVGIcons.archiveFill, height, width);
		// archive.svg
		case 13:
			return generateIcon(SVGIcons.archive, height, width);
		// arrow-90deg-down.svg
		case 14:
			return generateIcon(SVGIcons.arrow90degDown, height, width);
		// arrow-90deg-left.svg
		case 15:
			return generateIcon(SVGIcons.arrow90degLeft, height, width);
		// arrow-90deg-right.svg
		case 16:
			return generateIcon(SVGIcons.arrow90degRight, height, width);
		// arrow-90deg-up.svg
		case 17:
			return generateIcon(SVGIcons.arrow90degUp, height, width);
		// arrow-bar-down.svg
		case 18:
			return generateIcon(SVGIcons.arrowBarDown, height, width);
		// arrow-bar-left.svg
		case 19:
			return generateIcon(SVGIcons.arrowBarLeft, height, width);
		// arrow-bar-right.svg
		case 20:
			return generateIcon(SVGIcons.arrowBarRight, height, width);
		// arrow-bar-up.svg
		case 21:
			return generateIcon(SVGIcons.arrowBarUp, height, width);
		// arrow-clockwise.svg
		case 22:
			return generateIcon(SVGIcons.arrowClockwise, height, width);
		// arrow-counterclockwise.svg
		case 23:
			return generateIcon(SVGIcons.arrowCounterclockwise, height, width);
		// arrow-down-circle-fill.svg
		case 24:
			return generateIcon(SVGIcons.arrowDownCircleFill, height, width);
		// arrow-down-circle.svg
		case 25:
			return generateIcon(SVGIcons.arrowDownCircle, height, width);
		// arrow-down-left-circle-fill.svg
		case 26:
			return generateIcon(SVGIcons.arrowDownLeftCircleFill, height, width);
		// arrow-down-left-circle.svg
		case 27:
			return generateIcon(SVGIcons.arrowDownLeftCircle, height, width);
		// arrow-down-left-square-fill.svg
		case 28:
			return generateIcon(SVGIcons.arrowDownLeftSquareFill, height, width);
		// arrow-down-left-square.svg
		case 29:
			return generateIcon(SVGIcons.arrowDownLeftSquare, height, width);
		// arrow-down-left.svg
		case 30:
			return generateIcon(SVGIcons.arrowDownLeft, height, width);
		// arrow-down-right-circle-fill.svg
		case 31:
			return generateIcon(SVGIcons.arrowDownRightCircleFill, height, width);
		// arrow-down-right-circle.svg
		case 32:
			return generateIcon(SVGIcons.arrowDownRightCircle, height, width);
		// arrow-down-right-square-fill.svg
		case 33:
			return generateIcon(SVGIcons.arrowDownRightSquareFill, height, width);
		// arrow-down-right-square.svg
		case 34:
			return generateIcon(SVGIcons.arrowDownRightSquare, height, width);
		// arrow-down-right.svg
		case 35:
			return generateIcon(SVGIcons.arrowDownRight, height, width);
		// arrow-down-short.svg
		case 36:
			return generateIcon(SVGIcons.arrowDownShort, height, width);
		// arrow-down-square-fill.svg
		case 37:
			return generateIcon(SVGIcons.arrowDownSquareFill, height, width);
		// arrow-down-square.svg
		case 38:
			return generateIcon(SVGIcons.arrowDownSquare, height, width);
		// arrow-down-up.svg
		case 39:
			return generateIcon(SVGIcons.arrowDownUp, height, width);
		// arrow-down.svg
		case 40:
			return generateIcon(SVGIcons.arrowDown, height, width);
		// arrow-left-circle-fill.svg
		case 41:
			return generateIcon(SVGIcons.arrowLeftCircleFill, height, width);
		// arrow-left-circle.svg
		case 42:
			return generateIcon(SVGIcons.arrowLeftCircle, height, width);
		// arrow-left-right.svg
		case 43:
			return generateIcon(SVGIcons.arrowLeftRight, height, width);
		// arrow-left-short.svg
		case 44:
			return generateIcon(SVGIcons.arrowLeftShort, height, width);
		// arrow-left-square-fill.svg
		case 45:
			return generateIcon(SVGIcons.arrowLeftSquareFill, height, width);
		// arrow-left-square.svg
		case 46:
			return generateIcon(SVGIcons.arrowLeftSquare, height, width);
		// arrow-left.svg
		case 47:
			return generateIcon(SVGIcons.arrowLeft, height, width);
		// arrow-repeat.svg
		case 48:
			return generateIcon(SVGIcons.arrowRepeat, height, width);
		// arrow-return-left.svg
		case 49:
			return generateIcon(SVGIcons.arrowReturnLeft, height, width);
		// arrow-return-right.svg
		case 50:
			return generateIcon(SVGIcons.arrowReturnRight, height, width);
		// arrow-right-circle-fill.svg
		case 51:
			return generateIcon(SVGIcons.arrowRightCircleFill, height, width);
		// arrow-right-circle.svg
		case 52:
			return generateIcon(SVGIcons.arrowRightCircle, height, width);
		// arrow-right-short.svg
		case 53:
			return generateIcon(SVGIcons.arrowRightShort, height, width);
		// arrow-right-square-fill.svg
		case 54:
			return generateIcon(SVGIcons.arrowRightSquareFill, height, width);
		// arrow-right-square.svg
		case 55:
			return generateIcon(SVGIcons.arrowRightSquare, height, width);
		// arrow-right.svg
		case 56:
			return generateIcon(SVGIcons.arrowRight, height, width);
		// arrow-up-circle-fill.svg
		case 57:
			return generateIcon(SVGIcons.arrowUpCircleFill, height, width);
		// arrow-up-circle.svg
		case 58:
			return generateIcon(SVGIcons.arrowUpCircle, height, width);
		// arrow-up-left-circle-fill.svg
		case 59:
			return generateIcon(SVGIcons.arrowUpLeftCircleFill, height, width);
		// arrow-up-left-circle.svg
		case 60:
			return generateIcon(SVGIcons.arrowUpLeftCircle, height, width);
		// arrow-up-left-square-fill.svg
		case 61:
			return generateIcon(SVGIcons.arrowUpLeftSquareFill, height, width);
		// arrow-up-left-square.svg
		case 62:
			return generateIcon(SVGIcons.arrowUpLeftSquare, height, width);
		// arrow-up-left.svg
		case 63:
			return generateIcon(SVGIcons.arrowUpLeft, height, width);
		// arrow-up-right-circle-fill.svg
		case 64:
			return generateIcon(SVGIcons.arrowUpRightCircleFill, height, width);
		// arrow-up-right-circle.svg
		case 65:
			return generateIcon(SVGIcons.arrowUpRightCircle, height, width);
		// arrow-up-right-square-fill.svg
		case 66:
			return generateIcon(SVGIcons.arrowUpRightSquareFill, height, width);
		// arrow-up-right-square.svg
		case 67:
			return generateIcon(SVGIcons.arrowUpRightSquare, height, width);
		// arrow-up-right.svg
		case 68:
			return generateIcon(SVGIcons.arrowUpRight, height, width);
		// arrow-up-short.svg
		case 69:
			return generateIcon(SVGIcons.arrowUpShort, height, width);
		// arrow-up-square-fill.svg
		case 70:
			return generateIcon(SVGIcons.arrowUpSquareFill, height, width);
		// arrow-up-square.svg
		case 71:
			return generateIcon(SVGIcons.arrowUpSquare, height, width);
		// arrow-up.svg
		case 72:
			return generateIcon(SVGIcons.arrowUp, height, width);
		// arrows-angle-contract.svg
		case 73:
			return generateIcon(SVGIcons.arrowsAngleContract, height, width);
		// arrows-angle-expand.svg
		case 74:
			return generateIcon(SVGIcons.arrowsAngleExpand, height, width);
		// arrows-collapse.svg
		case 75:
			return generateIcon(SVGIcons.arrowsCollapse, height, width);
		// arrows-expand.svg
		case 76:
			return generateIcon(SVGIcons.arrowsExpand, height, width);
		// arrows-fullscreen.svg
		case 77:
			return generateIcon(SVGIcons.arrowsFullscreen, height, width);
		// arrows-move.svg
		case 78:
			return generateIcon(SVGIcons.arrowsMove, height, width);
		// aspect-ratio-fill.svg
		case 79:
			return generateIcon(SVGIcons.aspectRatioFill, height, width);
		// aspect-ratio.svg
		case 80:
			return generateIcon(SVGIcons.aspectRatio, height, width);
		// asterisk.svg
		case 81:
			return generateIcon(SVGIcons.asterisk, height, width);
		// at.svg
		case 82:
			return generateIcon(SVGIcons.at, height, width);
		// award-fill.svg
		case 83:
			return generateIcon(SVGIcons.awardFill, height, width);
		// award.svg
		case 84:
			return generateIcon(SVGIcons.award, height, width);
		// back.svg
		case 85:
			return generateIcon(SVGIcons.back, height, width);
		// backspace-fill.svg
		case 86:
			return generateIcon(SVGIcons.backspaceFill, height, width);
		// backspace-reverse-fill.svg
		case 87:
			return generateIcon(SVGIcons.backspaceReverseFill, height, width);
		// backspace-reverse.svg
		case 88:
			return generateIcon(SVGIcons.backspaceReverse, height, width);
		// backspace.svg
		case 89:
			return generateIcon(SVGIcons.backspace, height, width);
		// badge-4k-fill.svg
		case 90:
			return generateIcon(SVGIcons.badge4kFill, height, width);
		// badge-4k.svg
		case 91:
			return generateIcon(SVGIcons.badge4k, height, width);
		// badge-8k-fill.svg
		case 92:
			return generateIcon(SVGIcons.badge8kFill, height, width);
		// badge-8k.svg
		case 93:
			return generateIcon(SVGIcons.badge8k, height, width);
		// badge-ad-fill.svg
		case 94:
			return generateIcon(SVGIcons.badgeAdFill, height, width);
		// badge-ad.svg
		case 95:
			return generateIcon(SVGIcons.badgeAd, height, width);
		// badge-cc-fill.svg
		case 96:
			return generateIcon(SVGIcons.badgeCcFill, height, width);
		// badge-cc.svg
		case 97:
			return generateIcon(SVGIcons.badgeCc, height, width);
		// badge-hd-fill.svg
		case 98:
			return generateIcon(SVGIcons.badgeHdFill, height, width);
		// badge-hd.svg
		case 99:
			return generateIcon(SVGIcons.badgeHd, height, width);
		// badge-tm-fill.svg
		case 100:
			return generateIcon(SVGIcons.badgeTmFill, height, width);
		// badge-tm.svg
		case 101:
			return generateIcon(SVGIcons.badgeTm, height, width);
		// badge-vo-fill.svg
		case 102:
			return generateIcon(SVGIcons.badgeVoFill, height, width);
		// badge-vo.svg
		case 103:
			return generateIcon(SVGIcons.badgeVo, height, width);
		// bag-check-fill.svg
		case 104:
			return generateIcon(SVGIcons.bagCheckFill, height, width);
		// bag-check.svg
		case 105:
			return generateIcon(SVGIcons.bagCheck, height, width);
		// bag-dash-fill.svg
		case 106:
			return generateIcon(SVGIcons.bagDashFill, height, width);
		// bag-dash.svg
		case 107:
			return generateIcon(SVGIcons.bagDash, height, width);
		// bag-fill.svg
		case 108:
			return generateIcon(SVGIcons.bagFill, height, width);
		// bag-plus-fill.svg
		case 109:
			return generateIcon(SVGIcons.bagPlusFill, height, width);
		// bag-plus.svg
		case 110:
			return generateIcon(SVGIcons.bagPlus, height, width);
		// bag-x-fill.svg
		case 111:
			return generateIcon(SVGIcons.bagXFill, height, width);
		// bag-x.svg
		case 112:
			return generateIcon(SVGIcons.bagX, height, width);
		// bag.svg
		case 113:
			return generateIcon(SVGIcons.bag, height, width);
		// bar-chart-fill.svg
		case 114:
			return generateIcon(SVGIcons.barChartFill, height, width);
		// bar-chart-line-fill.svg
		case 115:
			return generateIcon(SVGIcons.barChartLineFill, height, width);
		// bar-chart-line.svg
		case 116:
			return generateIcon(SVGIcons.barChartLine, height, width);
		// bar-chart-steps.svg
		case 117:
			return generateIcon(SVGIcons.barChartSteps, height, width);
		// bar-chart.svg
		case 118:
			return generateIcon(SVGIcons.barChart, height, width);
		// basket-fill.svg
		case 119:
			return generateIcon(SVGIcons.basketFill, height, width);
		// basket.svg
		case 120:
			return generateIcon(SVGIcons.basket, height, width);
		// basket2-fill.svg
		case 121:
			return generateIcon(SVGIcons.basket2Fill, height, width);
		// basket2.svg
		case 122:
			return generateIcon(SVGIcons.basket2, height, width);
		// basket3-fill.svg
		case 123:
			return generateIcon(SVGIcons.basket3Fill, height, width);
		// basket3.svg
		case 124:
			return generateIcon(SVGIcons.basket3, height, width);
		// battery-charging.svg
		case 125:
			return generateIcon(SVGIcons.batteryCharging, height, width);
		// battery-full.svg
		case 126:
			return generateIcon(SVGIcons.batteryFull, height, width);
		// battery-half.svg
		case 127:
			return generateIcon(SVGIcons.batteryHalf, height, width);
		// battery.svg
		case 128:
			return generateIcon(SVGIcons.battery, height, width);
		// bell-fill.svg
		case 129:
			return generateIcon(SVGIcons.bellFill, height, width);
		// bell.svg
		case 130:
			return generateIcon(SVGIcons.bell, height, width);
		// bezier.svg
		case 131:
			return generateIcon(SVGIcons.bezier, height, width);
		// bezier2.svg
		case 132:
			return generateIcon(SVGIcons.bezier2, height, width);
		// bicycle.svg
		case 133:
			return generateIcon(SVGIcons.bicycle, height, width);
		// binoculars-fill.svg
		case 134:
			return generateIcon(SVGIcons.binocularsFill, height, width);
		// binoculars.svg
		case 135:
			return generateIcon(SVGIcons.binoculars, height, width);
		// blockquote-left.svg
		case 136:
			return generateIcon(SVGIcons.blockquoteLeft, height, width);
		// blockquote-right.svg
		case 137:
			return generateIcon(SVGIcons.blockquoteRight, height, width);
		// book-fill.svg
		case 138:
			return generateIcon(SVGIcons.bookFill, height, width);
		// book-half.svg
		case 139:
			return generateIcon(SVGIcons.bookHalf, height, width);
		// book.svg
		case 140:
			return generateIcon(SVGIcons.book, height, width);
		// bookmark-check-fill.svg
		case 141:
			return generateIcon(SVGIcons.bookmarkCheckFill, height, width);
		// bookmark-check.svg
		case 142:
			return generateIcon(SVGIcons.bookmarkCheck, height, width);
		// bookmark-dash-fill.svg
		case 143:
			return generateIcon(SVGIcons.bookmarkDashFill, height, width);
		// bookmark-dash.svg
		case 144:
			return generateIcon(SVGIcons.bookmarkDash, height, width);
		// bookmark-fill.svg
		case 145:
			return generateIcon(SVGIcons.bookmarkFill, height, width);
		// bookmark-heart-fill.svg
		case 146:
			return generateIcon(SVGIcons.bookmarkHeartFill, height, width);
		// bookmark-heart.svg
		case 147:
			return generateIcon(SVGIcons.bookmarkHeart, height, width);
		// bookmark-plus-fill.svg
		case 148:
			return generateIcon(SVGIcons.bookmarkPlusFill, height, width);
		// bookmark-plus.svg
		case 149:
			return generateIcon(SVGIcons.bookmarkPlus, height, width);
		// bookmark-star-fill.svg
		case 150:
			return generateIcon(SVGIcons.bookmarkStarFill, height, width);
		// bookmark-star.svg
		case 151:
			return generateIcon(SVGIcons.bookmarkStar, height, width);
		// bookmark-x-fill.svg
		case 152:
			return generateIcon(SVGIcons.bookmarkXFill, height, width);
		// bookmark-x.svg
		case 153:
			return generateIcon(SVGIcons.bookmarkX, height, width);
		// bookmark.svg
		case 154:
			return generateIcon(SVGIcons.bookmark, height, width);
		// bookmarks-fill.svg
		case 155:
			return generateIcon(SVGIcons.bookmarksFill, height, width);
		// bookmarks.svg
		case 156:
			return generateIcon(SVGIcons.bookmarks, height, width);
		// bookshelf.svg
		case 157:
			return generateIcon(SVGIcons.bookshelf, height, width);
		// bootstrap-fill.svg
		case 158:
			return generateIcon(SVGIcons.bootstrapFill, height, width);
		// bootstrap-reboot.svg
		case 159:
			return generateIcon(SVGIcons.bootstrapReboot, height, width);
		// bootstrap.svg
		case 160:
			return generateIcon(SVGIcons.bootstrap, height, width);
		// border-style.svg
		case 161:
			return generateIcon(SVGIcons.borderStyle, height, width);
		// border-width.svg
		case 162:
			return generateIcon(SVGIcons.borderWidth, height, width);
		// bounding-box-circles.svg
		case 163:
			return generateIcon(SVGIcons.boundingBoxCircles, height, width);
		// bounding-box.svg
		case 164:
			return generateIcon(SVGIcons.boundingBox, height, width);
		// box-arrow-down-left.svg
		case 165:
			return generateIcon(SVGIcons.boxArrowDownLeft, height, width);
		// box-arrow-down-right.svg
		case 166:
			return generateIcon(SVGIcons.boxArrowDownRight, height, width);
		// box-arrow-down.svg
		case 167:
			return generateIcon(SVGIcons.boxArrowDown, height, width);
		// box-arrow-in-down-left.svg
		case 168:
			return generateIcon(SVGIcons.boxArrowInDownLeft, height, width);
		// box-arrow-in-down-right.svg
		case 169:
			return generateIcon(SVGIcons.boxArrowInDownRight, height, width);
		// box-arrow-in-down.svg
		case 170:
			return generateIcon(SVGIcons.boxArrowInDown, height, width);
		// box-arrow-in-left.svg
		case 171:
			return generateIcon(SVGIcons.boxArrowInLeft, height, width);
		// box-arrow-in-right.svg
		case 172:
			return generateIcon(SVGIcons.boxArrowInRight, height, width);
		// box-arrow-in-up-left.svg
		case 173:
			return generateIcon(SVGIcons.boxArrowInUpLeft, height, width);
		// box-arrow-in-up-right.svg
		case 174:
			return generateIcon(SVGIcons.boxArrowInUpRight, height, width);
		// box-arrow-in-up.svg
		case 175:
			return generateIcon(SVGIcons.boxArrowInUp, height, width);
		// box-arrow-left.svg
		case 176:
			return generateIcon(SVGIcons.boxArrowLeft, height, width);
		// box-arrow-right.svg
		case 177:
			return generateIcon(SVGIcons.boxArrowRight, height, width);
		// box-arrow-up-left.svg
		case 178:
			return generateIcon(SVGIcons.boxArrowUpLeft, height, width);
		// box-arrow-up-right.svg
		case 179:
			return generateIcon(SVGIcons.boxArrowUpRight, height, width);
		// box-arrow-up.svg
		case 180:
			return generateIcon(SVGIcons.boxArrowUp, height, width);
		// box-seam.svg
		case 181:
			return generateIcon(SVGIcons.boxSeam, height, width);
		// box.svg
		case 182:
			return generateIcon(SVGIcons.box, height, width);
		// braces.svg
		case 183:
			return generateIcon(SVGIcons.braces, height, width);
		// bricks.svg
		case 184:
			return generateIcon(SVGIcons.bricks, height, width);
		// briefcase-fill.svg
		case 185:
			return generateIcon(SVGIcons.briefcaseFill, height, width);
		// briefcase.svg
		case 186:
			return generateIcon(SVGIcons.briefcase, height, width);
		// brightness-alt-high-fill.svg
		case 187:
			return generateIcon(SVGIcons.brightnessAltHighFill, height, width);
		// brightness-alt-high.svg
		case 188:
			return generateIcon(SVGIcons.brightnessAltHigh, height, width);
		// brightness-alt-low-fill.svg
		case 189:
			return generateIcon(SVGIcons.brightnessAltLowFill, height, width);
		// brightness-alt-low.svg
		case 190:
			return generateIcon(SVGIcons.brightnessAltLow, height, width);
		// brightness-high-fill.svg
		case 191:
			return generateIcon(SVGIcons.brightnessHighFill, height, width);
		// brightness-high.svg
		case 192:
			return generateIcon(SVGIcons.brightnessHigh, height, width);
		// brightness-low-fill.svg
		case 193:
			return generateIcon(SVGIcons.brightnessLowFill, height, width);
		// brightness-low.svg
		case 194:
			return generateIcon(SVGIcons.brightnessLow, height, width);
		// broadcast-pin.svg
		case 195:
			return generateIcon(SVGIcons.broadcastPin, height, width);
		// broadcast.svg
		case 196:
			return generateIcon(SVGIcons.broadcast, height, width);
		// brush-fill.svg
		case 197:
			return generateIcon(SVGIcons.brushFill, height, width);
		// brush.svg
		case 198:
			return generateIcon(SVGIcons.brush, height, width);
		// bucket-fill.svg
		case 199:
			return generateIcon(SVGIcons.bucketFill, height, width);
		// bucket.svg
		case 200:
			return generateIcon(SVGIcons.bucket, height, width);
		// bug-fill.svg
		case 201:
			return generateIcon(SVGIcons.bugFill, height, width);
		// bug.svg
		case 202:
			return generateIcon(SVGIcons.bug, height, width);
		// building.svg
		case 203:
			return generateIcon(SVGIcons.building, height, width);
		// bullseye.svg
		case 204:
			return generateIcon(SVGIcons.bullseye, height, width);
		// calculator-fill.svg
		case 205:
			return generateIcon(SVGIcons.calculatorFill, height, width);
		// calculator.svg
		case 206:
			return generateIcon(SVGIcons.calculator, height, width);
		// calendar-check-fill.svg
		case 207:
			return generateIcon(SVGIcons.calendarCheckFill, height, width);
		// calendar-check.svg
		case 208:
			return generateIcon(SVGIcons.calendarCheck, height, width);
		// calendar-date-fill.svg
		case 209:
			return generateIcon(SVGIcons.calendarDateFill, height, width);
		// calendar-date.svg
		case 210:
			return generateIcon(SVGIcons.calendarDate, height, width);
		// calendar-day-fill.svg
		case 211:
			return generateIcon(SVGIcons.calendarDayFill, height, width);
		// calendar-day.svg
		case 212:
			return generateIcon(SVGIcons.calendarDay, height, width);
		// calendar-event-fill.svg
		case 213:
			return generateIcon(SVGIcons.calendarEventFill, height, width);
		// calendar-event.svg
		case 214:
			return generateIcon(SVGIcons.calendarEvent, height, width);
		// calendar-fill.svg
		case 215:
			return generateIcon(SVGIcons.calendarFill, height, width);
		// calendar-minus-fill.svg
		case 216:
			return generateIcon(SVGIcons.calendarMinusFill, height, width);
		// calendar-minus.svg
		case 217:
			return generateIcon(SVGIcons.calendarMinus, height, width);
		// calendar-month-fill.svg
		case 218:
			return generateIcon(SVGIcons.calendarMonthFill, height, width);
		// calendar-month.svg
		case 219:
			return generateIcon(SVGIcons.calendarMonth, height, width);
		// calendar-plus-fill.svg
		case 220:
			return generateIcon(SVGIcons.calendarPlusFill, height, width);
		// calendar-plus.svg
		case 221:
			return generateIcon(SVGIcons.calendarPlus, height, width);
		// calendar-range-fill.svg
		case 222:
			return generateIcon(SVGIcons.calendarRangeFill, height, width);
		// calendar-range.svg
		case 223:
			return generateIcon(SVGIcons.calendarRange, height, width);
		// calendar-week-fill.svg
		case 224:
			return generateIcon(SVGIcons.calendarWeekFill, height, width);
		// calendar-week.svg
		case 225:
			return generateIcon(SVGIcons.calendarWeek, height, width);
		// calendar-x-fill.svg
		case 226:
			return generateIcon(SVGIcons.calendarXFill, height, width);
		// calendar-x.svg
		case 227:
			return generateIcon(SVGIcons.calendarX, height, width);
		// calendar.svg
		case 228:
			return generateIcon(SVGIcons.calendar, height, width);
		// calendar2-check-fill.svg
		case 229:
			return generateIcon(SVGIcons.calendar2CheckFill, height, width);
		// calendar2-check.svg
		case 230:
			return generateIcon(SVGIcons.calendar2Check, height, width);
		// calendar2-date-fill.svg
		case 231:
			return generateIcon(SVGIcons.calendar2DateFill, height, width);
		// calendar2-date.svg
		case 232:
			return generateIcon(SVGIcons.calendar2Date, height, width);
		// calendar2-day-fill.svg
		case 233:
			return generateIcon(SVGIcons.calendar2DayFill, height, width);
		// calendar2-day.svg
		case 234:
			return generateIcon(SVGIcons.calendar2Day, height, width);
		// calendar2-event-fill.svg
		case 235:
			return generateIcon(SVGIcons.calendar2EventFill, height, width);
		// calendar2-event.svg
		case 236:
			return generateIcon(SVGIcons.calendar2Event, height, width);
		// calendar2-fill.svg
		case 237:
			return generateIcon(SVGIcons.calendar2Fill, height, width);
		// calendar2-minus-fill.svg
		case 238:
			return generateIcon(SVGIcons.calendar2MinusFill, height, width);
		// calendar2-minus.svg
		case 239:
			return generateIcon(SVGIcons.calendar2Minus, height, width);
		// calendar2-month-fill.svg
		case 240:
			return generateIcon(SVGIcons.calendar2MonthFill, height, width);
		// calendar2-month.svg
		case 241:
			return generateIcon(SVGIcons.calendar2Month, height, width);
		// calendar2-plus-fill.svg
		case 242:
			return generateIcon(SVGIcons.calendar2PlusFill, height, width);
		// calendar2-plus.svg
		case 243:
			return generateIcon(SVGIcons.calendar2Plus, height, width);
		// calendar2-range-fill.svg
		case 244:
			return generateIcon(SVGIcons.calendar2RangeFill, height, width);
		// calendar2-range.svg
		case 245:
			return generateIcon(SVGIcons.calendar2Range, height, width);
		// calendar2-week-fill.svg
		case 246:
			return generateIcon(SVGIcons.calendar2WeekFill, height, width);
		// calendar2-week.svg
		case 247:
			return generateIcon(SVGIcons.calendar2Week, height, width);
		// calendar2-x-fill.svg
		case 248:
			return generateIcon(SVGIcons.calendar2XFill, height, width);
		// calendar2-x.svg
		case 249:
			return generateIcon(SVGIcons.calendar2X, height, width);
		// calendar2.svg
		case 250:
			return generateIcon(SVGIcons.calendar2, height, width);
		// calendar3-event-fill.svg
		case 251:
			return generateIcon(SVGIcons.calendar3EventFill, height, width);
		// calendar3-event.svg
		case 252:
			return generateIcon(SVGIcons.calendar3Event, height, width);
		// calendar3-fill.svg
		case 253:
			return generateIcon(SVGIcons.calendar3Fill, height, width);
		// calendar3-range-fill.svg
		case 254:
			return generateIcon(SVGIcons.calendar3RangeFill, height, width);
		// calendar3-range.svg
		case 255:
			return generateIcon(SVGIcons.calendar3Range, height, width);
		// calendar3-week-fill.svg
		case 256:
			return generateIcon(SVGIcons.calendar3WeekFill, height, width);
		// calendar3-week.svg
		case 257:
			return generateIcon(SVGIcons.calendar3Week, height, width);
		// calendar3.svg
		case 258:
			return generateIcon(SVGIcons.calendar3, height, width);
		// calendar4-event.svg
		case 259:
			return generateIcon(SVGIcons.calendar4Event, height, width);
		// calendar4-range.svg
		case 260:
			return generateIcon(SVGIcons.calendar4Range, height, width);
		// calendar4-week.svg
		case 261:
			return generateIcon(SVGIcons.calendar4Week, height, width);
		// calendar4.svg
		case 262:
			return generateIcon(SVGIcons.calendar4, height, width);
		// camera-fill.svg
		case 263:
			return generateIcon(SVGIcons.cameraFill, height, width);
		// camera-reels-fill.svg
		case 264:
			return generateIcon(SVGIcons.cameraReelsFill, height, width);
		// camera-reels.svg
		case 265:
			return generateIcon(SVGIcons.cameraReels, height, width);
		// camera-video-fill.svg
		case 266:
			return generateIcon(SVGIcons.cameraVideoFill, height, width);
		// camera-video-off-fill.svg
		case 267:
			return generateIcon(SVGIcons.cameraVideoOffFill, height, width);
		// camera-video-off.svg
		case 268:
			return generateIcon(SVGIcons.cameraVideoOff, height, width);
		// camera-video.svg
		case 269:
			return generateIcon(SVGIcons.cameraVideo, height, width);
		// camera.svg
		case 270:
			return generateIcon(SVGIcons.camera, height, width);
		// camera2.svg
		case 271:
			return generateIcon(SVGIcons.camera2, height, width);
		// capslock-fill.svg
		case 272:
			return generateIcon(SVGIcons.capslockFill, height, width);
		// capslock.svg
		case 273:
			return generateIcon(SVGIcons.capslock, height, width);
		// card-checklist.svg
		case 274:
			return generateIcon(SVGIcons.cardChecklist, height, width);
		// card-heading.svg
		case 275:
			return generateIcon(SVGIcons.cardHeading, height, width);
		// card-image.svg
		case 276:
			return generateIcon(SVGIcons.cardImage, height, width);
		// card-list.svg
		case 277:
			return generateIcon(SVGIcons.cardList, height, width);
		// card-text.svg
		case 278:
			return generateIcon(SVGIcons.cardText, height, width);
		// caret-down-fill.svg
		case 279:
			return generateIcon(SVGIcons.caretDownFill, height, width);
		// caret-down-square-fill.svg
		case 280:
			return generateIcon(SVGIcons.caretDownSquareFill, height, width);
		// caret-down-square.svg
		case 281:
			return generateIcon(SVGIcons.caretDownSquare, height, width);
		// caret-down.svg
		case 282:
			return generateIcon(SVGIcons.caretDown, height, width);
		// caret-left-fill.svg
		case 283:
			return generateIcon(SVGIcons.caretLeftFill, height, width);
		// caret-left-square-fill.svg
		case 284:
			return generateIcon(SVGIcons.caretLeftSquareFill, height, width);
		// caret-left-square.svg
		case 285:
			return generateIcon(SVGIcons.caretLeftSquare, height, width);
		// caret-left.svg
		case 286:
			return generateIcon(SVGIcons.caretLeft, height, width);
		// caret-right-fill.svg
		case 287:
			return generateIcon(SVGIcons.caretRightFill, height, width);
		// caret-right-square-fill.svg
		case 288:
			return generateIcon(SVGIcons.caretRightSquareFill, height, width);
		// caret-right-square.svg
		case 289:
			return generateIcon(SVGIcons.caretRightSquare, height, width);
		// caret-right.svg
		case 290:
			return generateIcon(SVGIcons.caretRight, height, width);
		// caret-up-fill.svg
		case 291:
			return generateIcon(SVGIcons.caretUpFill, height, width);
		// caret-up-square-fill.svg
		case 292:
			return generateIcon(SVGIcons.caretUpSquareFill, height, width);
		// caret-up-square.svg
		case 293:
			return generateIcon(SVGIcons.caretUpSquare, height, width);
		// caret-up.svg
		case 294:
			return generateIcon(SVGIcons.caretUp, height, width);
		// cart-check-fill.svg
		case 295:
			return generateIcon(SVGIcons.cartCheckFill, height, width);
		// cart-check.svg
		case 296:
			return generateIcon(SVGIcons.cartCheck, height, width);
		// cart-dash-fill.svg
		case 297:
			return generateIcon(SVGIcons.cartDashFill, height, width);
		// cart-dash.svg
		case 298:
			return generateIcon(SVGIcons.cartDash, height, width);
		// cart-fill.svg
		case 299:
			return generateIcon(SVGIcons.cartFill, height, width);
		// cart-plus-fill.svg
		case 300:
			return generateIcon(SVGIcons.cartPlusFill, height, width);
		// cart-plus.svg
		case 301:
			return generateIcon(SVGIcons.cartPlus, height, width);
		// cart-x-fill.svg
		case 302:
			return generateIcon(SVGIcons.cartXFill, height, width);
		// cart-x.svg
		case 303:
			return generateIcon(SVGIcons.cartX, height, width);
		// cart.svg
		case 304:
			return generateIcon(SVGIcons.cart, height, width);
		// cart2.svg
		case 305:
			return generateIcon(SVGIcons.cart2, height, width);
		// cart3.svg
		case 306:
			return generateIcon(SVGIcons.cart3, height, width);
		// cart4.svg
		case 307:
			return generateIcon(SVGIcons.cart4, height, width);
		// cash-stack.svg
		case 308:
			return generateIcon(SVGIcons.cashStack, height, width);
		// cash.svg
		case 309:
			return generateIcon(SVGIcons.cash, height, width);
		// cast.svg
		case 310:
			return generateIcon(SVGIcons.cast, height, width);
		// chat-dots-fill.svg
		case 311:
			return generateIcon(SVGIcons.chatDotsFill, height, width);
		// chat-dots.svg
		case 312:
			return generateIcon(SVGIcons.chatDots, height, width);
		// chat-fill.svg
		case 313:
			return generateIcon(SVGIcons.chatFill, height, width);
		// chat-left-dots-fill.svg
		case 314:
			return generateIcon(SVGIcons.chatLeftDotsFill, height, width);
		// chat-left-dots.svg
		case 315:
			return generateIcon(SVGIcons.chatLeftDots, height, width);
		// chat-left-fill.svg
		case 316:
			return generateIcon(SVGIcons.chatLeftFill, height, width);
		// chat-left-quote-fill.svg
		case 317:
			return generateIcon(SVGIcons.chatLeftQuoteFill, height, width);
		// chat-left-quote.svg
		case 318:
			return generateIcon(SVGIcons.chatLeftQuote, height, width);
		// chat-left-text-fill.svg
		case 319:
			return generateIcon(SVGIcons.chatLeftTextFill, height, width);
		// chat-left-text.svg
		case 320:
			return generateIcon(SVGIcons.chatLeftText, height, width);
		// chat-left.svg
		case 321:
			return generateIcon(SVGIcons.chatLeft, height, width);
		// chat-quote-fill.svg
		case 322:
			return generateIcon(SVGIcons.chatQuoteFill, height, width);
		// chat-quote.svg
		case 323:
			return generateIcon(SVGIcons.chatQuote, height, width);
		// chat-right-dots-fill.svg
		case 324:
			return generateIcon(SVGIcons.chatRightDotsFill, height, width);
		// chat-right-dots.svg
		case 325:
			return generateIcon(SVGIcons.chatRightDots, height, width);
		// chat-right-fill.svg
		case 326:
			return generateIcon(SVGIcons.chatRightFill, height, width);
		// chat-right-quote-fill.svg
		case 327:
			return generateIcon(SVGIcons.chatRightQuoteFill, height, width);
		// chat-right-quote.svg
		case 328:
			return generateIcon(SVGIcons.chatRightQuote, height, width);
		// chat-right-text-fill.svg
		case 329:
			return generateIcon(SVGIcons.chatRightTextFill, height, width);
		// chat-right-text.svg
		case 330:
			return generateIcon(SVGIcons.chatRightText, height, width);
		// chat-right.svg
		case 331:
			return generateIcon(SVGIcons.chatRight, height, width);
		// chat-square-dots-fill.svg
		case 332:
			return generateIcon(SVGIcons.chatSquareDotsFill, height, width);
		// chat-square-dots.svg
		case 333:
			return generateIcon(SVGIcons.chatSquareDots, height, width);
		// chat-square-fill.svg
		case 334:
			return generateIcon(SVGIcons.chatSquareFill, height, width);
		// chat-square-quote-fill.svg
		case 335:
			return generateIcon(SVGIcons.chatSquareQuoteFill, height, width);
		// chat-square-quote.svg
		case 336:
			return generateIcon(SVGIcons.chatSquareQuote, height, width);
		// chat-square-text-fill.svg
		case 337:
			return generateIcon(SVGIcons.chatSquareTextFill, height, width);
		// chat-square-text.svg
		case 338:
			return generateIcon(SVGIcons.chatSquareText, height, width);
		// chat-square.svg
		case 339:
			return generateIcon(SVGIcons.chatSquare, height, width);
		// chat-text-fill.svg
		case 340:
			return generateIcon(SVGIcons.chatTextFill, height, width);
		// chat-text.svg
		case 341:
			return generateIcon(SVGIcons.chatText, height, width);
		// chat.svg
		case 342:
			return generateIcon(SVGIcons.chat, height, width);
		// check-all.svg
		case 343:
			return generateIcon(SVGIcons.checkAll, height, width);
		// check-circle-fill.svg
		case 344:
			return generateIcon(SVGIcons.checkCircleFill, height, width);
		// check-circle.svg
		case 345:
			return generateIcon(SVGIcons.checkCircle, height, width);
		// check-square-fill.svg
		case 346:
			return generateIcon(SVGIcons.checkSquareFill, height, width);
		// check-square.svg
		case 347:
			return generateIcon(SVGIcons.checkSquare, height, width);
		// check.svg
		case 348:
			return generateIcon(SVGIcons.check, height, width);
		// check2-all.svg
		case 349:
			return generateIcon(SVGIcons.check2All, height, width);
		// check2-circle.svg
		case 350:
			return generateIcon(SVGIcons.check2Circle, height, width);
		// check2-square.svg
		case 351:
			return generateIcon(SVGIcons.check2Square, height, width);
		// check2.svg
		case 352:
			return generateIcon(SVGIcons.check2, height, width);
		// chevron-bar-contract.svg
		case 353:
			return generateIcon(SVGIcons.chevronBarContract, height, width);
		// chevron-bar-down.svg
		case 354:
			return generateIcon(SVGIcons.chevronBarDown, height, width);
		// chevron-bar-expand.svg
		case 355:
			return generateIcon(SVGIcons.chevronBarExpand, height, width);
		// chevron-bar-left.svg
		case 356:
			return generateIcon(SVGIcons.chevronBarLeft, height, width);
		// chevron-bar-right.svg
		case 357:
			return generateIcon(SVGIcons.chevronBarRight, height, width);
		// chevron-bar-up.svg
		case 358:
			return generateIcon(SVGIcons.chevronBarUp, height, width);
		// chevron-compact-down.svg
		case 359:
			return generateIcon(SVGIcons.chevronCompactDown, height, width);
		// chevron-compact-left.svg
		case 360:
			return generateIcon(SVGIcons.chevronCompactLeft, height, width);
		// chevron-compact-right.svg
		case 361:
			return generateIcon(SVGIcons.chevronCompactRight, height, width);
		// chevron-compact-up.svg
		case 362:
			return generateIcon(SVGIcons.chevronCompactUp, height, width);
		// chevron-contract.svg
		case 363:
			return generateIcon(SVGIcons.chevronContract, height, width);
		// chevron-double-down.svg
		case 364:
			return generateIcon(SVGIcons.chevronDoubleDown, height, width);
		// chevron-double-left.svg
		case 365:
			return generateIcon(SVGIcons.chevronDoubleLeft, height, width);
		// chevron-double-right.svg
		case 366:
			return generateIcon(SVGIcons.chevronDoubleRight, height, width);
		// chevron-double-up.svg
		case 367:
			return generateIcon(SVGIcons.chevronDoubleUp, height, width);
		// chevron-down.svg
		case 368:
			return generateIcon(SVGIcons.chevronDown, height, width);
		// chevron-expand.svg
		case 369:
			return generateIcon(SVGIcons.chevronExpand, height, width);
		// chevron-left.svg
		case 370:
			return generateIcon(SVGIcons.chevronLeft, height, width);
		// chevron-right.svg
		case 371:
			return generateIcon(SVGIcons.chevronRight, height, width);
		// chevron-up.svg
		case 372:
			return generateIcon(SVGIcons.chevronUp, height, width);
		// circle-fill.svg
		case 373:
			return generateIcon(SVGIcons.circleFill, height, width);
		// circle-half.svg
		case 374:
			return generateIcon(SVGIcons.circleHalf, height, width);
		// circle-square.svg
		case 375:
			return generateIcon(SVGIcons.circleSquare, height, width);
		// circle.svg
		case 376:
			return generateIcon(SVGIcons.circle, height, width);
		// clipboard-check.svg
		case 377:
			return generateIcon(SVGIcons.clipboardCheck, height, width);
		// clipboard-data.svg
		case 378:
			return generateIcon(SVGIcons.clipboardData, height, width);
		// clipboard-minus.svg
		case 379:
			return generateIcon(SVGIcons.clipboardMinus, height, width);
		// clipboard-plus.svg
		case 380:
			return generateIcon(SVGIcons.clipboardPlus, height, width);
		// clipboard-x.svg
		case 381:
			return generateIcon(SVGIcons.clipboardX, height, width);
		// clipboard.svg
		case 382:
			return generateIcon(SVGIcons.clipboard, height, width);
		// clock-fill.svg
		case 383:
			return generateIcon(SVGIcons.clockFill, height, width);
		// clock-history.svg
		case 384:
			return generateIcon(SVGIcons.clockHistory, height, width);
		// clock.svg
		case 385:
			return generateIcon(SVGIcons.clock, height, width);
		// cloud-arrow-down-fill.svg
		case 386:
			return generateIcon(SVGIcons.cloudArrowDownFill, height, width);
		// cloud-arrow-down.svg
		case 387:
			return generateIcon(SVGIcons.cloudArrowDown, height, width);
		// cloud-arrow-up-fill.svg
		case 388:
			return generateIcon(SVGIcons.cloudArrowUpFill, height, width);
		// cloud-arrow-up.svg
		case 389:
			return generateIcon(SVGIcons.cloudArrowUp, height, width);
		// cloud-check-fill.svg
		case 390:
			return generateIcon(SVGIcons.cloudCheckFill, height, width);
		// cloud-check.svg
		case 391:
			return generateIcon(SVGIcons.cloudCheck, height, width);
		// cloud-download-fill.svg
		case 392:
			return generateIcon(SVGIcons.cloudDownloadFill, height, width);
		// cloud-download.svg
		case 393:
			return generateIcon(SVGIcons.cloudDownload, height, width);
		// cloud-fill.svg
		case 394:
			return generateIcon(SVGIcons.cloudFill, height, width);
		// cloud-minus-fill.svg
		case 395:
			return generateIcon(SVGIcons.cloudMinusFill, height, width);
		// cloud-minus.svg
		case 396:
			return generateIcon(SVGIcons.cloudMinus, height, width);
		// cloud-plus-fill.svg
		case 397:
			return generateIcon(SVGIcons.cloudPlusFill, height, width);
		// cloud-plus.svg
		case 398:
			return generateIcon(SVGIcons.cloudPlus, height, width);
		// cloud-slash-fill.svg
		case 399:
			return generateIcon(SVGIcons.cloudSlashFill, height, width);
		// cloud-slash.svg
		case 400:
			return generateIcon(SVGIcons.cloudSlash, height, width);
		// cloud-upload-fill.svg
		case 401:
			return generateIcon(SVGIcons.cloudUploadFill, height, width);
		// cloud-upload.svg
		case 402:
			return generateIcon(SVGIcons.cloudUpload, height, width);
		// cloud.svg
		case 403:
			return generateIcon(SVGIcons.cloud, height, width);
		// code-slash.svg
		case 404:
			return generateIcon(SVGIcons.codeSlash, height, width);
		// code-square.svg
		case 405:
			return generateIcon(SVGIcons.codeSquare, height, width);
		// code.svg
		case 406:
			return generateIcon(SVGIcons.code, height, width);
		// collection-fill.svg
		case 407:
			return generateIcon(SVGIcons.collectionFill, height, width);
		// collection-play-fill.svg
		case 408:
			return generateIcon(SVGIcons.collectionPlayFill, height, width);
		// collection-play.svg
		case 409:
			return generateIcon(SVGIcons.collectionPlay, height, width);
		// collection.svg
		case 410:
			return generateIcon(SVGIcons.collection, height, width);
		// columns-gap.svg
		case 411:
			return generateIcon(SVGIcons.columnsGap, height, width);
		// columns.svg
		case 412:
			return generateIcon(SVGIcons.columns, height, width);
		// command.svg
		case 413:
			return generateIcon(SVGIcons.command, height, width);
		// compass-fill.svg
		case 414:
			return generateIcon(SVGIcons.compassFill, height, width);
		// compass.svg
		case 415:
			return generateIcon(SVGIcons.compass, height, width);
		// cone-striped.svg
		case 416:
			return generateIcon(SVGIcons.coneStriped, height, width);
		// cone.svg
		case 417:
			return generateIcon(SVGIcons.cone, height, width);
		// controller.svg
		case 418:
			return generateIcon(SVGIcons.controller, height, width);
		// cpu-fill.svg
		case 419:
			return generateIcon(SVGIcons.cpuFill, height, width);
		// cpu.svg
		case 420:
			return generateIcon(SVGIcons.cpu, height, width);
		// credit-card-2-back-fill.svg
		case 421:
			return generateIcon(SVGIcons.creditCard2BackFill, height, width);
		// credit-card-2-back.svg
		case 422:
			return generateIcon(SVGIcons.creditCard2Back, height, width);
		// credit-card-2-front-fill.svg
		case 423:
			return generateIcon(SVGIcons.creditCard2FrontFill, height, width);
		// credit-card-2-front.svg
		case 424:
			return generateIcon(SVGIcons.creditCard2Front, height, width);
		// credit-card-fill.svg
		case 425:
			return generateIcon(SVGIcons.creditCardFill, height, width);
		// credit-card.svg
		case 426:
			return generateIcon(SVGIcons.creditCard, height, width);
		// crop.svg
		case 427:
			return generateIcon(SVGIcons.crop, height, width);
		// cup-fill.svg
		case 428:
			return generateIcon(SVGIcons.cupFill, height, width);
		// cup-straw.svg
		case 429:
			return generateIcon(SVGIcons.cupStraw, height, width);
		// cup.svg
		case 430:
			return generateIcon(SVGIcons.cup, height, width);
		// cursor-fill.svg
		case 431:
			return generateIcon(SVGIcons.cursorFill, height, width);
		// cursor-text.svg
		case 432:
			return generateIcon(SVGIcons.cursorText, height, width);
		// cursor.svg
		case 433:
			return generateIcon(SVGIcons.cursor, height, width);
		// dash-circle-fill.svg
		case 434:
			return generateIcon(SVGIcons.dashCircleFill, height, width);
		// dash-circle.svg
		case 435:
			return generateIcon(SVGIcons.dashCircle, height, width);
		// dash-square-fill.svg
		case 436:
			return generateIcon(SVGIcons.dashSquareFill, height, width);
		// dash-square.svg
		case 437:
			return generateIcon(SVGIcons.dashSquare, height, width);
		// dash.svg
		case 438:
			return generateIcon(SVGIcons.dash, height, width);
		// diagram-2-fill.svg
		case 439:
			return generateIcon(SVGIcons.diagram2Fill, height, width);
		// diagram-2.svg
		case 440:
			return generateIcon(SVGIcons.diagram2, height, width);
		// diagram-3-fill.svg
		case 441:
			return generateIcon(SVGIcons.diagram3Fill, height, width);
		// diagram-3.svg
		case 442:
			return generateIcon(SVGIcons.diagram3, height, width);
		// diamond-fill.svg
		case 443:
			return generateIcon(SVGIcons.diamondFill, height, width);
		// diamond-half.svg
		case 444:
			return generateIcon(SVGIcons.diamondHalf, height, width);
		// diamond.svg
		case 445:
			return generateIcon(SVGIcons.diamond, height, width);
		// dice-1-fill.svg
		case 446:
			return generateIcon(SVGIcons.dice1Fill, height, width);
		// dice-1.svg
		case 447:
			return generateIcon(SVGIcons.dice1, height, width);
		// dice-2-fill.svg
		case 448:
			return generateIcon(SVGIcons.dice2Fill, height, width);
		// dice-2.svg
		case 449:
			return generateIcon(SVGIcons.dice2, height, width);
		// dice-3-fill.svg
		case 450:
			return generateIcon(SVGIcons.dice3Fill, height, width);
		// dice-3.svg
		case 451:
			return generateIcon(SVGIcons.dice3, height, width);
		// dice-4-fill.svg
		case 452:
			return generateIcon(SVGIcons.dice4Fill, height, width);
		// dice-4.svg
		case 453:
			return generateIcon(SVGIcons.dice4, height, width);
		// dice-5-fill.svg
		case 454:
			return generateIcon(SVGIcons.dice5Fill, height, width);
		// dice-5.svg
		case 455:
			return generateIcon(SVGIcons.dice5, height, width);
		// dice-6-fill.svg
		case 456:
			return generateIcon(SVGIcons.dice6Fill, height, width);
		// dice-6.svg
		case 457:
			return generateIcon(SVGIcons.dice6, height, width);
		// disc-fill.svg
		case 458:
			return generateIcon(SVGIcons.discFill, height, width);
		// disc.svg
		case 459:
			return generateIcon(SVGIcons.disc, height, width);
		// discord.svg
		case 460:
			return generateIcon(SVGIcons.discord, height, width);
		// display-fill.svg
		case 461:
			return generateIcon(SVGIcons.displayFill, height, width);
		// display.svg
		case 462:
			return generateIcon(SVGIcons.display, height, width);
		// distribute-horizontal.svg
		case 463:
			return generateIcon(SVGIcons.distributeHorizontal, height, width);
		// distribute-vertical.svg
		case 464:
			return generateIcon(SVGIcons.distributeVertical, height, width);
		// door-closed-fill.svg
		case 465:
			return generateIcon(SVGIcons.doorClosedFill, height, width);
		// door-closed.svg
		case 466:
			return generateIcon(SVGIcons.doorClosed, height, width);
		// door-open-fill.svg
		case 467:
			return generateIcon(SVGIcons.doorOpenFill, height, width);
		// door-open.svg
		case 468:
			return generateIcon(SVGIcons.doorOpen, height, width);
		// dot.svg
		case 469:
			return generateIcon(SVGIcons.dot, height, width);
		// download.svg
		case 470:
			return generateIcon(SVGIcons.download, height, width);
		// droplet-fill.svg
		case 471:
			return generateIcon(SVGIcons.dropletFill, height, width);
		// droplet-half.svg
		case 472:
			return generateIcon(SVGIcons.dropletHalf, height, width);
		// droplet.svg
		case 473:
			return generateIcon(SVGIcons.droplet, height, width);
		// earbuds.svg
		case 474:
			return generateIcon(SVGIcons.earbuds, height, width);
		// easel-fill.svg
		case 475:
			return generateIcon(SVGIcons.easelFill, height, width);
		// easel.svg
		case 476:
			return generateIcon(SVGIcons.easel, height, width);
		// egg-fill.svg
		case 477:
			return generateIcon(SVGIcons.eggFill, height, width);
		// egg-fried.svg
		case 478:
			return generateIcon(SVGIcons.eggFried, height, width);
		// egg.svg
		case 479:
			return generateIcon(SVGIcons.egg, height, width);
		// eject-fill.svg
		case 480:
			return generateIcon(SVGIcons.ejectFill, height, width);
		// eject.svg
		case 481:
			return generateIcon(SVGIcons.eject, height, width);
		// emoji-angry-fill.svg
		case 482:
			return generateIcon(SVGIcons.emojiAngryFill, height, width);
		// emoji-angry.svg
		case 483:
			return generateIcon(SVGIcons.emojiAngry, height, width);
		// emoji-dizzy-fill.svg
		case 484:
			return generateIcon(SVGIcons.emojiDizzyFill, height, width);
		// emoji-dizzy.svg
		case 485:
			return generateIcon(SVGIcons.emojiDizzy, height, width);
		// emoji-expressionless-fill.svg
		case 486:
			return generateIcon(SVGIcons.emojiExpressionlessFill, height, width);
		// emoji-expressionless.svg
		case 487:
			return generateIcon(SVGIcons.emojiExpressionless, height, width);
		// emoji-frown-fill.svg
		case 488:
			return generateIcon(SVGIcons.emojiFrownFill, height, width);
		// emoji-frown.svg
		case 489:
			return generateIcon(SVGIcons.emojiFrown, height, width);
		// emoji-heart-eyes-fill.svg
		case 490:
			return generateIcon(SVGIcons.emojiHeartEyesFill, height, width);
		// emoji-heart-eyes.svg
		case 491:
			return generateIcon(SVGIcons.emojiHeartEyes, height, width);
		// emoji-laughing-fill.svg
		case 492:
			return generateIcon(SVGIcons.emojiLaughingFill, height, width);
		// emoji-laughing.svg
		case 493:
			return generateIcon(SVGIcons.emojiLaughing, height, width);
		// emoji-neutral-fill.svg
		case 494:
			return generateIcon(SVGIcons.emojiNeutralFill, height, width);
		// emoji-neutral.svg
		case 495:
			return generateIcon(SVGIcons.emojiNeutral, height, width);
		// emoji-smile-fill.svg
		case 496:
			return generateIcon(SVGIcons.emojiSmileFill, height, width);
		// emoji-smile-upside-down-fill.svg
		case 497:
			return generateIcon(SVGIcons.emojiSmileUpsideDownFill, height, width);
		// emoji-smile-upside-down.svg
		case 498:
			return generateIcon(SVGIcons.emojiSmileUpsideDown, height, width);
		// emoji-smile.svg
		case 499:
			return generateIcon(SVGIcons.emojiSmile, height, width);
		// emoji-sunglasses-fill.svg
		case 500:
			return generateIcon(SVGIcons.emojiSunglassesFill, height, width);
		// emoji-sunglasses.svg
		case 501:
			return generateIcon(SVGIcons.emojiSunglasses, height, width);
		// emoji-wink-fill.svg
		case 502:
			return generateIcon(SVGIcons.emojiWinkFill, height, width);
		// emoji-wink.svg
		case 503:
			return generateIcon(SVGIcons.emojiWink, height, width);
		// envelope-fill.svg
		case 504:
			return generateIcon(SVGIcons.envelopeFill, height, width);
		// envelope-open-fill.svg
		case 505:
			return generateIcon(SVGIcons.envelopeOpenFill, height, width);
		// envelope-open.svg
		case 506:
			return generateIcon(SVGIcons.envelopeOpen, height, width);
		// envelope.svg
		case 507:
			return generateIcon(SVGIcons.envelope, height, width);
		// exclamation-circle-fill.svg
		case 508:
			return generateIcon(SVGIcons.exclamationCircleFill, height, width);
		// exclamation-circle.svg
		case 509:
			return generateIcon(SVGIcons.exclamationCircle, height, width);
		// exclamation-diamond-fill.svg
		case 510:
			return generateIcon(SVGIcons.exclamationDiamondFill, height, width);
		// exclamation-diamond.svg
		case 511:
			return generateIcon(SVGIcons.exclamationDiamond, height, width);
		// exclamation-octagon-fill.svg
		case 512:
			return generateIcon(SVGIcons.exclamationOctagonFill, height, width);
		// exclamation-octagon.svg
		case 513:
			return generateIcon(SVGIcons.exclamationOctagon, height, width);
		// exclamation-square-fill.svg
		case 514:
			return generateIcon(SVGIcons.exclamationSquareFill, height, width);
		// exclamation-square.svg
		case 515:
			return generateIcon(SVGIcons.exclamationSquare, height, width);
		// exclamation-triangle-fill.svg
		case 516:
			return generateIcon(SVGIcons.exclamationTriangleFill, height, width);
		// exclamation-triangle.svg
		case 517:
			return generateIcon(SVGIcons.exclamationTriangle, height, width);
		// exclamation.svg
		case 518:
			return generateIcon(SVGIcons.exclamation, height, width);
		// exclude.svg
		case 519:
			return generateIcon(SVGIcons.exclude, height, width);
		// eye-fill.svg
		case 520:
			return generateIcon(SVGIcons.eyeFill, height, width);
		// eye-slash-fill.svg
		case 521:
			return generateIcon(SVGIcons.eyeSlashFill, height, width);
		// eye-slash.svg
		case 522:
			return generateIcon(SVGIcons.eyeSlash, height, width);
		// eye.svg
		case 523:
			return generateIcon(SVGIcons.eye, height, width);
		// eyeglasses.svg
		case 524:
			return generateIcon(SVGIcons.eyeglasses, height, width);
		// facebook.svg
		case 525:
			return generateIcon(SVGIcons.facebook, height, width);
		// file-arrow-down-fill.svg
		case 526:
			return generateIcon(SVGIcons.fileArrowDownFill, height, width);
		// file-arrow-down.svg
		case 527:
			return generateIcon(SVGIcons.fileArrowDown, height, width);
		// file-arrow-up-fill.svg
		case 528:
			return generateIcon(SVGIcons.fileArrowUpFill, height, width);
		// file-arrow-up.svg
		case 529:
			return generateIcon(SVGIcons.fileArrowUp, height, width);
		// file-bar-graph-fill.svg
		case 530:
			return generateIcon(SVGIcons.fileBarGraphFill, height, width);
		// file-bar-graph.svg
		case 531:
			return generateIcon(SVGIcons.fileBarGraph, height, width);
		// file-binary-fill.svg
		case 532:
			return generateIcon(SVGIcons.fileBinaryFill, height, width);
		// file-binary.svg
		case 533:
			return generateIcon(SVGIcons.fileBinary, height, width);
		// file-break-fill.svg
		case 534:
			return generateIcon(SVGIcons.fileBreakFill, height, width);
		// file-break.svg
		case 535:
			return generateIcon(SVGIcons.fileBreak, height, width);
		// file-check-fill.svg
		case 536:
			return generateIcon(SVGIcons.fileCheckFill, height, width);
		// file-check.svg
		case 537:
			return generateIcon(SVGIcons.fileCheck, height, width);
		// file-code-fill.svg
		case 538:
			return generateIcon(SVGIcons.fileCodeFill, height, width);
		// file-code.svg
		case 539:
			return generateIcon(SVGIcons.fileCode, height, width);
		// file-diff-fill.svg
		case 540:
			return generateIcon(SVGIcons.fileDiffFill, height, width);
		// file-diff.svg
		case 541:
			return generateIcon(SVGIcons.fileDiff, height, width);
		// file-earmark-arrow-down-fill.svg
		case 542:
			return generateIcon(SVGIcons.fileEarmarkArrowDownFill, height, width);
		// file-earmark-arrow-down.svg
		case 543:
			return generateIcon(SVGIcons.fileEarmarkArrowDown, height, width);
		// file-earmark-arrow-up-fill.svg
		case 544:
			return generateIcon(SVGIcons.fileEarmarkArrowUpFill, height, width);
		// file-earmark-arrow-up.svg
		case 545:
			return generateIcon(SVGIcons.fileEarmarkArrowUp, height, width);
		// file-earmark-bar-graph-fill.svg
		case 546:
			return generateIcon(SVGIcons.fileEarmarkBarGraphFill, height, width);
		// file-earmark-bar-graph.svg
		case 547:
			return generateIcon(SVGIcons.fileEarmarkBarGraph, height, width);
		// file-earmark-binary-fill.svg
		case 548:
			return generateIcon(SVGIcons.fileEarmarkBinaryFill, height, width);
		// file-earmark-binary.svg
		case 549:
			return generateIcon(SVGIcons.fileEarmarkBinary, height, width);
		// file-earmark-break-fill.svg
		case 550:
			return generateIcon(SVGIcons.fileEarmarkBreakFill, height, width);
		// file-earmark-break.svg
		case 551:
			return generateIcon(SVGIcons.fileEarmarkBreak, height, width);
		// file-earmark-check-fill.svg
		case 552:
			return generateIcon(SVGIcons.fileEarmarkCheckFill, height, width);
		// file-earmark-check.svg
		case 553:
			return generateIcon(SVGIcons.fileEarmarkCheck, height, width);
		// file-earmark-code-fill.svg
		case 554:
			return generateIcon(SVGIcons.fileEarmarkCodeFill, height, width);
		// file-earmark-code.svg
		case 555:
			return generateIcon(SVGIcons.fileEarmarkCode, height, width);
		// file-earmark-diff-fill.svg
		case 556:
			return generateIcon(SVGIcons.fileEarmarkDiffFill, height, width);
		// file-earmark-diff.svg
		case 557:
			return generateIcon(SVGIcons.fileEarmarkDiff, height, width);
		// file-earmark-easel-fill.svg
		case 558:
			return generateIcon(SVGIcons.fileEarmarkEaselFill, height, width);
		// file-earmark-easel.svg
		case 559:
			return generateIcon(SVGIcons.fileEarmarkEasel, height, width);
		// file-earmark-excel-fill.svg
		case 560:
			return generateIcon(SVGIcons.fileEarmarkExcelFill, height, width);
		// file-earmark-excel.svg
		case 561:
			return generateIcon(SVGIcons.fileEarmarkExcel, height, width);
		// file-earmark-fill.svg
		case 562:
			return generateIcon(SVGIcons.fileEarmarkFill, height, width);
		// file-earmark-font-fill.svg
		case 563:
			return generateIcon(SVGIcons.fileEarmarkFontFill, height, width);
		// file-earmark-font.svg
		case 564:
			return generateIcon(SVGIcons.fileEarmarkFont, height, width);
		// file-earmark-image-fill.svg
		case 565:
			return generateIcon(SVGIcons.fileEarmarkImageFill, height, width);
		// file-earmark-image.svg
		case 566:
			return generateIcon(SVGIcons.fileEarmarkImage, height, width);
		// file-earmark-lock-fill.svg
		case 567:
			return generateIcon(SVGIcons.fileEarmarkLockFill, height, width);
		// file-earmark-lock.svg
		case 568:
			return generateIcon(SVGIcons.fileEarmarkLock, height, width);
		// file-earmark-lock2-fill.svg
		case 569:
			return generateIcon(SVGIcons.fileEarmarkLock2Fill, height, width);
		// file-earmark-lock2.svg
		case 570:
			return generateIcon(SVGIcons.fileEarmarkLock2, height, width);
		// file-earmark-medical-fill.svg
		case 571:
			return generateIcon(SVGIcons.fileEarmarkMedicalFill, height, width);
		// file-earmark-medical.svg
		case 572:
			return generateIcon(SVGIcons.fileEarmarkMedical, height, width);
		// file-earmark-minus-fill.svg
		case 573:
			return generateIcon(SVGIcons.fileEarmarkMinusFill, height, width);
		// file-earmark-minus.svg
		case 574:
			return generateIcon(SVGIcons.fileEarmarkMinus, height, width);
		// file-earmark-music-fill.svg
		case 575:
			return generateIcon(SVGIcons.fileEarmarkMusicFill, height, width);
		// file-earmark-music.svg
		case 576:
			return generateIcon(SVGIcons.fileEarmarkMusic, height, width);
		// file-earmark-person-fill.svg
		case 577:
			return generateIcon(SVGIcons.fileEarmarkPersonFill, height, width);
		// file-earmark-person.svg
		case 578:
			return generateIcon(SVGIcons.fileEarmarkPerson, height, width);
		// file-earmark-play-fill.svg
		case 579:
			return generateIcon(SVGIcons.fileEarmarkPlayFill, height, width);
		// file-earmark-play.svg
		case 580:
			return generateIcon(SVGIcons.fileEarmarkPlay, height, width);
		// file-earmark-plus-fill.svg
		case 581:
			return generateIcon(SVGIcons.fileEarmarkPlusFill, height, width);
		// file-earmark-plus.svg
		case 582:
			return generateIcon(SVGIcons.fileEarmarkPlus, height, width);
		// file-earmark-post-fill.svg
		case 583:
			return generateIcon(SVGIcons.fileEarmarkPostFill, height, width);
		// file-earmark-post.svg
		case 584:
			return generateIcon(SVGIcons.fileEarmarkPost, height, width);
		// file-earmark-ppt-fill.svg
		case 585:
			return generateIcon(SVGIcons.fileEarmarkPptFill, height, width);
		// file-earmark-ppt.svg
		case 586:
			return generateIcon(SVGIcons.fileEarmarkPpt, height, width);
		// file-earmark-richtext-fill.svg
		case 587:
			return generateIcon(SVGIcons.fileEarmarkRichtextFill, height, width);
		// file-earmark-richtext.svg
		case 588:
			return generateIcon(SVGIcons.fileEarmarkRichtext, height, width);
		// file-earmark-ruled-fill.svg
		case 589:
			return generateIcon(SVGIcons.fileEarmarkRuledFill, height, width);
		// file-earmark-ruled.svg
		case 590:
			return generateIcon(SVGIcons.fileEarmarkRuled, height, width);
		// file-earmark-slides-fill.svg
		case 591:
			return generateIcon(SVGIcons.fileEarmarkSlidesFill, height, width);
		// file-earmark-slides.svg
		case 592:
			return generateIcon(SVGIcons.fileEarmarkSlides, height, width);
		// file-earmark-spreadsheet-fill.svg
		case 593:
			return generateIcon(SVGIcons.fileEarmarkSpreadsheetFill, height, width);
		// file-earmark-spreadsheet.svg
		case 594:
			return generateIcon(SVGIcons.fileEarmarkSpreadsheet, height, width);
		// file-earmark-text-fill.svg
		case 595:
			return generateIcon(SVGIcons.fileEarmarkTextFill, height, width);
		// file-earmark-text.svg
		case 596:
			return generateIcon(SVGIcons.fileEarmarkText, height, width);
		// file-earmark-word-fill.svg
		case 597:
			return generateIcon(SVGIcons.fileEarmarkWordFill, height, width);
		// file-earmark-word.svg
		case 598:
			return generateIcon(SVGIcons.fileEarmarkWord, height, width);
		// file-earmark-x-fill.svg
		case 599:
			return generateIcon(SVGIcons.fileEarmarkXFill, height, width);
		// file-earmark-x.svg
		case 600:
			return generateIcon(SVGIcons.fileEarmarkX, height, width);
		// file-earmark-zip-fill.svg
		case 601:
			return generateIcon(SVGIcons.fileEarmarkZipFill, height, width);
		// file-earmark-zip.svg
		case 602:
			return generateIcon(SVGIcons.fileEarmarkZip, height, width);
		// file-earmark.svg
		case 603:
			return generateIcon(SVGIcons.fileEarmark, height, width);
		// file-easel-fill.svg
		case 604:
			return generateIcon(SVGIcons.fileEaselFill, height, width);
		// file-easel.svg
		case 605:
			return generateIcon(SVGIcons.fileEasel, height, width);
		// file-excel-fill.svg
		case 606:
			return generateIcon(SVGIcons.fileExcelFill, height, width);
		// file-excel.svg
		case 607:
			return generateIcon(SVGIcons.fileExcel, height, width);
		// file-fill.svg
		case 608:
			return generateIcon(SVGIcons.fileFill, height, width);
		// file-font-fill.svg
		case 609:
			return generateIcon(SVGIcons.fileFontFill, height, width);
		// file-font.svg
		case 610:
			return generateIcon(SVGIcons.fileFont, height, width);
		// file-image-fill.svg
		case 611:
			return generateIcon(SVGIcons.fileImageFill, height, width);
		// file-image.svg
		case 612:
			return generateIcon(SVGIcons.fileImage, height, width);
		// file-lock-fill.svg
		case 613:
			return generateIcon(SVGIcons.fileLockFill, height, width);
		// file-lock.svg
		case 614:
			return generateIcon(SVGIcons.fileLock, height, width);
		// file-lock2-fill.svg
		case 615:
			return generateIcon(SVGIcons.fileLock2Fill, height, width);
		// file-lock2.svg
		case 616:
			return generateIcon(SVGIcons.fileLock2, height, width);
		// file-medical-fill.svg
		case 617:
			return generateIcon(SVGIcons.fileMedicalFill, height, width);
		// file-medical.svg
		case 618:
			return generateIcon(SVGIcons.fileMedical, height, width);
		// file-minus-fill.svg
		case 619:
			return generateIcon(SVGIcons.fileMinusFill, height, width);
		// file-minus.svg
		case 620:
			return generateIcon(SVGIcons.fileMinus, height, width);
		// file-music-fill.svg
		case 621:
			return generateIcon(SVGIcons.fileMusicFill, height, width);
		// file-music.svg
		case 622:
			return generateIcon(SVGIcons.fileMusic, height, width);
		// file-person-fill.svg
		case 623:
			return generateIcon(SVGIcons.filePersonFill, height, width);
		// file-person.svg
		case 624:
			return generateIcon(SVGIcons.filePerson, height, width);
		// file-play-fill.svg
		case 625:
			return generateIcon(SVGIcons.filePlayFill, height, width);
		// file-play.svg
		case 626:
			return generateIcon(SVGIcons.filePlay, height, width);
		// file-plus-fill.svg
		case 627:
			return generateIcon(SVGIcons.filePlusFill, height, width);
		// file-plus.svg
		case 628:
			return generateIcon(SVGIcons.filePlus, height, width);
		// file-post-fill.svg
		case 629:
			return generateIcon(SVGIcons.filePostFill, height, width);
		// file-post.svg
		case 630:
			return generateIcon(SVGIcons.filePost, height, width);
		// file-ppt-fill.svg
		case 631:
			return generateIcon(SVGIcons.filePptFill, height, width);
		// file-ppt.svg
		case 632:
			return generateIcon(SVGIcons.filePpt, height, width);
		// file-richtext-fill.svg
		case 633:
			return generateIcon(SVGIcons.fileRichtextFill, height, width);
		// file-richtext.svg
		case 634:
			return generateIcon(SVGIcons.fileRichtext, height, width);
		// file-ruled-fill.svg
		case 635:
			return generateIcon(SVGIcons.fileRuledFill, height, width);
		// file-ruled.svg
		case 636:
			return generateIcon(SVGIcons.fileRuled, height, width);
		// file-slides-fill.svg
		case 637:
			return generateIcon(SVGIcons.fileSlidesFill, height, width);
		// file-slides.svg
		case 638:
			return generateIcon(SVGIcons.fileSlides, height, width);
		// file-spreadsheet-fill.svg
		case 639:
			return generateIcon(SVGIcons.fileSpreadsheetFill, height, width);
		// file-spreadsheet.svg
		case 640:
			return generateIcon(SVGIcons.fileSpreadsheet, height, width);
		// file-text-fill.svg
		case 641:
			return generateIcon(SVGIcons.fileTextFill, height, width);
		// file-text.svg
		case 642:
			return generateIcon(SVGIcons.fileText, height, width);
		// file-word-fill.svg
		case 643:
			return generateIcon(SVGIcons.fileWordFill, height, width);
		// file-word.svg
		case 644:
			return generateIcon(SVGIcons.fileWord, height, width);
		// file-x-fill.svg
		case 645:
			return generateIcon(SVGIcons.fileXFill, height, width);
		// file-x.svg
		case 646:
			return generateIcon(SVGIcons.fileX, height, width);
		// file-zip-fill.svg
		case 647:
			return generateIcon(SVGIcons.fileZipFill, height, width);
		// file-zip.svg
		case 648:
			return generateIcon(SVGIcons.fileZip, height, width);
		// file.svg
		case 649:
			return generateIcon(SVGIcons.file, height, width);
		// files-alt.svg
		case 650:
			return generateIcon(SVGIcons.filesAlt, height, width);
		// files.svg
		case 651:
			return generateIcon(SVGIcons.files, height, width);
		// film.svg
		case 652:
			return generateIcon(SVGIcons.film, height, width);
		// filter-circle-fill.svg
		case 653:
			return generateIcon(SVGIcons.filterCircleFill, height, width);
		// filter-circle.svg
		case 654:
			return generateIcon(SVGIcons.filterCircle, height, width);
		// filter-left.svg
		case 655:
			return generateIcon(SVGIcons.filterLeft, height, width);
		// filter-right.svg
		case 656:
			return generateIcon(SVGIcons.filterRight, height, width);
		// filter-square-fill.svg
		case 657:
			return generateIcon(SVGIcons.filterSquareFill, height, width);
		// filter-square.svg
		case 658:
			return generateIcon(SVGIcons.filterSquare, height, width);
		// filter.svg
		case 659:
			return generateIcon(SVGIcons.filter, height, width);
		// flag-fill.svg
		case 660:
			return generateIcon(SVGIcons.flagFill, height, width);
		// flag.svg
		case 661:
			return generateIcon(SVGIcons.flag, height, width);
		// flower1.svg
		case 662:
			return generateIcon(SVGIcons.flower1, height, width);
		// flower2.svg
		case 663:
			return generateIcon(SVGIcons.flower2, height, width);
		// flower3.svg
		case 664:
			return generateIcon(SVGIcons.flower3, height, width);
		// folder-check.svg
		case 665:
			return generateIcon(SVGIcons.folderCheck, height, width);
		// folder-fill.svg
		case 666:
			return generateIcon(SVGIcons.folderFill, height, width);
		// folder-minus.svg
		case 667:
			return generateIcon(SVGIcons.folderMinus, height, width);
		// folder-plus.svg
		case 668:
			return generateIcon(SVGIcons.folderPlus, height, width);
		// folder-symlink-fill.svg
		case 669:
			return generateIcon(SVGIcons.folderSymlinkFill, height, width);
		// folder-symlink.svg
		case 670:
			return generateIcon(SVGIcons.folderSymlink, height, width);
		// folder-x.svg
		case 671:
			return generateIcon(SVGIcons.folderX, height, width);
		// folder.svg
		case 672:
			return generateIcon(SVGIcons.folder, height, width);
		// folder2-open.svg
		case 673:
			return generateIcon(SVGIcons.folder2Open, height, width);
		// folder2.svg
		case 674:
			return generateIcon(SVGIcons.folder2, height, width);
		// fonts.svg
		case 675:
			return generateIcon(SVGIcons.fonts, height, width);
		// forward-fill.svg
		case 676:
			return generateIcon(SVGIcons.forwardFill, height, width);
		// forward.svg
		case 677:
			return generateIcon(SVGIcons.forward, height, width);
		// front.svg
		case 678:
			return generateIcon(SVGIcons.front, height, width);
		// fullscreen-exit.svg
		case 679:
			return generateIcon(SVGIcons.fullscreenExit, height, width);
		// fullscreen.svg
		case 680:
			return generateIcon(SVGIcons.fullscreen, height, width);
		// funnel-fill.svg
		case 681:
			return generateIcon(SVGIcons.funnelFill, height, width);
		// funnel.svg
		case 682:
			return generateIcon(SVGIcons.funnel, height, width);
		// gear-fill.svg
		case 683:
			return generateIcon(SVGIcons.gearFill, height, width);
		// gear-wide-connected.svg
		case 684:
			return generateIcon(SVGIcons.gearWideConnected, height, width);
		// gear-wide.svg
		case 685:
			return generateIcon(SVGIcons.gearWide, height, width);
		// gear.svg
		case 686:
			return generateIcon(SVGIcons.gear, height, width);
		// gem.svg
		case 687:
			return generateIcon(SVGIcons.gem, height, width);
		// geo-alt-fill.svg
		case 688:
			return generateIcon(SVGIcons.geoAltFill, height, width);
		// geo-alt.svg
		case 689:
			return generateIcon(SVGIcons.geoAlt, height, width);
		// geo-fill.svg
		case 690:
			return generateIcon(SVGIcons.geoFill, height, width);
		// geo.svg
		case 691:
			return generateIcon(SVGIcons.geo, height, width);
		// gift-fill.svg
		case 692:
			return generateIcon(SVGIcons.giftFill, height, width);
		// gift.svg
		case 693:
			return generateIcon(SVGIcons.gift, height, width);
		// github.svg
		case 694:
			return generateIcon(SVGIcons.github, height, width);
		// globe.svg
		case 695:
			return generateIcon(SVGIcons.globe, height, width);
		// globe2.svg
		case 696:
			return generateIcon(SVGIcons.globe2, height, width);
		// google.svg
		case 697:
			return generateIcon(SVGIcons.google, height, width);
		// graph-down.svg
		case 698:
			return generateIcon(SVGIcons.graphDown, height, width);
		// graph-up.svg
		case 699:
			return generateIcon(SVGIcons.graphUp, height, width);
		// grid-1x2-fill.svg
		case 700:
			return generateIcon(SVGIcons.grid1x2Fill, height, width);
		// grid-1x2.svg
		case 701:
			return generateIcon(SVGIcons.grid1x2, height, width);
		// grid-3x2-gap-fill.svg
		case 702:
			return generateIcon(SVGIcons.grid3x2GapFill, height, width);
		// grid-3x2-gap.svg
		case 703:
			return generateIcon(SVGIcons.grid3x2Gap, height, width);
		// grid-3x2.svg
		case 704:
			return generateIcon(SVGIcons.grid3x2, height, width);
		// grid-3x3-gap-fill.svg
		case 705:
			return generateIcon(SVGIcons.grid3x3GapFill, height, width);
		// grid-3x3-gap.svg
		case 706:
			return generateIcon(SVGIcons.grid3x3Gap, height, width);
		// grid-3x3.svg
		case 707:
			return generateIcon(SVGIcons.grid3x3, height, width);
		// grid-fill.svg
		case 708:
			return generateIcon(SVGIcons.gridFill, height, width);
		// grid.svg
		case 709:
			return generateIcon(SVGIcons.grid, height, width);
		// grip-horizontal.svg
		case 710:
			return generateIcon(SVGIcons.gripHorizontal, height, width);
		// grip-vertical.svg
		case 711:
			return generateIcon(SVGIcons.gripVertical, height, width);
		// hammer.svg
		case 712:
			return generateIcon(SVGIcons.hammer, height, width);
		// hand-index-thumb.svg
		case 713:
			return generateIcon(SVGIcons.handIndexThumb, height, width);
		// hand-index.svg
		case 714:
			return generateIcon(SVGIcons.handIndex, height, width);
		// hand-thumbs-down.svg
		case 715:
			return generateIcon(SVGIcons.handThumbsDown, height, width);
		// hand-thumbs-up.svg
		case 716:
			return generateIcon(SVGIcons.handThumbsUp, height, width);
		// handbag-fill.svg
		case 717:
			return generateIcon(SVGIcons.handbagFill, height, width);
		// handbag.svg
		case 718:
			return generateIcon(SVGIcons.handbag, height, width);
		// hash.svg
		case 719:
			return generateIcon(SVGIcons.hash, height, width);
		// hdd-fill.svg
		case 720:
			return generateIcon(SVGIcons.hddFill, height, width);
		// hdd-network-fill.svg
		case 721:
			return generateIcon(SVGIcons.hddNetworkFill, height, width);
		// hdd-network.svg
		case 722:
			return generateIcon(SVGIcons.hddNetwork, height, width);
		// hdd-rack-fill.svg
		case 723:
			return generateIcon(SVGIcons.hddRackFill, height, width);
		// hdd-rack.svg
		case 724:
			return generateIcon(SVGIcons.hddRack, height, width);
		// hdd-stack-fill.svg
		case 725:
			return generateIcon(SVGIcons.hddStackFill, height, width);
		// hdd-stack.svg
		case 726:
			return generateIcon(SVGIcons.hddStack, height, width);
		// hdd.svg
		case 727:
			return generateIcon(SVGIcons.hdd, height, width);
		// headphones.svg
		case 728:
			return generateIcon(SVGIcons.headphones, height, width);
		// headset.svg
		case 729:
			return generateIcon(SVGIcons.headset, height, width);
		// heart-fill.svg
		case 730:
			return generateIcon(SVGIcons.heartFill, height, width);
		// heart-half.svg
		case 731:
			return generateIcon(SVGIcons.heartHalf, height, width);
		// heart.svg
		case 732:
			return generateIcon(SVGIcons.heart, height, width);
		// heptagon-fill.svg
		case 733:
			return generateIcon(SVGIcons.heptagonFill, height, width);
		// heptagon-half.svg
		case 734:
			return generateIcon(SVGIcons.heptagonHalf, height, width);
		// heptagon.svg
		case 735:
			return generateIcon(SVGIcons.heptagon, height, width);
		// hexagon-fill.svg
		case 736:
			return generateIcon(SVGIcons.hexagonFill, height, width);
		// hexagon-half.svg
		case 737:
			return generateIcon(SVGIcons.hexagonHalf, height, width);
		// hexagon.svg
		case 738:
			return generateIcon(SVGIcons.hexagon, height, width);
		// hourglass-bottom.svg
		case 739:
			return generateIcon(SVGIcons.hourglassBottom, height, width);
		// hourglass-split.svg
		case 740:
			return generateIcon(SVGIcons.hourglassSplit, height, width);
		// hourglass-top.svg
		case 741:
			return generateIcon(SVGIcons.hourglassTop, height, width);
		// hourglass.svg
		case 742:
			return generateIcon(SVGIcons.hourglass, height, width);
		// house-door-fill.svg
		case 743:
			return generateIcon(SVGIcons.houseDoorFill, height, width);
		// house-door.svg
		case 744:
			return generateIcon(SVGIcons.houseDoor, height, width);
		// house-fill.svg
		case 745:
			return generateIcon(SVGIcons.houseFill, height, width);
		// house.svg
		case 746:
			return generateIcon(SVGIcons.house, height, width);
		// hr.svg
		case 747:
			return generateIcon(SVGIcons.hr, height, width);
		// image-alt.svg
		case 748:
			return generateIcon(SVGIcons.imageAlt, height, width);
		// image-fill.svg
		case 749:
			return generateIcon(SVGIcons.imageFill, height, width);
		// image.svg
		case 750:
			return generateIcon(SVGIcons.image, height, width);
		// images.svg
		case 751:
			return generateIcon(SVGIcons.images, height, width);
		// inbox-fill.svg
		case 752:
			return generateIcon(SVGIcons.inboxFill, height, width);
		// inbox.svg
		case 753:
			return generateIcon(SVGIcons.inbox, height, width);
		// inboxes-fill.svg
		case 754:
			return generateIcon(SVGIcons.inboxesFill, height, width);
		// inboxes.svg
		case 755:
			return generateIcon(SVGIcons.inboxes, height, width);
		// info-circle-fill.svg
		case 756:
			return generateIcon(SVGIcons.infoCircleFill, height, width);
		// info-circle.svg
		case 757:
			return generateIcon(SVGIcons.infoCircle, height, width);
		// info-square-fill.svg
		case 758:
			return generateIcon(SVGIcons.infoSquareFill, height, width);
		// info-square.svg
		case 759:
			return generateIcon(SVGIcons.infoSquare, height, width);
		// info.svg
		case 760:
			return generateIcon(SVGIcons.info, height, width);
		// input-cursor-text.svg
		case 761:
			return generateIcon(SVGIcons.inputCursorText, height, width);
		// input-cursor.svg
		case 762:
			return generateIcon(SVGIcons.inputCursor, height, width);
		// instagram.svg
		case 763:
			return generateIcon(SVGIcons.instagram, height, width);
		// intersect.svg
		case 764:
			return generateIcon(SVGIcons.intersect, height, width);
		// journal-album.svg
		case 765:
			return generateIcon(SVGIcons.journalAlbum, height, width);
		// journal-arrow-down.svg
		case 766:
			return generateIcon(SVGIcons.journalArrowDown, height, width);
		// journal-arrow-up.svg
		case 767:
			return generateIcon(SVGIcons.journalArrowUp, height, width);
		// journal-bookmark-fill.svg
		case 768:
			return generateIcon(SVGIcons.journalBookmarkFill, height, width);
		// journal-bookmark.svg
		case 769:
			return generateIcon(SVGIcons.journalBookmark, height, width);
		// journal-check.svg
		case 770:
			return generateIcon(SVGIcons.journalCheck, height, width);
		// journal-code.svg
		case 771:
			return generateIcon(SVGIcons.journalCode, height, width);
		// journal-medical.svg
		case 772:
			return generateIcon(SVGIcons.journalMedical, height, width);
		// journal-minus.svg
		case 773:
			return generateIcon(SVGIcons.journalMinus, height, width);
		// journal-plus.svg
		case 774:
			return generateIcon(SVGIcons.journalPlus, height, width);
		// journal-richtext.svg
		case 775:
			return generateIcon(SVGIcons.journalRichtext, height, width);
		// journal-text.svg
		case 776:
			return generateIcon(SVGIcons.journalText, height, width);
		// journal-x.svg
		case 777:
			return generateIcon(SVGIcons.journalX, height, width);
		// journal.svg
		case 778:
			return generateIcon(SVGIcons.journal, height, width);
		// journals.svg
		case 779:
			return generateIcon(SVGIcons.journals, height, width);
		// joystick.svg
		case 780:
			return generateIcon(SVGIcons.joystick, height, width);
		// justify-left.svg
		case 781:
			return generateIcon(SVGIcons.justifyLeft, height, width);
		// justify-right.svg
		case 782:
			return generateIcon(SVGIcons.justifyRight, height, width);
		// justify.svg
		case 783:
			return generateIcon(SVGIcons.justify, height, width);
		// kanban-fill.svg
		case 784:
			return generateIcon(SVGIcons.kanbanFill, height, width);
		// kanban.svg
		case 785:
			return generateIcon(SVGIcons.kanban, height, width);
		// key-fill.svg
		case 786:
			return generateIcon(SVGIcons.keyFill, height, width);
		// key.svg
		case 787:
			return generateIcon(SVGIcons.key, height, width);
		// keyboard-fill.svg
		case 788:
			return generateIcon(SVGIcons.keyboardFill, height, width);
		// keyboard.svg
		case 789:
			return generateIcon(SVGIcons.keyboard, height, width);
		// ladder.svg
		case 790:
			return generateIcon(SVGIcons.ladder, height, width);
		// lamp-fill.svg
		case 791:
			return generateIcon(SVGIcons.lampFill, height, width);
		// lamp.svg
		case 792:
			return generateIcon(SVGIcons.lamp, height, width);
		// laptop-fill.svg
		case 793:
			return generateIcon(SVGIcons.laptopFill, height, width);
		// laptop.svg
		case 794:
			return generateIcon(SVGIcons.laptop, height, width);
		// layers-fill.svg
		case 795:
			return generateIcon(SVGIcons.layersFill, height, width);
		// layers-half.svg
		case 796:
			return generateIcon(SVGIcons.layersHalf, height, width);
		// layers.svg
		case 797:
			return generateIcon(SVGIcons.layers, height, width);
		// layout-sidebar-inset-reverse.svg
		case 798:
			return generateIcon(SVGIcons.layoutSidebarInsetReverse, height, width);
		// layout-sidebar-inset.svg
		case 799:
			return generateIcon(SVGIcons.layoutSidebarInset, height, width);
		// layout-sidebar-reverse.svg
		case 800:
			return generateIcon(SVGIcons.layoutSidebarReverse, height, width);
		// layout-sidebar.svg
		case 801:
			return generateIcon(SVGIcons.layoutSidebar, height, width);
		// layout-split.svg
		case 802:
			return generateIcon(SVGIcons.layoutSplit, height, width);
		// layout-text-sidebar-reverse.svg
		case 803:
			return generateIcon(SVGIcons.layoutTextSidebarReverse, height, width);
		// layout-text-sidebar.svg
		case 804:
			return generateIcon(SVGIcons.layoutTextSidebar, height, width);
		// layout-text-window-reverse.svg
		case 805:
			return generateIcon(SVGIcons.layoutTextWindowReverse, height, width);
		// layout-text-window.svg
		case 806:
			return generateIcon(SVGIcons.layoutTextWindow, height, width);
		// layout-three-columns.svg
		case 807:
			return generateIcon(SVGIcons.layoutThreeColumns, height, width);
		// layout-wtf.svg
		case 808:
			return generateIcon(SVGIcons.layoutWtf, height, width);
		// life-preserver.svg
		case 809:
			return generateIcon(SVGIcons.lifePreserver, height, width);
		// lightning-fill.svg
		case 810:
			return generateIcon(SVGIcons.lightningFill, height, width);
		// lightning.svg
		case 811:
			return generateIcon(SVGIcons.lightning, height, width);
		// link-45deg.svg
		case 812:
			return generateIcon(SVGIcons.link45deg, height, width);
		// link.svg
		case 813:
			return generateIcon(SVGIcons.link, height, width);
		// linkedin.svg
		case 814:
			return generateIcon(SVGIcons.linkedin, height, width);
		// list-check.svg
		case 815:
			return generateIcon(SVGIcons.listCheck, height, width);
		// list-nested.svg
		case 816:
			return generateIcon(SVGIcons.listNested, height, width);
		// list-ol.svg
		case 817:
			return generateIcon(SVGIcons.listOl, height, width);
		// list-stars.svg
		case 818:
			return generateIcon(SVGIcons.listStars, height, width);
		// list-task.svg
		case 819:
			return generateIcon(SVGIcons.listTask, height, width);
		// list-ul.svg
		case 820:
			return generateIcon(SVGIcons.listUl, height, width);
		// list.svg
		case 821:
			return generateIcon(SVGIcons.list, height, width);
		// lock-fill.svg
		case 822:
			return generateIcon(SVGIcons.lockFill, height, width);
		// lock.svg
		case 823:
			return generateIcon(SVGIcons.lock, height, width);
		// mailbox.svg
		case 824:
			return generateIcon(SVGIcons.mailbox, height, width);
		// mailbox2.svg
		case 825:
			return generateIcon(SVGIcons.mailbox2, height, width);
		// map-fill.svg
		case 826:
			return generateIcon(SVGIcons.mapFill, height, width);
		// map.svg
		case 827:
			return generateIcon(SVGIcons.map, height, width);
		// markdown-fill.svg
		case 828:
			return generateIcon(SVGIcons.markdownFill, height, width);
		// markdown.svg
		case 829:
			return generateIcon(SVGIcons.markdown, height, width);
		// menu-app-fill.svg
		case 830:
			return generateIcon(SVGIcons.menuAppFill, height, width);
		// menu-app.svg
		case 831:
			return generateIcon(SVGIcons.menuApp, height, width);
		// menu-button-fill.svg
		case 832:
			return generateIcon(SVGIcons.menuButtonFill, height, width);
		// menu-button-wide-fill.svg
		case 833:
			return generateIcon(SVGIcons.menuButtonWideFill, height, width);
		// menu-button-wide.svg
		case 834:
			return generateIcon(SVGIcons.menuButtonWide, height, width);
		// menu-button.svg
		case 835:
			return generateIcon(SVGIcons.menuButton, height, width);
		// menu-down.svg
		case 836:
			return generateIcon(SVGIcons.menuDown, height, width);
		// menu-up.svg
		case 837:
			return generateIcon(SVGIcons.menuUp, height, width);
		// mic-fill.svg
		case 838:
			return generateIcon(SVGIcons.micFill, height, width);
		// mic-mute-fill.svg
		case 839:
			return generateIcon(SVGIcons.micMuteFill, height, width);
		// mic-mute.svg
		case 840:
			return generateIcon(SVGIcons.micMute, height, width);
		// mic.svg
		case 841:
			return generateIcon(SVGIcons.mic, height, width);
		// minecart-loaded.svg
		case 842:
			return generateIcon(SVGIcons.minecartLoaded, height, width);
		// minecart.svg
		case 843:
			return generateIcon(SVGIcons.minecart, height, width);
		// moon.svg
		case 844:
			return generateIcon(SVGIcons.moon, height, width);
		// mouse.svg
		case 845:
			return generateIcon(SVGIcons.mouse, height, width);
		// mouse2.svg
		case 846:
			return generateIcon(SVGIcons.mouse2, height, width);
		// mouse3.svg
		case 847:
			return generateIcon(SVGIcons.mouse3, height, width);
		// music-note-beamed.svg
		case 848:
			return generateIcon(SVGIcons.musicNoteBeamed, height, width);
		// music-note-list.svg
		case 849:
			return generateIcon(SVGIcons.musicNoteList, height, width);
		// music-note.svg
		case 850:
			return generateIcon(SVGIcons.musicNote, height, width);
		// music-player-fill.svg
		case 851:
			return generateIcon(SVGIcons.musicPlayerFill, height, width);
		// music-player.svg
		case 852:
			return generateIcon(SVGIcons.musicPlayer, height, width);
		// newspaper.svg
		case 853:
			return generateIcon(SVGIcons.newspaper, height, width);
		// node-minus-fill.svg
		case 854:
			return generateIcon(SVGIcons.nodeMinusFill, height, width);
		// node-minus.svg
		case 855:
			return generateIcon(SVGIcons.nodeMinus, height, width);
		// node-plus-fill.svg
		case 856:
			return generateIcon(SVGIcons.nodePlusFill, height, width);
		// node-plus.svg
		case 857:
			return generateIcon(SVGIcons.nodePlus, height, width);
		// nut-fill.svg
		case 858:
			return generateIcon(SVGIcons.nutFill, height, width);
		// nut.svg
		case 859:
			return generateIcon(SVGIcons.nut, height, width);
		// octagon-fill.svg
		case 860:
			return generateIcon(SVGIcons.octagonFill, height, width);
		// octagon-half.svg
		case 861:
			return generateIcon(SVGIcons.octagonHalf, height, width);
		// octagon.svg
		case 862:
			return generateIcon(SVGIcons.octagon, height, width);
		// option.svg
		case 863:
			return generateIcon(SVGIcons.option, height, width);
		// outlet.svg
		case 864:
			return generateIcon(SVGIcons.outlet, height, width);
		// paperclip.svg
		case 865:
			return generateIcon(SVGIcons.paperclip, height, width);
		// paragraph.svg
		case 866:
			return generateIcon(SVGIcons.paragraph, height, width);
		// patch-check-fll.svg
		case 867:
			return generateIcon(SVGIcons.patchCheckFll, height, width);
		// patch-check.svg
		case 868:
			return generateIcon(SVGIcons.patchCheck, height, width);
		// patch-exclamation-fll.svg
		case 869:
			return generateIcon(SVGIcons.patchExclamationFll, height, width);
		// patch-exclamation.svg
		case 870:
			return generateIcon(SVGIcons.patchExclamation, height, width);
		// patch-minus-fll.svg
		case 871:
			return generateIcon(SVGIcons.patchMinusFll, height, width);
		// patch-minus.svg
		case 872:
			return generateIcon(SVGIcons.patchMinus, height, width);
		// patch-plus-fll.svg
		case 873:
			return generateIcon(SVGIcons.patchPlusFll, height, width);
		// patch-plus.svg
		case 874:
			return generateIcon(SVGIcons.patchPlus, height, width);
		// patch-question-fll.svg
		case 875:
			return generateIcon(SVGIcons.patchQuestionFll, height, width);
		// patch-question.svg
		case 876:
			return generateIcon(SVGIcons.patchQuestion, height, width);
		// pause-btn-fill.svg
		case 877:
			return generateIcon(SVGIcons.pauseBtnFill, height, width);
		// pause-btn.svg
		case 878:
			return generateIcon(SVGIcons.pauseBtn, height, width);
		// pause-circle-fill.svg
		case 879:
			return generateIcon(SVGIcons.pauseCircleFill, height, width);
		// pause-circle.svg
		case 880:
			return generateIcon(SVGIcons.pauseCircle, height, width);
		// pause-fill.svg
		case 881:
			return generateIcon(SVGIcons.pauseFill, height, width);
		// pause.svg
		case 882:
			return generateIcon(SVGIcons.pause, height, width);
		// peace-fill.svg
		case 883:
			return generateIcon(SVGIcons.peaceFill, height, width);
		// peace.svg
		case 884:
			return generateIcon(SVGIcons.peace, height, width);
		// pen-fill.svg
		case 885:
			return generateIcon(SVGIcons.penFill, height, width);
		// pen.svg
		case 886:
			return generateIcon(SVGIcons.pen, height, width);
		// pencil-fill.svg
		case 887:
			return generateIcon(SVGIcons.pencilFill, height, width);
		// pencil-square.svg
		case 888:
			return generateIcon(SVGIcons.pencilSquare, height, width);
		// pencil.svg
		case 889:
			return generateIcon(SVGIcons.pencil, height, width);
		// pentagon-fill.svg
		case 890:
			return generateIcon(SVGIcons.pentagonFill, height, width);
		// pentagon-half.svg
		case 891:
			return generateIcon(SVGIcons.pentagonHalf, height, width);
		// pentagon.svg
		case 892:
			return generateIcon(SVGIcons.pentagon, height, width);
		// people-fill.svg
		case 893:
			return generateIcon(SVGIcons.peopleFill, height, width);
		// people.svg
		case 894:
			return generateIcon(SVGIcons.people, height, width);
		// percent.svg
		case 895:
			return generateIcon(SVGIcons.percent, height, width);
		// person-badge-fill.svg
		case 896:
			return generateIcon(SVGIcons.personBadgeFill, height, width);
		// person-badge.svg
		case 897:
			return generateIcon(SVGIcons.personBadge, height, width);
		// person-bounding-box.svg
		case 898:
			return generateIcon(SVGIcons.personBoundingBox, height, width);
		// person-check-fill.svg
		case 899:
			return generateIcon(SVGIcons.personCheckFill, height, width);
		// person-check.svg
		case 900:
			return generateIcon(SVGIcons.personCheck, height, width);
		// person-circle.svg
		case 901:
			return generateIcon(SVGIcons.personCircle, height, width);
		// person-dash-fill.svg
		case 902:
			return generateIcon(SVGIcons.personDashFill, height, width);
		// person-dash.svg
		case 903:
			return generateIcon(SVGIcons.personDash, height, width);
		// person-fill.svg
		case 904:
			return generateIcon(SVGIcons.personFill, height, width);
		// person-lines-fill.svg
		case 905:
			return generateIcon(SVGIcons.personLinesFill, height, width);
		// person-plus-fill.svg
		case 906:
			return generateIcon(SVGIcons.personPlusFill, height, width);
		// person-plus.svg
		case 907:
			return generateIcon(SVGIcons.personPlus, height, width);
		// person-square.svg
		case 908:
			return generateIcon(SVGIcons.personSquare, height, width);
		// person-x-fill.svg
		case 909:
			return generateIcon(SVGIcons.personXFill, height, width);
		// person-x.svg
		case 910:
			return generateIcon(SVGIcons.personX, height, width);
		// person.svg
		case 911:
			return generateIcon(SVGIcons.person, height, width);
		// phone-fill.svg
		case 912:
			return generateIcon(SVGIcons.phoneFill, height, width);
		// phone-landscape-fill.svg
		case 913:
			return generateIcon(SVGIcons.phoneLandscapeFill, height, width);
		// phone-landscape.svg
		case 914:
			return generateIcon(SVGIcons.phoneLandscape, height, width);
		// phone-vibrate.svg
		case 915:
			return generateIcon(SVGIcons.phoneVibrate, height, width);
		// phone.svg
		case 916:
			return generateIcon(SVGIcons.phone, height, width);
		// pie-chart-fill.svg
		case 917:
			return generateIcon(SVGIcons.pieChartFill, height, width);
		// pie-chart.svg
		case 918:
			return generateIcon(SVGIcons.pieChart, height, width);
		// pip-fill.svg
		case 919:
			return generateIcon(SVGIcons.pipFill, height, width);
		// pip.svg
		case 920:
			return generateIcon(SVGIcons.pip, height, width);
		// play-btn-fill.svg
		case 921:
			return generateIcon(SVGIcons.playBtnFill, height, width);
		// play-btn.svg
		case 922:
			return generateIcon(SVGIcons.playBtn, height, width);
		// play-circle-fill.svg
		case 923:
			return generateIcon(SVGIcons.playCircleFill, height, width);
		// play-circle.svg
		case 924:
			return generateIcon(SVGIcons.playCircle, height, width);
		// play-fill.svg
		case 925:
			return generateIcon(SVGIcons.playFill, height, width);
		// play.svg
		case 926:
			return generateIcon(SVGIcons.play, height, width);
		// plug-fill.svg
		case 927:
			return generateIcon(SVGIcons.plugFill, height, width);
		// plug.svg
		case 928:
			return generateIcon(SVGIcons.plug, height, width);
		// plus-circle-fill.svg
		case 929:
			return generateIcon(SVGIcons.plusCircleFill, height, width);
		// plus-circle.svg
		case 930:
			return generateIcon(SVGIcons.plusCircle, height, width);
		// plus-square-fill.svg
		case 931:
			return generateIcon(SVGIcons.plusSquareFill, height, width);
		// plus-square.svg
		case 932:
			return generateIcon(SVGIcons.plusSquare, height, width);
		// plus.svg
		case 933:
			return generateIcon(SVGIcons.plus, height, width);
		// power.svg
		case 934:
			return generateIcon(SVGIcons.power, height, width);
		// printer-fill.svg
		case 935:
			return generateIcon(SVGIcons.printerFill, height, width);
		// printer.svg
		case 936:
			return generateIcon(SVGIcons.printer, height, width);
		// puzzle-fill.svg
		case 937:
			return generateIcon(SVGIcons.puzzleFill, height, width);
		// puzzle.svg
		case 938:
			return generateIcon(SVGIcons.puzzle, height, width);
		// question-circle-fill.svg
		case 939:
			return generateIcon(SVGIcons.questionCircleFill, height, width);
		// question-circle.svg
		case 940:
			return generateIcon(SVGIcons.questionCircle, height, width);
		// question-diamond-fill.svg
		case 941:
			return generateIcon(SVGIcons.questionDiamondFill, height, width);
		// question-diamond.svg
		case 942:
			return generateIcon(SVGIcons.questionDiamond, height, width);
		// question-octagon-fill.svg
		case 943:
			return generateIcon(SVGIcons.questionOctagonFill, height, width);
		// question-octagon.svg
		case 944:
			return generateIcon(SVGIcons.questionOctagon, height, width);
		// question-square-fill.svg
		case 945:
			return generateIcon(SVGIcons.questionSquareFill, height, width);
		// question-square.svg
		case 946:
			return generateIcon(SVGIcons.questionSquare, height, width);
		// question.svg
		case 947:
			return generateIcon(SVGIcons.question, height, width);
		// receipt-cutoff.svg
		case 948:
			return generateIcon(SVGIcons.receiptCutoff, height, width);
		// receipt.svg
		case 949:
			return generateIcon(SVGIcons.receipt, height, width);
		// reception-0.svg
		case 950:
			return generateIcon(SVGIcons.reception0, height, width);
		// reception-1.svg
		case 951:
			return generateIcon(SVGIcons.reception1, height, width);
		// reception-2.svg
		case 952:
			return generateIcon(SVGIcons.reception2, height, width);
		// reception-3.svg
		case 953:
			return generateIcon(SVGIcons.reception3, height, width);
		// reception-4.svg
		case 954:
			return generateIcon(SVGIcons.reception4, height, width);
		// record-btn-fill.svg
		case 955:
			return generateIcon(SVGIcons.recordBtnFill, height, width);
		// record-btn.svg
		case 956:
			return generateIcon(SVGIcons.recordBtn, height, width);
		// record-circle-fill.svg
		case 957:
			return generateIcon(SVGIcons.recordCircleFill, height, width);
		// record-circle.svg
		case 958:
			return generateIcon(SVGIcons.recordCircle, height, width);
		// record-fill.svg
		case 959:
			return generateIcon(SVGIcons.recordFill, height, width);
		// record.svg
		case 960:
			return generateIcon(SVGIcons.record, height, width);
		// record2-fill.svg
		case 961:
			return generateIcon(SVGIcons.record2Fill, height, width);
		// record2.svg
		case 962:
			return generateIcon(SVGIcons.record2, height, width);
		// reply-all-fill.svg
		case 963:
			return generateIcon(SVGIcons.replyAllFill, height, width);
		// reply-all.svg
		case 964:
			return generateIcon(SVGIcons.replyAll, height, width);
		// reply-fill.svg
		case 965:
			return generateIcon(SVGIcons.replyFill, height, width);
		// reply.svg
		case 966:
			return generateIcon(SVGIcons.reply, height, width);
		// rss-fill.svg
		case 967:
			return generateIcon(SVGIcons.rssFill, height, width);
		// rss.svg
		case 968:
			return generateIcon(SVGIcons.rss, height, width);
		// scissors.svg
		case 969:
			return generateIcon(SVGIcons.scissors, height, width);
		// screwdriver.svg
		case 970:
			return generateIcon(SVGIcons.screwdriver, height, width);
		// search.svg
		case 971:
			return generateIcon(SVGIcons.search, height, width);
		// segmented-nav.svg
		case 972:
			return generateIcon(SVGIcons.segmentedNav, height, width);
		// server.svg
		case 973:
			return generateIcon(SVGIcons.server, height, width);
		// share-fill.svg
		case 974:
			return generateIcon(SVGIcons.shareFill, height, width);
		// share.svg
		case 975:
			return generateIcon(SVGIcons.share, height, width);
		// shield-check.svg
		case 976:
			return generateIcon(SVGIcons.shieldCheck, height, width);
		// shield-exclamation.svg
		case 977:
			return generateIcon(SVGIcons.shieldExclamation, height, width);
		// shield-fill-check.svg
		case 978:
			return generateIcon(SVGIcons.shieldFillCheck, height, width);
		// shield-fill-exclamation.svg
		case 979:
			return generateIcon(SVGIcons.shieldFillExclamation, height, width);
		// shield-fill-minus.svg
		case 980:
			return generateIcon(SVGIcons.shieldFillMinus, height, width);
		// shield-fill-plus.svg
		case 981:
			return generateIcon(SVGIcons.shieldFillPlus, height, width);
		// shield-fill-x.svg
		case 982:
			return generateIcon(SVGIcons.shieldFillX, height, width);
		// shield-fill.svg
		case 983:
			return generateIcon(SVGIcons.shieldFill, height, width);
		// shield-lock-fill.svg
		case 984:
			return generateIcon(SVGIcons.shieldLockFill, height, width);
		// shield-lock.svg
		case 985:
			return generateIcon(SVGIcons.shieldLock, height, width);
		// shield-minus.svg
		case 986:
			return generateIcon(SVGIcons.shieldMinus, height, width);
		// shield-plus.svg
		case 987:
			return generateIcon(SVGIcons.shieldPlus, height, width);
		// shield-shaded.svg
		case 988:
			return generateIcon(SVGIcons.shieldShaded, height, width);
		// shield-slash-fill.svg
		case 989:
			return generateIcon(SVGIcons.shieldSlashFill, height, width);
		// shield-slash.svg
		case 990:
			return generateIcon(SVGIcons.shieldSlash, height, width);
		// shield-x.svg
		case 991:
			return generateIcon(SVGIcons.shieldX, height, width);
		// shield.svg
		case 992:
			return generateIcon(SVGIcons.shield, height, width);
		// shift-fill.svg
		case 993:
			return generateIcon(SVGIcons.shiftFill, height, width);
		// shift.svg
		case 994:
			return generateIcon(SVGIcons.shift, height, width);
		// shop-window.svg
		case 995:
			return generateIcon(SVGIcons.shopWindow, height, width);
		// shop.svg
		case 996:
			return generateIcon(SVGIcons.shop, height, width);
		// shuffle.svg
		case 997:
			return generateIcon(SVGIcons.shuffle, height, width);
		// signpost-2-fill.svg
		case 998:
			return generateIcon(SVGIcons.signpost2Fill, height, width);
		// signpost-2.svg
		case 999:
			return generateIcon(SVGIcons.signpost2, height, width);
		// signpost-fill.svg
		case 1000:
			return generateIcon(SVGIcons.signpostFill, height, width);
		// signpost-split-fill.svg
		case 1001:
			return generateIcon(SVGIcons.signpostSplitFill, height, width);
		// signpost-split.svg
		case 1002:
			return generateIcon(SVGIcons.signpostSplit, height, width);
		// signpost.svg
		case 1003:
			return generateIcon(SVGIcons.signpost, height, width);
		// sim-fill.svg
		case 1004:
			return generateIcon(SVGIcons.simFill, height, width);
		// sim.svg
		case 1005:
			return generateIcon(SVGIcons.sim, height, width);
		// skip-backward-btn-fill.svg
		case 1006:
			return generateIcon(SVGIcons.skipBackwardBtnFill, height, width);
		// skip-backward-btn.svg
		case 1007:
			return generateIcon(SVGIcons.skipBackwardBtn, height, width);
		// skip-backward-circle-fill.svg
		case 1008:
			return generateIcon(SVGIcons.skipBackwardCircleFill, height, width);
		// skip-backward-circle.svg
		case 1009:
			return generateIcon(SVGIcons.skipBackwardCircle, height, width);
		// skip-backward-fill.svg
		case 1010:
			return generateIcon(SVGIcons.skipBackwardFill, height, width);
		// skip-backward.svg
		case 1011:
			return generateIcon(SVGIcons.skipBackward, height, width);
		// skip-end-btn-fill.svg
		case 1012:
			return generateIcon(SVGIcons.skipEndBtnFill, height, width);
		// skip-end-btn.svg
		case 1013:
			return generateIcon(SVGIcons.skipEndBtn, height, width);
		// skip-end-circle-fill.svg
		case 1014:
			return generateIcon(SVGIcons.skipEndCircleFill, height, width);
		// skip-end-circle.svg
		case 1015:
			return generateIcon(SVGIcons.skipEndCircle, height, width);
		// skip-end-fill.svg
		case 1016:
			return generateIcon(SVGIcons.skipEndFill, height, width);
		// skip-end.svg
		case 1017:
			return generateIcon(SVGIcons.skipEnd, height, width);
		// skip-forward-btn-fill.svg
		case 1018:
			return generateIcon(SVGIcons.skipForwardBtnFill, height, width);
		// skip-forward-btn.svg
		case 1019:
			return generateIcon(SVGIcons.skipForwardBtn, height, width);
		// skip-forward-circle-fill.svg
		case 1020:
			return generateIcon(SVGIcons.skipForwardCircleFill, height, width);
		// skip-forward-circle.svg
		case 1021:
			return generateIcon(SVGIcons.skipForwardCircle, height, width);
		// skip-forward-fill.svg
		case 1022:
			return generateIcon(SVGIcons.skipForwardFill, height, width);
		// skip-forward.svg
		case 1023:
			return generateIcon(SVGIcons.skipForward, height, width);
		// skip-start-btn-fill.svg
		case 1024:
			return generateIcon(SVGIcons.skipStartBtnFill, height, width);
		// skip-start-btn.svg
		case 1025:
			return generateIcon(SVGIcons.skipStartBtn, height, width);
		// skip-start-circle-fill.svg
		case 1026:
			return generateIcon(SVGIcons.skipStartCircleFill, height, width);
		// skip-start-circle.svg
		case 1027:
			return generateIcon(SVGIcons.skipStartCircle, height, width);
		// skip-start-fill.svg
		case 1028:
			return generateIcon(SVGIcons.skipStartFill, height, width);
		// skip-start.svg
		case 1029:
			return generateIcon(SVGIcons.skipStart, height, width);
		// slack.svg
		case 1030:
			return generateIcon(SVGIcons.slack, height, width);
		// slash-circle-fill.svg
		case 1031:
			return generateIcon(SVGIcons.slashCircleFill, height, width);
		// slash-circle.svg
		case 1032:
			return generateIcon(SVGIcons.slashCircle, height, width);
		// slash-square-fill.svg
		case 1033:
			return generateIcon(SVGIcons.slashSquareFill, height, width);
		// slash-square.svg
		case 1034:
			return generateIcon(SVGIcons.slashSquare, height, width);
		// slash.svg
		case 1035:
			return generateIcon(SVGIcons.slash, height, width);
		// sliders.svg
		case 1036:
			return generateIcon(SVGIcons.sliders, height, width);
		// smartwatch.svg
		case 1037:
			return generateIcon(SVGIcons.smartwatch, height, width);
		// sort-alpha-down-alt.svg
		case 1038:
			return generateIcon(SVGIcons.sortAlphaDownAlt, height, width);
		// sort-alpha-down.svg
		case 1039:
			return generateIcon(SVGIcons.sortAlphaDown, height, width);
		// sort-alpha-up-alt.svg
		case 1040:
			return generateIcon(SVGIcons.sortAlphaUpAlt, height, width);
		// sort-alpha-up.svg
		case 1041:
			return generateIcon(SVGIcons.sortAlphaUp, height, width);
		// sort-down-alt.svg
		case 1042:
			return generateIcon(SVGIcons.sortDownAlt, height, width);
		// sort-down.svg
		case 1043:
			return generateIcon(SVGIcons.sortDown, height, width);
		// sort-numeric-down-alt.svg
		case 1044:
			return generateIcon(SVGIcons.sortNumericDownAlt, height, width);
		// sort-numeric-down.svg
		case 1045:
			return generateIcon(SVGIcons.sortNumericDown, height, width);
		// sort-numeric-up-alt.svg
		case 1046:
			return generateIcon(SVGIcons.sortNumericUpAlt, height, width);
		// sort-numeric-up.svg
		case 1047:
			return generateIcon(SVGIcons.sortNumericUp, height, width);
		// sort-up-alt.svg
		case 1048:
			return generateIcon(SVGIcons.sortUpAlt, height, width);
		// sort-up.svg
		case 1049:
			return generateIcon(SVGIcons.sortUp, height, width);
		// soundwave.svg
		case 1050:
			return generateIcon(SVGIcons.soundwave, height, width);
		// speaker-fill.svg
		case 1051:
			return generateIcon(SVGIcons.speakerFill, height, width);
		// speaker.svg
		case 1052:
			return generateIcon(SVGIcons.speaker, height, width);
		// spellcheck.svg
		case 1053:
			return generateIcon(SVGIcons.spellcheck, height, width);
		// square-fill.svg
		case 1054:
			return generateIcon(SVGIcons.squareFill, height, width);
		// square-half.svg
		case 1055:
			return generateIcon(SVGIcons.squareHalf, height, width);
		// square.svg
		case 1056:
			return generateIcon(SVGIcons.square, height, width);
		// star-fill.svg
		case 1057:
			return generateIcon(SVGIcons.starFill, height, width);
		// star-half.svg
		case 1058:
			return generateIcon(SVGIcons.starHalf, height, width);
		// star.svg
		case 1059:
			return generateIcon(SVGIcons.star, height, width);
		// stickies-fill.svg
		case 1060:
			return generateIcon(SVGIcons.stickiesFill, height, width);
		// stickies.svg
		case 1061:
			return generateIcon(SVGIcons.stickies, height, width);
		// sticky-fill.svg
		case 1062:
			return generateIcon(SVGIcons.stickyFill, height, width);
		// sticky.svg
		case 1063:
			return generateIcon(SVGIcons.sticky, height, width);
		// stop-btn-fill.svg
		case 1064:
			return generateIcon(SVGIcons.stopBtnFill, height, width);
		// stop-btn.svg
		case 1065:
			return generateIcon(SVGIcons.stopBtn, height, width);
		// stop-circle-fill.svg
		case 1066:
			return generateIcon(SVGIcons.stopCircleFill, height, width);
		// stop-circle.svg
		case 1067:
			return generateIcon(SVGIcons.stopCircle, height, width);
		// stop-fill.svg
		case 1068:
			return generateIcon(SVGIcons.stopFill, height, width);
		// stop.svg
		case 1069:
			return generateIcon(SVGIcons.stop, height, width);
		// stoplights-fill.svg
		case 1070:
			return generateIcon(SVGIcons.stoplightsFill, height, width);
		// stoplights.svg
		case 1071:
			return generateIcon(SVGIcons.stoplights, height, width);
		// stopwatch-fill.svg
		case 1072:
			return generateIcon(SVGIcons.stopwatchFill, height, width);
		// stopwatch.svg
		case 1073:
			return generateIcon(SVGIcons.stopwatch, height, width);
		// subtract.svg
		case 1074:
			return generateIcon(SVGIcons.subtract, height, width);
		// suit-club-fill.svg
		case 1075:
			return generateIcon(SVGIcons.suitClubFill, height, width);
		// suit-club.svg
		case 1076:
			return generateIcon(SVGIcons.suitClub, height, width);
		// suit-diamond-fill.svg
		case 1077:
			return generateIcon(SVGIcons.suitDiamondFill, height, width);
		// suit-diamond.svg
		case 1078:
			return generateIcon(SVGIcons.suitDiamond, height, width);
		// suit-heart-fill.svg
		case 1079:
			return generateIcon(SVGIcons.suitHeartFill, height, width);
		// suit-heart.svg
		case 1080:
			return generateIcon(SVGIcons.suitHeart, height, width);
		// suit-spade-fill.svg
		case 1081:
			return generateIcon(SVGIcons.suitSpadeFill, height, width);
		// suit-spade.svg
		case 1082:
			return generateIcon(SVGIcons.suitSpade, height, width);
		// sun.svg
		case 1083:
			return generateIcon(SVGIcons.sun, height, width);
		// sunglasses.svg
		case 1084:
			return generateIcon(SVGIcons.sunglasses, height, width);
		// table.svg
		case 1085:
			return generateIcon(SVGIcons.table, height, width);
		// tablet-fill.svg
		case 1086:
			return generateIcon(SVGIcons.tabletFill, height, width);
		// tablet-landscape-fill.svg
		case 1087:
			return generateIcon(SVGIcons.tabletLandscapeFill, height, width);
		// tablet-landscape.svg
		case 1088:
			return generateIcon(SVGIcons.tabletLandscape, height, width);
		// tablet.svg
		case 1089:
			return generateIcon(SVGIcons.tablet, height, width);
		// tag-fill.svg
		case 1090:
			return generateIcon(SVGIcons.tagFill, height, width);
		// tag.svg
		case 1091:
			return generateIcon(SVGIcons.tag, height, width);
		// tags-fill.svg
		case 1092:
			return generateIcon(SVGIcons.tagsFill, height, width);
		// tags.svg
		case 1093:
			return generateIcon(SVGIcons.tags, height, width);
		// telephone-fill.svg
		case 1094:
			return generateIcon(SVGIcons.telephoneFill, height, width);
		// telephone-forward-fill.svg
		case 1095:
			return generateIcon(SVGIcons.telephoneForwardFill, height, width);
		// telephone-forward.svg
		case 1096:
			return generateIcon(SVGIcons.telephoneForward, height, width);
		// telephone-inbound-fill.svg
		case 1097:
			return generateIcon(SVGIcons.telephoneInboundFill, height, width);
		// telephone-inbound.svg
		case 1098:
			return generateIcon(SVGIcons.telephoneInbound, height, width);
		// telephone-minus-fill.svg
		case 1099:
			return generateIcon(SVGIcons.telephoneMinusFill, height, width);
		// telephone-minus.svg
		case 1100:
			return generateIcon(SVGIcons.telephoneMinus, height, width);
		// telephone-outbound-fill.svg
		case 1101:
			return generateIcon(SVGIcons.telephoneOutboundFill, height, width);
		// telephone-outbound.svg
		case 1102:
			return generateIcon(SVGIcons.telephoneOutbound, height, width);
		// telephone-plus-fill.svg
		case 1103:
			return generateIcon(SVGIcons.telephonePlusFill, height, width);
		// telephone-plus.svg
		case 1104:
			return generateIcon(SVGIcons.telephonePlus, height, width);
		// telephone-x-fill.svg
		case 1105:
			return generateIcon(SVGIcons.telephoneXFill, height, width);
		// telephone-x.svg
		case 1106:
			return generateIcon(SVGIcons.telephoneX, height, width);
		// telephone.svg
		case 1107:
			return generateIcon(SVGIcons.telephone, height, width);
		// terminal-fill.svg
		case 1108:
			return generateIcon(SVGIcons.terminalFill, height, width);
		// terminal.svg
		case 1109:
			return generateIcon(SVGIcons.terminal, height, width);
		// text-center.svg
		case 1110:
			return generateIcon(SVGIcons.textCenter, height, width);
		// text-indent-left.svg
		case 1111:
			return generateIcon(SVGIcons.textIndentLeft, height, width);
		// text-indent-right.svg
		case 1112:
			return generateIcon(SVGIcons.textIndentRight, height, width);
		// text-left.svg
		case 1113:
			return generateIcon(SVGIcons.textLeft, height, width);
		// text-paragraph.svg
		case 1114:
			return generateIcon(SVGIcons.textParagraph, height, width);
		// text-right.svg
		case 1115:
			return generateIcon(SVGIcons.textRight, height, width);
		// textarea-resize.svg
		case 1116:
			return generateIcon(SVGIcons.textareaResize, height, width);
		// textarea-t.svg
		case 1117:
			return generateIcon(SVGIcons.textareaT, height, width);
		// textarea.svg
		case 1118:
			return generateIcon(SVGIcons.textarea, height, width);
		// thermometer-half.svg
		case 1119:
			return generateIcon(SVGIcons.thermometerHalf, height, width);
		// thermometer.svg
		case 1120:
			return generateIcon(SVGIcons.thermometer, height, width);
		// three-dots-vertical.svg
		case 1121:
			return generateIcon(SVGIcons.threeDotsVertical, height, width);
		// three-dots.svg
		case 1122:
			return generateIcon(SVGIcons.threeDots, height, width);
		// toggle-off.svg
		case 1123:
			return generateIcon(SVGIcons.toggleOff, height, width);
		// toggle-on.svg
		case 1124:
			return generateIcon(SVGIcons.toggleOn, height, width);
		// toggle2-off.svg
		case 1125:
			return generateIcon(SVGIcons.toggle2Off, height, width);
		// toggle2-on.svg
		case 1126:
			return generateIcon(SVGIcons.toggle2On, height, width);
		// toggles.svg
		case 1127:
			return generateIcon(SVGIcons.toggles, height, width);
		// toggles2.svg
		case 1128:
			return generateIcon(SVGIcons.toggles2, height, width);
		// tools.svg
		case 1129:
			return generateIcon(SVGIcons.tools, height, width);
		// trash-fill.svg
		case 1130:
			return generateIcon(SVGIcons.trashFill, height, width);
		// trash.svg
		case 1131:
			return generateIcon(SVGIcons.trash, height, width);
		// trash2-fill.svg
		case 1132:
			return generateIcon(SVGIcons.trash2Fill, height, width);
		// trash2.svg
		case 1133:
			return generateIcon(SVGIcons.trash2, height, width);
		// tree-fill.svg
		case 1134:
			return generateIcon(SVGIcons.treeFill, height, width);
		// tree.svg
		case 1135:
			return generateIcon(SVGIcons.tree, height, width);
		// triangle-fill.svg
		case 1136:
			return generateIcon(SVGIcons.triangleFill, height, width);
		// triangle-half.svg
		case 1137:
			return generateIcon(SVGIcons.triangleHalf, height, width);
		// triangle.svg
		case 1138:
			return generateIcon(SVGIcons.triangle, height, width);
		// trophy-fill.svg
		case 1139:
			return generateIcon(SVGIcons.trophyFill, height, width);
		// trophy.svg
		case 1140:
			return generateIcon(SVGIcons.trophy, height, width);
		// truck-flatbed.svg
		case 1141:
			return generateIcon(SVGIcons.truckFlatbed, height, width);
		// truck.svg
		case 1142:
			return generateIcon(SVGIcons.truck, height, width);
		// tv-fill.svg
		case 1143:
			return generateIcon(SVGIcons.tvFill, height, width);
		// tv.svg
		case 1144:
			return generateIcon(SVGIcons.tv, height, width);
		// twitch.svg
		case 1145:
			return generateIcon(SVGIcons.twitch, height, width);
		// twitter.svg
		case 1146:
			return generateIcon(SVGIcons.twitter, height, width);
		// type-bold.svg
		case 1147:
			return generateIcon(SVGIcons.typeBold, height, width);
		// type-h1.svg
		case 1148:
			return generateIcon(SVGIcons.typeH1, height, width);
		// type-h2.svg
		case 1149:
			return generateIcon(SVGIcons.typeH2, height, width);
		// type-h3.svg
		case 1150:
			return generateIcon(SVGIcons.typeH3, height, width);
		// type-italic.svg
		case 1151:
			return generateIcon(SVGIcons.typeItalic, height, width);
		// type-strikethrough.svg
		case 1152:
			return generateIcon(SVGIcons.typeStrikethrough, height, width);
		// type-underline.svg
		case 1153:
			return generateIcon(SVGIcons.typeUnderline, height, width);
		// type.svg
		case 1154:
			return generateIcon(SVGIcons.type, height, width);
		// ui-checks-grid.svg
		case 1155:
			return generateIcon(SVGIcons.uiChecksGrid, height, width);
		// ui-checks.svg
		case 1156:
			return generateIcon(SVGIcons.uiChecks, height, width);
		// ui-radios-grid.svg
		case 1157:
			return generateIcon(SVGIcons.uiRadiosGrid, height, width);
		// ui-radios.svg
		case 1158:
			return generateIcon(SVGIcons.uiRadios, height, width);
		// union.svg
		case 1159:
			return generateIcon(SVGIcons.union, height, width);
		// unlock-fill.svg
		case 1160:
			return generateIcon(SVGIcons.unlockFill, height, width);
		// unlock.svg
		case 1161:
			return generateIcon(SVGIcons.unlock, height, width);
		// upc-scan.svg
		case 1162:
			return generateIcon(SVGIcons.upcScan, height, width);
		// upc.svg
		case 1163:
			return generateIcon(SVGIcons.upc, height, width);
		// upload.svg
		case 1164:
			return generateIcon(SVGIcons.upload, height, width);
		// vector-pen.svg
		case 1165:
			return generateIcon(SVGIcons.vectorPen, height, width);
		// view-list.svg
		case 1166:
			return generateIcon(SVGIcons.viewList, height, width);
		// view-stacked.svg
		case 1167:
			return generateIcon(SVGIcons.viewStacked, height, width);
		// vinyl-fill.svg
		case 1168:
			return generateIcon(SVGIcons.vinylFill, height, width);
		// vinyl.svg
		case 1169:
			return generateIcon(SVGIcons.vinyl, height, width);
		// voicemail.svg
		case 1170:
			return generateIcon(SVGIcons.voicemail, height, width);
		// volume-down-fill.svg
		case 1171:
			return generateIcon(SVGIcons.volumeDownFill, height, width);
		// volume-down.svg
		case 1172:
			return generateIcon(SVGIcons.volumeDown, height, width);
		// volume-mute-fill.svg
		case 1173:
			return generateIcon(SVGIcons.volumeMuteFill, height, width);
		// volume-mute.svg
		case 1174:
			return generateIcon(SVGIcons.volumeMute, height, width);
		// volume-off-fill.svg
		case 1175:
			return generateIcon(SVGIcons.volumeOffFill, height, width);
		// volume-off.svg
		case 1176:
			return generateIcon(SVGIcons.volumeOff, height, width);
		// volume-up-fill.svg
		case 1177:
			return generateIcon(SVGIcons.volumeUpFill, height, width);
		// volume-up.svg
		case 1178:
			return generateIcon(SVGIcons.volumeUp, height, width);
		// vr.svg
		case 1179:
			return generateIcon(SVGIcons.vr, height, width);
		// wallet-fill.svg
		case 1180:
			return generateIcon(SVGIcons.walletFill, height, width);
		// wallet.svg
		case 1181:
			return generateIcon(SVGIcons.wallet, height, width);
		// wallet2.svg
		case 1182:
			return generateIcon(SVGIcons.wallet2, height, width);
		// watch.svg
		case 1183:
			return generateIcon(SVGIcons.watch, height, width);
		// wifi-1.svg
		case 1184:
			return generateIcon(SVGIcons.wifi1, height, width);
		// wifi-2.svg
		case 1185:
			return generateIcon(SVGIcons.wifi2, height, width);
		// wifi-off.svg
		case 1186:
			return generateIcon(SVGIcons.wifiOff, height, width);
		// wifi.svg
		case 1187:
			return generateIcon(SVGIcons.wifi, height, width);
		// window.svg
		case 1188:
			return generateIcon(SVGIcons.window, height, width);
		// wrench.svg
		case 1189:
			return generateIcon(SVGIcons.wrench, height, width);
		// x-circle-fill.svg
		case 1190:
			return generateIcon(SVGIcons.xCircleFill, height, width);
		// x-circle.svg
		case 1191:
			return generateIcon(SVGIcons.xCircle, height, width);
		// x-diamond-fill.svg
		case 1192:
			return generateIcon(SVGIcons.xDiamondFill, height, width);
		// x-diamond.svg
		case 1193:
			return generateIcon(SVGIcons.xDiamond, height, width);
		// x-octagon-fill.svg
		case 1194:
			return generateIcon(SVGIcons.xOctagonFill, height, width);
		// x-octagon.svg
		case 1195:
			return generateIcon(SVGIcons.xOctagon, height, width);
		// x-square-fill.svg
		case 1196:
			return generateIcon(SVGIcons.xSquareFill, height, width);
		// x-square.svg
		case 1197:
			return generateIcon(SVGIcons.xSquare, height, width);
		// x.svg
		case 1198:
			return generateIcon(SVGIcons.x, height, width);
		// youtube.svg
		case 1199:
			return generateIcon(SVGIcons.youtube, height, width);
		// zoom-in.svg
		case 1200:
			return generateIcon(SVGIcons.zoomIn, height, width);
		// zoom-out.svg
		case 1201:
			return generateIcon(SVGIcons.zoomOut, height, width);
	}
}