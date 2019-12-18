import generateIcon from "./generate";

// Icons to import
const alarmFill = require("bootstrap-icons/icons/alarm-fill.svg");
const alarm = require("bootstrap-icons/icons/alarm.svg");
const alertCircleFill = require("bootstrap-icons/icons/alert-circle-fill.svg");
const alertCircle = require("bootstrap-icons/icons/alert-circle.svg");
const alertOctagonFill = require("bootstrap-icons/icons/alert-octagon-fill.svg");
const alertOctagon = require("bootstrap-icons/icons/alert-octagon.svg");
const alertSquareFill = require("bootstrap-icons/icons/alert-square-fill.svg");
const alertSquare = require("bootstrap-icons/icons/alert-square.svg");
const alertTriangleFill = require("bootstrap-icons/icons/alert-triangle-fill.svg");
const alertTriangle = require("bootstrap-icons/icons/alert-triangle.svg");
const archiveFill = require("bootstrap-icons/icons/archive-fill.svg");
const archive = require("bootstrap-icons/icons/archive.svg");
const arrowBarBottom = require("bootstrap-icons/icons/arrow-bar-bottom.svg");
const arrowBarLeft = require("bootstrap-icons/icons/arrow-bar-left.svg");
const arrowBarRight = require("bootstrap-icons/icons/arrow-bar-right.svg");
const arrowBarUp = require("bootstrap-icons/icons/arrow-bar-up.svg");
const arrowClockwise = require("bootstrap-icons/icons/arrow-clockwise.svg");
const arrowCounterclockwise = require("bootstrap-icons/icons/arrow-counterclockwise.svg");
const arrowDownLeft = require("bootstrap-icons/icons/arrow-down-left.svg");
const arrowDownRight = require("bootstrap-icons/icons/arrow-down-right.svg");
const arrowDownShort = require("bootstrap-icons/icons/arrow-down-short.svg");
const arrowDown = require("bootstrap-icons/icons/arrow-down.svg");
const arrowLeftRight = require("bootstrap-icons/icons/arrow-left-right.svg");
const arrowLeftShort = require("bootstrap-icons/icons/arrow-left-short.svg");
const arrowLeft = require("bootstrap-icons/icons/arrow-left.svg");
const arrowRepeat = require("bootstrap-icons/icons/arrow-repeat.svg");
const arrowRightShort = require("bootstrap-icons/icons/arrow-right-short.svg");
const arrowRight = require("bootstrap-icons/icons/arrow-right.svg");
const arrowUpDown = require("bootstrap-icons/icons/arrow-up-down.svg");
const arrowUpLeft = require("bootstrap-icons/icons/arrow-up-left.svg");
const arrowUpRight = require("bootstrap-icons/icons/arrow-up-right.svg");
const arrowUpShort = require("bootstrap-icons/icons/arrow-up-short.svg");
const arrowUp = require("bootstrap-icons/icons/arrow-up.svg");
const arrowsAngleContract = require("bootstrap-icons/icons/arrows-angle-contract.svg");
const arrowsAngleExpand = require("bootstrap-icons/icons/arrows-angle-expand.svg");
const arrowsCollapse = require("bootstrap-icons/icons/arrows-collapse.svg");
const arrowsExpand = require("bootstrap-icons/icons/arrows-expand.svg");
const arrowsFullscreen = require("bootstrap-icons/icons/arrows-fullscreen.svg");
const at = require("bootstrap-icons/icons/at.svg");
const award = require("bootstrap-icons/icons/award.svg");
const backspaceFill = require("bootstrap-icons/icons/backspace-fill.svg");
const backspaceReverseFill = require("bootstrap-icons/icons/backspace-reverse-fill.svg");
const backspaceReverse = require("bootstrap-icons/icons/backspace-reverse.svg");
const backspace = require("bootstrap-icons/icons/backspace.svg");
const barChartFill = require("bootstrap-icons/icons/bar-chart-fill.svg");
const barChart = require("bootstrap-icons/icons/bar-chart.svg");
const batteryCharging = require("bootstrap-icons/icons/battery-charging.svg");
const batteryFull = require("bootstrap-icons/icons/battery-full.svg");
const battery = require("bootstrap-icons/icons/battery.svg");
const bellFill = require("bootstrap-icons/icons/bell-fill.svg");
const bell = require("bootstrap-icons/icons/bell.svg");
const blockquoteLeft = require("bootstrap-icons/icons/blockquote-left.svg");
const blockquoteRight = require("bootstrap-icons/icons/blockquote-right.svg");
const bookHalfFill = require("bootstrap-icons/icons/book-half-fill.svg");
const book = require("bootstrap-icons/icons/book.svg");
const bookmarkFill = require("bootstrap-icons/icons/bookmark-fill.svg");
const bookmark = require("bootstrap-icons/icons/bookmark.svg");
const bootstrapFill = require("bootstrap-icons/icons/bootstrap-fill.svg");
const bootstrapReboot = require("bootstrap-icons/icons/bootstrap-reboot.svg");
const bootstrap = require("bootstrap-icons/icons/bootstrap.svg");
const boxArrowBottomLeft = require("bootstrap-icons/icons/box-arrow-bottom-left.svg");
const boxArrowBottomRight = require("bootstrap-icons/icons/box-arrow-bottom-right.svg");
const boxArrowDown = require("bootstrap-icons/icons/box-arrow-down.svg");
const boxArrowLeft = require("bootstrap-icons/icons/box-arrow-left.svg");
const boxArrowRight = require("bootstrap-icons/icons/box-arrow-right.svg");
const boxArrowUpLeft = require("bootstrap-icons/icons/box-arrow-up-left.svg");
const boxArrowUpRight = require("bootstrap-icons/icons/box-arrow-up-right.svg");
const boxArrowUp = require("bootstrap-icons/icons/box-arrow-up.svg");
const braces = require("bootstrap-icons/icons/braces.svg");
const brightnessFillHigh = require("bootstrap-icons/icons/brightness-fill-high.svg");
const brightnessFillLow = require("bootstrap-icons/icons/brightness-fill-low.svg");
const brightnessHigh = require("bootstrap-icons/icons/brightness-high.svg");
const brightnessLow = require("bootstrap-icons/icons/brightness-low.svg");
const brush = require("bootstrap-icons/icons/brush.svg");
const bucketFill = require("bootstrap-icons/icons/bucket-fill.svg");
const bucket = require("bootstrap-icons/icons/bucket.svg");
const building = require("bootstrap-icons/icons/building.svg");
const bullseye = require("bootstrap-icons/icons/bullseye.svg");
const calendarFill = require("bootstrap-icons/icons/calendar-fill.svg");
const calendar = require("bootstrap-icons/icons/calendar.svg");
const cameraVideoFill = require("bootstrap-icons/icons/camera-video-fill.svg");
const cameraVideo = require("bootstrap-icons/icons/camera-video.svg");
const camera = require("bootstrap-icons/icons/camera.svg");
const capslockFill = require("bootstrap-icons/icons/capslock-fill.svg");
const capslock = require("bootstrap-icons/icons/capslock.svg");
const chatFill = require("bootstrap-icons/icons/chat-fill.svg");
const chat = require("bootstrap-icons/icons/chat.svg");
const checkBox = require("bootstrap-icons/icons/check-box.svg");
const checkCircle = require("bootstrap-icons/icons/check-circle.svg");
const check = require("bootstrap-icons/icons/check.svg");
const chevronCompactDown = require("bootstrap-icons/icons/chevron-compact-down.svg");
const chevronCompactLeft = require("bootstrap-icons/icons/chevron-compact-left.svg");
const chevronCompactRight = require("bootstrap-icons/icons/chevron-compact-right.svg");
const chevronCompactUp = require("bootstrap-icons/icons/chevron-compact-up.svg");
const chevronDown = require("bootstrap-icons/icons/chevron-down.svg");
const chevronLeft = require("bootstrap-icons/icons/chevron-left.svg");
const chevronRight = require("bootstrap-icons/icons/chevron-right.svg");
const chevronUp = require("bootstrap-icons/icons/chevron-up.svg");
const circleFill = require("bootstrap-icons/icons/circle-fill.svg");
const circleHalf = require("bootstrap-icons/icons/circle-half.svg");
const circleSlash = require("bootstrap-icons/icons/circle-slash.svg");
const circle = require("bootstrap-icons/icons/circle.svg");
const clockFill = require("bootstrap-icons/icons/clock-fill.svg");
const clock = require("bootstrap-icons/icons/clock.svg");
const cloudDownload = require("bootstrap-icons/icons/cloud-download.svg");
const cloudFill = require("bootstrap-icons/icons/cloud-fill.svg");
const cloudUpload = require("bootstrap-icons/icons/cloud-upload.svg");
const cloud = require("bootstrap-icons/icons/cloud.svg");
const codeSlash = require("bootstrap-icons/icons/code-slash.svg");
const code = require("bootstrap-icons/icons/code.svg");
const columnsGutters = require("bootstrap-icons/icons/columns-gutters.svg");
const columns = require("bootstrap-icons/icons/columns.svg");
const command = require("bootstrap-icons/icons/command.svg");
const compass = require("bootstrap-icons/icons/compass.svg");
const coneStriped = require("bootstrap-icons/icons/cone-striped.svg");
const cone = require("bootstrap-icons/icons/cone.svg");
const controller = require("bootstrap-icons/icons/controller.svg");
const creditCard = require("bootstrap-icons/icons/credit-card.svg");
const cursorFill = require("bootstrap-icons/icons/cursor-fill.svg");
const cursor = require("bootstrap-icons/icons/cursor.svg");
const dash = require("bootstrap-icons/icons/dash.svg");
const diamondHalf = require("bootstrap-icons/icons/diamond-half.svg");
const diamond = require("bootstrap-icons/icons/diamond.svg");
const displayFill = require("bootstrap-icons/icons/display-fill.svg");
const display = require("bootstrap-icons/icons/display.svg");
const documentCode = require("bootstrap-icons/icons/document-code.svg");
const documentDiff = require("bootstrap-icons/icons/document-diff.svg");
const documentRichtext = require("bootstrap-icons/icons/document-richtext.svg");
const documentSpreadsheet = require("bootstrap-icons/icons/document-spreadsheet.svg");
const documentText = require("bootstrap-icons/icons/document-text.svg");
const document = require("bootstrap-icons/icons/document.svg");
const documentsAlt = require("bootstrap-icons/icons/documents-alt.svg");
const documents = require("bootstrap-icons/icons/documents.svg");
const dot = require("bootstrap-icons/icons/dot.svg");
const download = require("bootstrap-icons/icons/download.svg");
const eggFried = require("bootstrap-icons/icons/egg-fried.svg");
const ejectFill = require("bootstrap-icons/icons/eject-fill.svg");
const eject = require("bootstrap-icons/icons/eject.svg");
const envelopeFill = require("bootstrap-icons/icons/envelope-fill.svg");
const envelopeOpenFill = require("bootstrap-icons/icons/envelope-open-fill.svg");
const envelopeOpen = require("bootstrap-icons/icons/envelope-open.svg");
const envelope = require("bootstrap-icons/icons/envelope.svg");
const eyeFill = require("bootstrap-icons/icons/eye-fill.svg");
const eyeSlashFill = require("bootstrap-icons/icons/eye-slash-fill.svg");
const eyeSlash = require("bootstrap-icons/icons/eye-slash.svg");
const eye = require("bootstrap-icons/icons/eye.svg");
const filter = require("bootstrap-icons/icons/filter.svg");
const flagFill = require("bootstrap-icons/icons/flag-fill.svg");
const flag = require("bootstrap-icons/icons/flag.svg");
const folderFill = require("bootstrap-icons/icons/folder-fill.svg");
const folderSymlinkFill = require("bootstrap-icons/icons/folder-symlink-fill.svg");
const folderSymlink = require("bootstrap-icons/icons/folder-symlink.svg");
const folder = require("bootstrap-icons/icons/folder.svg");
const fonts = require("bootstrap-icons/icons/fonts.svg");
const forwardFill = require("bootstrap-icons/icons/forward-fill.svg");
const forward = require("bootstrap-icons/icons/forward.svg");
const gearFill = require("bootstrap-icons/icons/gear-fill.svg");
const gearWideConnected = require("bootstrap-icons/icons/gear-wide-connected.svg");
const gearWide = require("bootstrap-icons/icons/gear-wide.svg");
const gear = require("bootstrap-icons/icons/gear.svg");
const geo = require("bootstrap-icons/icons/geo.svg");
const graphDown = require("bootstrap-icons/icons/graph-down.svg");
const graphUp = require("bootstrap-icons/icons/graph-up.svg");
const gridFill = require("bootstrap-icons/icons/grid-fill.svg");
const grid = require("bootstrap-icons/icons/grid.svg");
const hammer = require("bootstrap-icons/icons/hammer.svg");
const hash = require("bootstrap-icons/icons/hash.svg");
const heartFill = require("bootstrap-icons/icons/heart-fill.svg");
const heart = require("bootstrap-icons/icons/heart.svg");
const houseFill = require("bootstrap-icons/icons/house-fill.svg");
const house = require("bootstrap-icons/icons/house.svg");
const imageAlt = require("bootstrap-icons/icons/image-alt.svg");
const imageFill = require("bootstrap-icons/icons/image-fill.svg");
const image = require("bootstrap-icons/icons/image.svg");
const images = require("bootstrap-icons/icons/images.svg");
const inboxFill = require("bootstrap-icons/icons/inbox-fill.svg");
const inbox = require("bootstrap-icons/icons/inbox.svg");
const inboxesFill = require("bootstrap-icons/icons/inboxes-fill.svg");
const inboxes = require("bootstrap-icons/icons/inboxes.svg");
const infoFill = require("bootstrap-icons/icons/info-fill.svg");
const infoSquareFill = require("bootstrap-icons/icons/info-square-fill.svg");
const infoSquare = require("bootstrap-icons/icons/info-square.svg");
const info = require("bootstrap-icons/icons/info.svg");
const justifyLeft = require("bootstrap-icons/icons/justify-left.svg");
const justifyRight = require("bootstrap-icons/icons/justify-right.svg");
const justify = require("bootstrap-icons/icons/justify.svg");
const kanbanFill = require("bootstrap-icons/icons/kanban-fill.svg");
const kanban = require("bootstrap-icons/icons/kanban.svg");
const laptop = require("bootstrap-icons/icons/laptop.svg");
const layoutSidebarReverse = require("bootstrap-icons/icons/layout-sidebar-reverse.svg");
const layoutSidebar = require("bootstrap-icons/icons/layout-sidebar.svg");
const layoutSplit = require("bootstrap-icons/icons/layout-split.svg");
const listCheck = require("bootstrap-icons/icons/list-check.svg");
const listOl = require("bootstrap-icons/icons/list-ol.svg");
const listTask = require("bootstrap-icons/icons/list-task.svg");
const listUl = require("bootstrap-icons/icons/list-ul.svg");
const list = require("bootstrap-icons/icons/list.svg");
const lockFill = require("bootstrap-icons/icons/lock-fill.svg");
const lock = require("bootstrap-icons/icons/lock.svg");
const map = require("bootstrap-icons/icons/map.svg");
const mic = require("bootstrap-icons/icons/mic.svg");
const moon = require("bootstrap-icons/icons/moon.svg");
const musicPlayerFill = require("bootstrap-icons/icons/music-player-fill.svg");
const musicPlayer = require("bootstrap-icons/icons/music-player.svg");
const option = require("bootstrap-icons/icons/option.svg");
const outlet = require("bootstrap-icons/icons/outlet.svg");
const pauseFill = require("bootstrap-icons/icons/pause-fill.svg");
const pause = require("bootstrap-icons/icons/pause.svg");
const pen = require("bootstrap-icons/icons/pen.svg");
const pencil = require("bootstrap-icons/icons/pencil.svg");
const peopleFill = require("bootstrap-icons/icons/people-fill.svg");
const people = require("bootstrap-icons/icons/people.svg");
const personFill = require("bootstrap-icons/icons/person-fill.svg");
const person = require("bootstrap-icons/icons/person.svg");
const phoneLandscape = require("bootstrap-icons/icons/phone-landscape.svg");
const phone = require("bootstrap-icons/icons/phone.svg");
const pieChartFill = require("bootstrap-icons/icons/pie-chart-fill.svg");
const pieChart = require("bootstrap-icons/icons/pie-chart.svg");
const playFill = require("bootstrap-icons/icons/play-fill.svg");
const play = require("bootstrap-icons/icons/play.svg");
const plug = require("bootstrap-icons/icons/plug.svg");
const plus = require("bootstrap-icons/icons/plus.svg");
const power = require("bootstrap-icons/icons/power.svg");
const questionFill = require("bootstrap-icons/icons/question-fill.svg");
const questionSquareFill = require("bootstrap-icons/icons/question-square-fill.svg");
const questionSquare = require("bootstrap-icons/icons/question-square.svg");
const question = require("bootstrap-icons/icons/question.svg");
const replyAllFill = require("bootstrap-icons/icons/reply-all-fill.svg");
const replyAll = require("bootstrap-icons/icons/reply-all.svg");
const replyFill = require("bootstrap-icons/icons/reply-fill.svg");
const reply = require("bootstrap-icons/icons/reply.svg");
const screwdriver = require("bootstrap-icons/icons/screwdriver.svg");
const search = require("bootstrap-icons/icons/search.svg");
const shieldFill = require("bootstrap-icons/icons/shield-fill.svg");
const shieldLockFill = require("bootstrap-icons/icons/shield-lock-fill.svg");
const shieldLock = require("bootstrap-icons/icons/shield-lock.svg");
const shieldShaded = require("bootstrap-icons/icons/shield-shaded.svg");
const shield = require("bootstrap-icons/icons/shield.svg");
const shiftFill = require("bootstrap-icons/icons/shift-fill.svg");
const shift = require("bootstrap-icons/icons/shift.svg");
const skipBackwardFill = require("bootstrap-icons/icons/skip-backward-fill.svg");
const skipBackward = require("bootstrap-icons/icons/skip-backward.svg");
const skipEndFill = require("bootstrap-icons/icons/skip-end-fill.svg");
const skipEnd = require("bootstrap-icons/icons/skip-end.svg");
const skipForwardFill = require("bootstrap-icons/icons/skip-forward-fill.svg");
const skipForward = require("bootstrap-icons/icons/skip-forward.svg");
const skipStartFill = require("bootstrap-icons/icons/skip-start-fill.svg");
const skipStart = require("bootstrap-icons/icons/skip-start.svg");
const speaker = require("bootstrap-icons/icons/speaker.svg");
const squareFill = require("bootstrap-icons/icons/square-fill.svg");
const squareHalf = require("bootstrap-icons/icons/square-half.svg");
const square = require("bootstrap-icons/icons/square.svg");
const starFill = require("bootstrap-icons/icons/star-fill.svg");
const starHalf = require("bootstrap-icons/icons/star-half.svg");
const star = require("bootstrap-icons/icons/star.svg");
const stopFill = require("bootstrap-icons/icons/stop-fill.svg");
const stop = require("bootstrap-icons/icons/stop.svg");
const stopwatchFill = require("bootstrap-icons/icons/stopwatch-fill.svg");
const stopwatch = require("bootstrap-icons/icons/stopwatch.svg");
const sun = require("bootstrap-icons/icons/sun.svg");
const table = require("bootstrap-icons/icons/table.svg");
const tabletLandscape = require("bootstrap-icons/icons/tablet-landscape.svg");
const tablet = require("bootstrap-icons/icons/tablet.svg");
const tagFill = require("bootstrap-icons/icons/tag-fill.svg");
const tag = require("bootstrap-icons/icons/tag.svg");
const terminalFill = require("bootstrap-icons/icons/terminal-fill.svg");
const terminal = require("bootstrap-icons/icons/terminal.svg");
const textCenter = require("bootstrap-icons/icons/text-center.svg");
const textIndentLeft = require("bootstrap-icons/icons/text-indent-left.svg");
const textIndentRight = require("bootstrap-icons/icons/text-indent-right.svg");
const textLeft = require("bootstrap-icons/icons/text-left.svg");
const textRight = require("bootstrap-icons/icons/text-right.svg");
const threeDotsVertical = require("bootstrap-icons/icons/three-dots-vertical.svg");
const threeDots = require("bootstrap-icons/icons/three-dots.svg");
const toggleOff = require("bootstrap-icons/icons/toggle-off.svg");
const toggleOn = require("bootstrap-icons/icons/toggle-on.svg");
const toggles = require("bootstrap-icons/icons/toggles.svg");
const tools = require("bootstrap-icons/icons/tools.svg");
const trashFill = require("bootstrap-icons/icons/trash-fill.svg");
const trash = require("bootstrap-icons/icons/trash.svg");
const triangleFill = require("bootstrap-icons/icons/triangle-fill.svg");
const triangleHalf = require("bootstrap-icons/icons/triangle-half.svg");
const triangle = require("bootstrap-icons/icons/triangle.svg");
const trophy = require("bootstrap-icons/icons/trophy.svg");
const tvFill = require("bootstrap-icons/icons/tv-fill.svg");
const tv = require("bootstrap-icons/icons/tv.svg");
const typeBold = require("bootstrap-icons/icons/type-bold.svg");
const typeH1 = require("bootstrap-icons/icons/type-h1.svg");
const typeH2 = require("bootstrap-icons/icons/type-h2.svg");
const typeH3 = require("bootstrap-icons/icons/type-h3.svg");
const typeItalic = require("bootstrap-icons/icons/type-italic.svg");
const typeStrikethrough = require("bootstrap-icons/icons/type-strikethrough.svg");
const typeUnderline = require("bootstrap-icons/icons/type-underline.svg");
const type = require("bootstrap-icons/icons/type.svg");
const unlockFill = require("bootstrap-icons/icons/unlock-fill.svg");
const unlock = require("bootstrap-icons/icons/unlock.svg");
const upload = require("bootstrap-icons/icons/upload.svg");
const volumeDownFill = require("bootstrap-icons/icons/volume-down-fill.svg");
const volumeDown = require("bootstrap-icons/icons/volume-down.svg");
const volumeMuteFill = require("bootstrap-icons/icons/volume-mute-fill.svg");
const volumeMute = require("bootstrap-icons/icons/volume-mute.svg");
const volumeUpFill = require("bootstrap-icons/icons/volume-up-fill.svg");
const volumeUp = require("bootstrap-icons/icons/volume-up.svg");
const wallet = require("bootstrap-icons/icons/wallet.svg");
const watch = require("bootstrap-icons/icons/watch.svg");
const wifi = require("bootstrap-icons/icons/wifi.svg");
const window = require("bootstrap-icons/icons/window.svg");
const wrench = require("bootstrap-icons/icons/wrench.svg");
const xCircleFill = require("bootstrap-icons/icons/x-circle-fill.svg");
const xCircle = require("bootstrap-icons/icons/x-circle.svg");
const xOctagonFill = require("bootstrap-icons/icons/x-octagon-fill.svg");
const xOctagon = require("bootstrap-icons/icons/x-octagon.svg");
const xSquareFill = require("bootstrap-icons/icons/x-square-fill.svg");
const xSquare = require("bootstrap-icons/icons/x-square.svg");
const x = require("bootstrap-icons/icons/x.svg");

// Renders an icon by type
export const Icons = (iconType:number, height?:number, width?:number) => {
	// See which icon is selected
	switch(iconType) {
		// alarm-fill.svg
		case 1:
			return generateIcon(alarmFill, height, width);
		// alarm.svg
		case 2:
			return generateIcon(alarm, height, width);
		// alert-circle-fill.svg
		case 3:
			return generateIcon(alertCircleFill, height, width);
		// alert-circle.svg
		case 4:
			return generateIcon(alertCircle, height, width);
		// alert-octagon-fill.svg
		case 5:
			return generateIcon(alertOctagonFill, height, width);
		// alert-octagon.svg
		case 6:
			return generateIcon(alertOctagon, height, width);
		// alert-square-fill.svg
		case 7:
			return generateIcon(alertSquareFill, height, width);
		// alert-square.svg
		case 8:
			return generateIcon(alertSquare, height, width);
		// alert-triangle-fill.svg
		case 9:
			return generateIcon(alertTriangleFill, height, width);
		// alert-triangle.svg
		case 10:
			return generateIcon(alertTriangle, height, width);
		// archive-fill.svg
		case 11:
			return generateIcon(archiveFill, height, width);
		// archive.svg
		case 12:
			return generateIcon(archive, height, width);
		// arrow-bar-bottom.svg
		case 13:
			return generateIcon(arrowBarBottom, height, width);
		// arrow-bar-left.svg
		case 14:
			return generateIcon(arrowBarLeft, height, width);
		// arrow-bar-right.svg
		case 15:
			return generateIcon(arrowBarRight, height, width);
		// arrow-bar-up.svg
		case 16:
			return generateIcon(arrowBarUp, height, width);
		// arrow-clockwise.svg
		case 17:
			return generateIcon(arrowClockwise, height, width);
		// arrow-counterclockwise.svg
		case 18:
			return generateIcon(arrowCounterclockwise, height, width);
		// arrow-down-left.svg
		case 19:
			return generateIcon(arrowDownLeft, height, width);
		// arrow-down-right.svg
		case 20:
			return generateIcon(arrowDownRight, height, width);
		// arrow-down-short.svg
		case 21:
			return generateIcon(arrowDownShort, height, width);
		// arrow-down.svg
		case 22:
			return generateIcon(arrowDown, height, width);
		// arrow-left-right.svg
		case 23:
			return generateIcon(arrowLeftRight, height, width);
		// arrow-left-short.svg
		case 24:
			return generateIcon(arrowLeftShort, height, width);
		// arrow-left.svg
		case 25:
			return generateIcon(arrowLeft, height, width);
		// arrow-repeat.svg
		case 26:
			return generateIcon(arrowRepeat, height, width);
		// arrow-right-short.svg
		case 27:
			return generateIcon(arrowRightShort, height, width);
		// arrow-right.svg
		case 28:
			return generateIcon(arrowRight, height, width);
		// arrow-up-down.svg
		case 29:
			return generateIcon(arrowUpDown, height, width);
		// arrow-up-left.svg
		case 30:
			return generateIcon(arrowUpLeft, height, width);
		// arrow-up-right.svg
		case 31:
			return generateIcon(arrowUpRight, height, width);
		// arrow-up-short.svg
		case 32:
			return generateIcon(arrowUpShort, height, width);
		// arrow-up.svg
		case 33:
			return generateIcon(arrowUp, height, width);
		// arrows-angle-contract.svg
		case 34:
			return generateIcon(arrowsAngleContract, height, width);
		// arrows-angle-expand.svg
		case 35:
			return generateIcon(arrowsAngleExpand, height, width);
		// arrows-collapse.svg
		case 36:
			return generateIcon(arrowsCollapse, height, width);
		// arrows-expand.svg
		case 37:
			return generateIcon(arrowsExpand, height, width);
		// arrows-fullscreen.svg
		case 38:
			return generateIcon(arrowsFullscreen, height, width);
		// at.svg
		case 39:
			return generateIcon(at, height, width);
		// award.svg
		case 40:
			return generateIcon(award, height, width);
		// backspace-fill.svg
		case 41:
			return generateIcon(backspaceFill, height, width);
		// backspace-reverse-fill.svg
		case 42:
			return generateIcon(backspaceReverseFill, height, width);
		// backspace-reverse.svg
		case 43:
			return generateIcon(backspaceReverse, height, width);
		// backspace.svg
		case 44:
			return generateIcon(backspace, height, width);
		// bar-chart-fill.svg
		case 45:
			return generateIcon(barChartFill, height, width);
		// bar-chart.svg
		case 46:
			return generateIcon(barChart, height, width);
		// battery-charging.svg
		case 47:
			return generateIcon(batteryCharging, height, width);
		// battery-full.svg
		case 48:
			return generateIcon(batteryFull, height, width);
		// battery.svg
		case 49:
			return generateIcon(battery, height, width);
		// bell-fill.svg
		case 50:
			return generateIcon(bellFill, height, width);
		// bell.svg
		case 51:
			return generateIcon(bell, height, width);
		// blockquote-left.svg
		case 52:
			return generateIcon(blockquoteLeft, height, width);
		// blockquote-right.svg
		case 53:
			return generateIcon(blockquoteRight, height, width);
		// book-half-fill.svg
		case 54:
			return generateIcon(bookHalfFill, height, width);
		// book.svg
		case 55:
			return generateIcon(book, height, width);
		// bookmark-fill.svg
		case 56:
			return generateIcon(bookmarkFill, height, width);
		// bookmark.svg
		case 57:
			return generateIcon(bookmark, height, width);
		// bootstrap-fill.svg
		case 58:
			return generateIcon(bootstrapFill, height, width);
		// bootstrap-reboot.svg
		case 59:
			return generateIcon(bootstrapReboot, height, width);
		// bootstrap.svg
		case 60:
			return generateIcon(bootstrap, height, width);
		// box-arrow-bottom-left.svg
		case 61:
			return generateIcon(boxArrowBottomLeft, height, width);
		// box-arrow-bottom-right.svg
		case 62:
			return generateIcon(boxArrowBottomRight, height, width);
		// box-arrow-down.svg
		case 63:
			return generateIcon(boxArrowDown, height, width);
		// box-arrow-left.svg
		case 64:
			return generateIcon(boxArrowLeft, height, width);
		// box-arrow-right.svg
		case 65:
			return generateIcon(boxArrowRight, height, width);
		// box-arrow-up-left.svg
		case 66:
			return generateIcon(boxArrowUpLeft, height, width);
		// box-arrow-up-right.svg
		case 67:
			return generateIcon(boxArrowUpRight, height, width);
		// box-arrow-up.svg
		case 68:
			return generateIcon(boxArrowUp, height, width);
		// braces.svg
		case 69:
			return generateIcon(braces, height, width);
		// brightness-fill-high.svg
		case 70:
			return generateIcon(brightnessFillHigh, height, width);
		// brightness-fill-low.svg
		case 71:
			return generateIcon(brightnessFillLow, height, width);
		// brightness-high.svg
		case 72:
			return generateIcon(brightnessHigh, height, width);
		// brightness-low.svg
		case 73:
			return generateIcon(brightnessLow, height, width);
		// brush.svg
		case 74:
			return generateIcon(brush, height, width);
		// bucket-fill.svg
		case 75:
			return generateIcon(bucketFill, height, width);
		// bucket.svg
		case 76:
			return generateIcon(bucket, height, width);
		// building.svg
		case 77:
			return generateIcon(building, height, width);
		// bullseye.svg
		case 78:
			return generateIcon(bullseye, height, width);
		// calendar-fill.svg
		case 79:
			return generateIcon(calendarFill, height, width);
		// calendar.svg
		case 80:
			return generateIcon(calendar, height, width);
		// camera-video-fill.svg
		case 81:
			return generateIcon(cameraVideoFill, height, width);
		// camera-video.svg
		case 82:
			return generateIcon(cameraVideo, height, width);
		// camera.svg
		case 83:
			return generateIcon(camera, height, width);
		// capslock-fill.svg
		case 84:
			return generateIcon(capslockFill, height, width);
		// capslock.svg
		case 85:
			return generateIcon(capslock, height, width);
		// chat-fill.svg
		case 86:
			return generateIcon(chatFill, height, width);
		// chat.svg
		case 87:
			return generateIcon(chat, height, width);
		// check-box.svg
		case 88:
			return generateIcon(checkBox, height, width);
		// check-circle.svg
		case 89:
			return generateIcon(checkCircle, height, width);
		// check.svg
		case 90:
			return generateIcon(check, height, width);
		// chevron-compact-down.svg
		case 91:
			return generateIcon(chevronCompactDown, height, width);
		// chevron-compact-left.svg
		case 92:
			return generateIcon(chevronCompactLeft, height, width);
		// chevron-compact-right.svg
		case 93:
			return generateIcon(chevronCompactRight, height, width);
		// chevron-compact-up.svg
		case 94:
			return generateIcon(chevronCompactUp, height, width);
		// chevron-down.svg
		case 95:
			return generateIcon(chevronDown, height, width);
		// chevron-left.svg
		case 96:
			return generateIcon(chevronLeft, height, width);
		// chevron-right.svg
		case 97:
			return generateIcon(chevronRight, height, width);
		// chevron-up.svg
		case 98:
			return generateIcon(chevronUp, height, width);
		// circle-fill.svg
		case 99:
			return generateIcon(circleFill, height, width);
		// circle-half.svg
		case 100:
			return generateIcon(circleHalf, height, width);
		// circle-slash.svg
		case 101:
			return generateIcon(circleSlash, height, width);
		// circle.svg
		case 102:
			return generateIcon(circle, height, width);
		// clock-fill.svg
		case 103:
			return generateIcon(clockFill, height, width);
		// clock.svg
		case 104:
			return generateIcon(clock, height, width);
		// cloud-download.svg
		case 105:
			return generateIcon(cloudDownload, height, width);
		// cloud-fill.svg
		case 106:
			return generateIcon(cloudFill, height, width);
		// cloud-upload.svg
		case 107:
			return generateIcon(cloudUpload, height, width);
		// cloud.svg
		case 108:
			return generateIcon(cloud, height, width);
		// code-slash.svg
		case 109:
			return generateIcon(codeSlash, height, width);
		// code.svg
		case 110:
			return generateIcon(code, height, width);
		// columns-gutters.svg
		case 111:
			return generateIcon(columnsGutters, height, width);
		// columns.svg
		case 112:
			return generateIcon(columns, height, width);
		// command.svg
		case 113:
			return generateIcon(command, height, width);
		// compass.svg
		case 114:
			return generateIcon(compass, height, width);
		// cone-striped.svg
		case 115:
			return generateIcon(coneStriped, height, width);
		// cone.svg
		case 116:
			return generateIcon(cone, height, width);
		// controller.svg
		case 117:
			return generateIcon(controller, height, width);
		// credit-card.svg
		case 118:
			return generateIcon(creditCard, height, width);
		// cursor-fill.svg
		case 119:
			return generateIcon(cursorFill, height, width);
		// cursor.svg
		case 120:
			return generateIcon(cursor, height, width);
		// dash.svg
		case 121:
			return generateIcon(dash, height, width);
		// diamond-half.svg
		case 122:
			return generateIcon(diamondHalf, height, width);
		// diamond.svg
		case 123:
			return generateIcon(diamond, height, width);
		// display-fill.svg
		case 124:
			return generateIcon(displayFill, height, width);
		// display.svg
		case 125:
			return generateIcon(display, height, width);
		// document-code.svg
		case 126:
			return generateIcon(documentCode, height, width);
		// document-diff.svg
		case 127:
			return generateIcon(documentDiff, height, width);
		// document-richtext.svg
		case 128:
			return generateIcon(documentRichtext, height, width);
		// document-spreadsheet.svg
		case 129:
			return generateIcon(documentSpreadsheet, height, width);
		// document-text.svg
		case 130:
			return generateIcon(documentText, height, width);
		// document.svg
		case 131:
			return generateIcon(document, height, width);
		// documents-alt.svg
		case 132:
			return generateIcon(documentsAlt, height, width);
		// documents.svg
		case 133:
			return generateIcon(documents, height, width);
		// dot.svg
		case 134:
			return generateIcon(dot, height, width);
		// download.svg
		case 135:
			return generateIcon(download, height, width);
		// egg-fried.svg
		case 136:
			return generateIcon(eggFried, height, width);
		// eject-fill.svg
		case 137:
			return generateIcon(ejectFill, height, width);
		// eject.svg
		case 138:
			return generateIcon(eject, height, width);
		// envelope-fill.svg
		case 139:
			return generateIcon(envelopeFill, height, width);
		// envelope-open-fill.svg
		case 140:
			return generateIcon(envelopeOpenFill, height, width);
		// envelope-open.svg
		case 141:
			return generateIcon(envelopeOpen, height, width);
		// envelope.svg
		case 142:
			return generateIcon(envelope, height, width);
		// eye-fill.svg
		case 143:
			return generateIcon(eyeFill, height, width);
		// eye-slash-fill.svg
		case 144:
			return generateIcon(eyeSlashFill, height, width);
		// eye-slash.svg
		case 145:
			return generateIcon(eyeSlash, height, width);
		// eye.svg
		case 146:
			return generateIcon(eye, height, width);
		// filter.svg
		case 147:
			return generateIcon(filter, height, width);
		// flag-fill.svg
		case 148:
			return generateIcon(flagFill, height, width);
		// flag.svg
		case 149:
			return generateIcon(flag, height, width);
		// folder-fill.svg
		case 150:
			return generateIcon(folderFill, height, width);
		// folder-symlink-fill.svg
		case 151:
			return generateIcon(folderSymlinkFill, height, width);
		// folder-symlink.svg
		case 152:
			return generateIcon(folderSymlink, height, width);
		// folder.svg
		case 153:
			return generateIcon(folder, height, width);
		// fonts.svg
		case 154:
			return generateIcon(fonts, height, width);
		// forward-fill.svg
		case 155:
			return generateIcon(forwardFill, height, width);
		// forward.svg
		case 156:
			return generateIcon(forward, height, width);
		// gear-fill.svg
		case 157:
			return generateIcon(gearFill, height, width);
		// gear-wide-connected.svg
		case 158:
			return generateIcon(gearWideConnected, height, width);
		// gear-wide.svg
		case 159:
			return generateIcon(gearWide, height, width);
		// gear.svg
		case 160:
			return generateIcon(gear, height, width);
		// geo.svg
		case 161:
			return generateIcon(geo, height, width);
		// graph-down.svg
		case 162:
			return generateIcon(graphDown, height, width);
		// graph-up.svg
		case 163:
			return generateIcon(graphUp, height, width);
		// grid-fill.svg
		case 164:
			return generateIcon(gridFill, height, width);
		// grid.svg
		case 165:
			return generateIcon(grid, height, width);
		// hammer.svg
		case 166:
			return generateIcon(hammer, height, width);
		// hash.svg
		case 167:
			return generateIcon(hash, height, width);
		// heart-fill.svg
		case 168:
			return generateIcon(heartFill, height, width);
		// heart.svg
		case 169:
			return generateIcon(heart, height, width);
		// house-fill.svg
		case 170:
			return generateIcon(houseFill, height, width);
		// house.svg
		case 171:
			return generateIcon(house, height, width);
		// image-alt.svg
		case 172:
			return generateIcon(imageAlt, height, width);
		// image-fill.svg
		case 173:
			return generateIcon(imageFill, height, width);
		// image.svg
		case 174:
			return generateIcon(image, height, width);
		// images.svg
		case 175:
			return generateIcon(images, height, width);
		// inbox-fill.svg
		case 176:
			return generateIcon(inboxFill, height, width);
		// inbox.svg
		case 177:
			return generateIcon(inbox, height, width);
		// inboxes-fill.svg
		case 178:
			return generateIcon(inboxesFill, height, width);
		// inboxes.svg
		case 179:
			return generateIcon(inboxes, height, width);
		// info-fill.svg
		case 180:
			return generateIcon(infoFill, height, width);
		// info-square-fill.svg
		case 181:
			return generateIcon(infoSquareFill, height, width);
		// info-square.svg
		case 182:
			return generateIcon(infoSquare, height, width);
		// info.svg
		case 183:
			return generateIcon(info, height, width);
		// justify-left.svg
		case 184:
			return generateIcon(justifyLeft, height, width);
		// justify-right.svg
		case 185:
			return generateIcon(justifyRight, height, width);
		// justify.svg
		case 186:
			return generateIcon(justify, height, width);
		// kanban-fill.svg
		case 187:
			return generateIcon(kanbanFill, height, width);
		// kanban.svg
		case 188:
			return generateIcon(kanban, height, width);
		// laptop.svg
		case 189:
			return generateIcon(laptop, height, width);
		// layout-sidebar-reverse.svg
		case 190:
			return generateIcon(layoutSidebarReverse, height, width);
		// layout-sidebar.svg
		case 191:
			return generateIcon(layoutSidebar, height, width);
		// layout-split.svg
		case 192:
			return generateIcon(layoutSplit, height, width);
		// list-check.svg
		case 193:
			return generateIcon(listCheck, height, width);
		// list-ol.svg
		case 194:
			return generateIcon(listOl, height, width);
		// list-task.svg
		case 195:
			return generateIcon(listTask, height, width);
		// list-ul.svg
		case 196:
			return generateIcon(listUl, height, width);
		// list.svg
		case 197:
			return generateIcon(list, height, width);
		// lock-fill.svg
		case 198:
			return generateIcon(lockFill, height, width);
		// lock.svg
		case 199:
			return generateIcon(lock, height, width);
		// map.svg
		case 200:
			return generateIcon(map, height, width);
		// mic.svg
		case 201:
			return generateIcon(mic, height, width);
		// moon.svg
		case 202:
			return generateIcon(moon, height, width);
		// music-player-fill.svg
		case 203:
			return generateIcon(musicPlayerFill, height, width);
		// music-player.svg
		case 204:
			return generateIcon(musicPlayer, height, width);
		// option.svg
		case 205:
			return generateIcon(option, height, width);
		// outlet.svg
		case 206:
			return generateIcon(outlet, height, width);
		// pause-fill.svg
		case 207:
			return generateIcon(pauseFill, height, width);
		// pause.svg
		case 208:
			return generateIcon(pause, height, width);
		// pen.svg
		case 209:
			return generateIcon(pen, height, width);
		// pencil.svg
		case 210:
			return generateIcon(pencil, height, width);
		// people-fill.svg
		case 211:
			return generateIcon(peopleFill, height, width);
		// people.svg
		case 212:
			return generateIcon(people, height, width);
		// person-fill.svg
		case 213:
			return generateIcon(personFill, height, width);
		// person.svg
		case 214:
			return generateIcon(person, height, width);
		// phone-landscape.svg
		case 215:
			return generateIcon(phoneLandscape, height, width);
		// phone.svg
		case 216:
			return generateIcon(phone, height, width);
		// pie-chart-fill.svg
		case 217:
			return generateIcon(pieChartFill, height, width);
		// pie-chart.svg
		case 218:
			return generateIcon(pieChart, height, width);
		// play-fill.svg
		case 219:
			return generateIcon(playFill, height, width);
		// play.svg
		case 220:
			return generateIcon(play, height, width);
		// plug.svg
		case 221:
			return generateIcon(plug, height, width);
		// plus.svg
		case 222:
			return generateIcon(plus, height, width);
		// power.svg
		case 223:
			return generateIcon(power, height, width);
		// question-fill.svg
		case 224:
			return generateIcon(questionFill, height, width);
		// question-square-fill.svg
		case 225:
			return generateIcon(questionSquareFill, height, width);
		// question-square.svg
		case 226:
			return generateIcon(questionSquare, height, width);
		// question.svg
		case 227:
			return generateIcon(question, height, width);
		// reply-all-fill.svg
		case 228:
			return generateIcon(replyAllFill, height, width);
		// reply-all.svg
		case 229:
			return generateIcon(replyAll, height, width);
		// reply-fill.svg
		case 230:
			return generateIcon(replyFill, height, width);
		// reply.svg
		case 231:
			return generateIcon(reply, height, width);
		// screwdriver.svg
		case 232:
			return generateIcon(screwdriver, height, width);
		// search.svg
		case 233:
			return generateIcon(search, height, width);
		// shield-fill.svg
		case 234:
			return generateIcon(shieldFill, height, width);
		// shield-lock-fill.svg
		case 235:
			return generateIcon(shieldLockFill, height, width);
		// shield-lock.svg
		case 236:
			return generateIcon(shieldLock, height, width);
		// shield-shaded.svg
		case 237:
			return generateIcon(shieldShaded, height, width);
		// shield.svg
		case 238:
			return generateIcon(shield, height, width);
		// shift-fill.svg
		case 239:
			return generateIcon(shiftFill, height, width);
		// shift.svg
		case 240:
			return generateIcon(shift, height, width);
		// skip-backward-fill.svg
		case 241:
			return generateIcon(skipBackwardFill, height, width);
		// skip-backward.svg
		case 242:
			return generateIcon(skipBackward, height, width);
		// skip-end-fill.svg
		case 243:
			return generateIcon(skipEndFill, height, width);
		// skip-end.svg
		case 244:
			return generateIcon(skipEnd, height, width);
		// skip-forward-fill.svg
		case 245:
			return generateIcon(skipForwardFill, height, width);
		// skip-forward.svg
		case 246:
			return generateIcon(skipForward, height, width);
		// skip-start-fill.svg
		case 247:
			return generateIcon(skipStartFill, height, width);
		// skip-start.svg
		case 248:
			return generateIcon(skipStart, height, width);
		// speaker.svg
		case 249:
			return generateIcon(speaker, height, width);
		// square-fill.svg
		case 250:
			return generateIcon(squareFill, height, width);
		// square-half.svg
		case 251:
			return generateIcon(squareHalf, height, width);
		// square.svg
		case 252:
			return generateIcon(square, height, width);
		// star-fill.svg
		case 253:
			return generateIcon(starFill, height, width);
		// star-half.svg
		case 254:
			return generateIcon(starHalf, height, width);
		// star.svg
		case 255:
			return generateIcon(star, height, width);
		// stop-fill.svg
		case 256:
			return generateIcon(stopFill, height, width);
		// stop.svg
		case 257:
			return generateIcon(stop, height, width);
		// stopwatch-fill.svg
		case 258:
			return generateIcon(stopwatchFill, height, width);
		// stopwatch.svg
		case 259:
			return generateIcon(stopwatch, height, width);
		// sun.svg
		case 260:
			return generateIcon(sun, height, width);
		// table.svg
		case 261:
			return generateIcon(table, height, width);
		// tablet-landscape.svg
		case 262:
			return generateIcon(tabletLandscape, height, width);
		// tablet.svg
		case 263:
			return generateIcon(tablet, height, width);
		// tag-fill.svg
		case 264:
			return generateIcon(tagFill, height, width);
		// tag.svg
		case 265:
			return generateIcon(tag, height, width);
		// terminal-fill.svg
		case 266:
			return generateIcon(terminalFill, height, width);
		// terminal.svg
		case 267:
			return generateIcon(terminal, height, width);
		// text-center.svg
		case 268:
			return generateIcon(textCenter, height, width);
		// text-indent-left.svg
		case 269:
			return generateIcon(textIndentLeft, height, width);
		// text-indent-right.svg
		case 270:
			return generateIcon(textIndentRight, height, width);
		// text-left.svg
		case 271:
			return generateIcon(textLeft, height, width);
		// text-right.svg
		case 272:
			return generateIcon(textRight, height, width);
		// three-dots-vertical.svg
		case 273:
			return generateIcon(threeDotsVertical, height, width);
		// three-dots.svg
		case 274:
			return generateIcon(threeDots, height, width);
		// toggle-off.svg
		case 275:
			return generateIcon(toggleOff, height, width);
		// toggle-on.svg
		case 276:
			return generateIcon(toggleOn, height, width);
		// toggles.svg
		case 277:
			return generateIcon(toggles, height, width);
		// tools.svg
		case 278:
			return generateIcon(tools, height, width);
		// trash-fill.svg
		case 279:
			return generateIcon(trashFill, height, width);
		// trash.svg
		case 280:
			return generateIcon(trash, height, width);
		// triangle-fill.svg
		case 281:
			return generateIcon(triangleFill, height, width);
		// triangle-half.svg
		case 282:
			return generateIcon(triangleHalf, height, width);
		// triangle.svg
		case 283:
			return generateIcon(triangle, height, width);
		// trophy.svg
		case 284:
			return generateIcon(trophy, height, width);
		// tv-fill.svg
		case 285:
			return generateIcon(tvFill, height, width);
		// tv.svg
		case 286:
			return generateIcon(tv, height, width);
		// type-bold.svg
		case 287:
			return generateIcon(typeBold, height, width);
		// type-h1.svg
		case 288:
			return generateIcon(typeH1, height, width);
		// type-h2.svg
		case 289:
			return generateIcon(typeH2, height, width);
		// type-h3.svg
		case 290:
			return generateIcon(typeH3, height, width);
		// type-italic.svg
		case 291:
			return generateIcon(typeItalic, height, width);
		// type-strikethrough.svg
		case 292:
			return generateIcon(typeStrikethrough, height, width);
		// type-underline.svg
		case 293:
			return generateIcon(typeUnderline, height, width);
		// type.svg
		case 294:
			return generateIcon(type, height, width);
		// unlock-fill.svg
		case 295:
			return generateIcon(unlockFill, height, width);
		// unlock.svg
		case 296:
			return generateIcon(unlock, height, width);
		// upload.svg
		case 297:
			return generateIcon(upload, height, width);
		// volume-down-fill.svg
		case 298:
			return generateIcon(volumeDownFill, height, width);
		// volume-down.svg
		case 299:
			return generateIcon(volumeDown, height, width);
		// volume-mute-fill.svg
		case 300:
			return generateIcon(volumeMuteFill, height, width);
		// volume-mute.svg
		case 301:
			return generateIcon(volumeMute, height, width);
		// volume-up-fill.svg
		case 302:
			return generateIcon(volumeUpFill, height, width);
		// volume-up.svg
		case 303:
			return generateIcon(volumeUp, height, width);
		// wallet.svg
		case 304:
			return generateIcon(wallet, height, width);
		// watch.svg
		case 305:
			return generateIcon(watch, height, width);
		// wifi.svg
		case 306:
			return generateIcon(wifi, height, width);
		// window.svg
		case 307:
			return generateIcon(window, height, width);
		// wrench.svg
		case 308:
			return generateIcon(wrench, height, width);
		// x-circle-fill.svg
		case 309:
			return generateIcon(xCircleFill, height, width);
		// x-circle.svg
		case 310:
			return generateIcon(xCircle, height, width);
		// x-octagon-fill.svg
		case 311:
			return generateIcon(xOctagonFill, height, width);
		// x-octagon.svg
		case 312:
			return generateIcon(xOctagon, height, width);
		// x-square-fill.svg
		case 313:
			return generateIcon(xSquareFill, height, width);
		// x-square.svg
		case 314:
			return generateIcon(xSquare, height, width);
		// x.svg
		case 315:
			return generateIcon(x, height, width);
	}
}