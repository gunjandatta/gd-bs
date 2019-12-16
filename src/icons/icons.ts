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

// Icon components
export const AlarmFill = (height,width) => { return generateIcon(alarmFill, height, width); }
export const Alarm = (height,width) => { return generateIcon(alarm, height, width); }
export const AlertCircleFill = (height,width) => { return generateIcon(alertCircleFill, height, width); }
export const AlertCircle = (height,width) => { return generateIcon(alertCircle, height, width); }
export const AlertOctagonFill = (height,width) => { return generateIcon(alertOctagonFill, height, width); }
export const AlertOctagon = (height,width) => { return generateIcon(alertOctagon, height, width); }
export const AlertSquareFill = (height,width) => { return generateIcon(alertSquareFill, height, width); }
export const AlertSquare = (height,width) => { return generateIcon(alertSquare, height, width); }
export const AlertTriangleFill = (height,width) => { return generateIcon(alertTriangleFill, height, width); }
export const AlertTriangle = (height,width) => { return generateIcon(alertTriangle, height, width); }
export const ArchiveFill = (height,width) => { return generateIcon(archiveFill, height, width); }
export const Archive = (height,width) => { return generateIcon(archive, height, width); }
export const ArrowBarBottom = (height,width) => { return generateIcon(arrowBarBottom, height, width); }
export const ArrowBarLeft = (height,width) => { return generateIcon(arrowBarLeft, height, width); }
export const ArrowBarRight = (height,width) => { return generateIcon(arrowBarRight, height, width); }
export const ArrowBarUp = (height,width) => { return generateIcon(arrowBarUp, height, width); }
export const ArrowClockwise = (height,width) => { return generateIcon(arrowClockwise, height, width); }
export const ArrowCounterclockwise = (height,width) => { return generateIcon(arrowCounterclockwise, height, width); }
export const ArrowDownLeft = (height,width) => { return generateIcon(arrowDownLeft, height, width); }
export const ArrowDownRight = (height,width) => { return generateIcon(arrowDownRight, height, width); }
export const ArrowDownShort = (height,width) => { return generateIcon(arrowDownShort, height, width); }
export const ArrowDown = (height,width) => { return generateIcon(arrowDown, height, width); }
export const ArrowLeftRight = (height,width) => { return generateIcon(arrowLeftRight, height, width); }
export const ArrowLeftShort = (height,width) => { return generateIcon(arrowLeftShort, height, width); }
export const ArrowLeft = (height,width) => { return generateIcon(arrowLeft, height, width); }
export const ArrowRepeat = (height,width) => { return generateIcon(arrowRepeat, height, width); }
export const ArrowRightShort = (height,width) => { return generateIcon(arrowRightShort, height, width); }
export const ArrowRight = (height,width) => { return generateIcon(arrowRight, height, width); }
export const ArrowUpDown = (height,width) => { return generateIcon(arrowUpDown, height, width); }
export const ArrowUpLeft = (height,width) => { return generateIcon(arrowUpLeft, height, width); }
export const ArrowUpRight = (height,width) => { return generateIcon(arrowUpRight, height, width); }
export const ArrowUpShort = (height,width) => { return generateIcon(arrowUpShort, height, width); }
export const ArrowUp = (height,width) => { return generateIcon(arrowUp, height, width); }
export const ArrowsAngleContract = (height,width) => { return generateIcon(arrowsAngleContract, height, width); }
export const ArrowsAngleExpand = (height,width) => { return generateIcon(arrowsAngleExpand, height, width); }
export const ArrowsCollapse = (height,width) => { return generateIcon(arrowsCollapse, height, width); }
export const ArrowsExpand = (height,width) => { return generateIcon(arrowsExpand, height, width); }
export const ArrowsFullscreen = (height,width) => { return generateIcon(arrowsFullscreen, height, width); }
export const At = (height,width) => { return generateIcon(at, height, width); }
export const Award = (height,width) => { return generateIcon(award, height, width); }
export const BackspaceFill = (height,width) => { return generateIcon(backspaceFill, height, width); }
export const BackspaceReverseFill = (height,width) => { return generateIcon(backspaceReverseFill, height, width); }
export const BackspaceReverse = (height,width) => { return generateIcon(backspaceReverse, height, width); }
export const Backspace = (height,width) => { return generateIcon(backspace, height, width); }
export const BarChartFill = (height,width) => { return generateIcon(barChartFill, height, width); }
export const BarChart = (height,width) => { return generateIcon(barChart, height, width); }
export const BatteryCharging = (height,width) => { return generateIcon(batteryCharging, height, width); }
export const BatteryFull = (height,width) => { return generateIcon(batteryFull, height, width); }
export const Battery = (height,width) => { return generateIcon(battery, height, width); }
export const BellFill = (height,width) => { return generateIcon(bellFill, height, width); }
export const Bell = (height,width) => { return generateIcon(bell, height, width); }
export const BlockquoteLeft = (height,width) => { return generateIcon(blockquoteLeft, height, width); }
export const BlockquoteRight = (height,width) => { return generateIcon(blockquoteRight, height, width); }
export const BookHalfFill = (height,width) => { return generateIcon(bookHalfFill, height, width); }
export const Book = (height,width) => { return generateIcon(book, height, width); }
export const BookmarkFill = (height,width) => { return generateIcon(bookmarkFill, height, width); }
export const Bookmark = (height,width) => { return generateIcon(bookmark, height, width); }
export const BootstrapFill = (height,width) => { return generateIcon(bootstrapFill, height, width); }
export const BootstrapReboot = (height,width) => { return generateIcon(bootstrapReboot, height, width); }
export const Bootstrap = (height,width) => { return generateIcon(bootstrap, height, width); }
export const BoxArrowBottomLeft = (height,width) => { return generateIcon(boxArrowBottomLeft, height, width); }
export const BoxArrowBottomRight = (height,width) => { return generateIcon(boxArrowBottomRight, height, width); }
export const BoxArrowDown = (height,width) => { return generateIcon(boxArrowDown, height, width); }
export const BoxArrowLeft = (height,width) => { return generateIcon(boxArrowLeft, height, width); }
export const BoxArrowRight = (height,width) => { return generateIcon(boxArrowRight, height, width); }
export const BoxArrowUpLeft = (height,width) => { return generateIcon(boxArrowUpLeft, height, width); }
export const BoxArrowUpRight = (height,width) => { return generateIcon(boxArrowUpRight, height, width); }
export const BoxArrowUp = (height,width) => { return generateIcon(boxArrowUp, height, width); }
export const Braces = (height,width) => { return generateIcon(braces, height, width); }
export const BrightnessFillHigh = (height,width) => { return generateIcon(brightnessFillHigh, height, width); }
export const BrightnessFillLow = (height,width) => { return generateIcon(brightnessFillLow, height, width); }
export const BrightnessHigh = (height,width) => { return generateIcon(brightnessHigh, height, width); }
export const BrightnessLow = (height,width) => { return generateIcon(brightnessLow, height, width); }
export const Brush = (height,width) => { return generateIcon(brush, height, width); }
export const BucketFill = (height,width) => { return generateIcon(bucketFill, height, width); }
export const Bucket = (height,width) => { return generateIcon(bucket, height, width); }
export const Building = (height,width) => { return generateIcon(building, height, width); }
export const Bullseye = (height,width) => { return generateIcon(bullseye, height, width); }
export const CalendarFill = (height,width) => { return generateIcon(calendarFill, height, width); }
export const Calendar = (height,width) => { return generateIcon(calendar, height, width); }
export const CameraVideoFill = (height,width) => { return generateIcon(cameraVideoFill, height, width); }
export const CameraVideo = (height,width) => { return generateIcon(cameraVideo, height, width); }
export const Camera = (height,width) => { return generateIcon(camera, height, width); }
export const CapslockFill = (height,width) => { return generateIcon(capslockFill, height, width); }
export const Capslock = (height,width) => { return generateIcon(capslock, height, width); }
export const ChatFill = (height,width) => { return generateIcon(chatFill, height, width); }
export const Chat = (height,width) => { return generateIcon(chat, height, width); }
export const CheckBox = (height,width) => { return generateIcon(checkBox, height, width); }
export const CheckCircle = (height,width) => { return generateIcon(checkCircle, height, width); }
export const Check = (height,width) => { return generateIcon(check, height, width); }
export const ChevronCompactDown = (height,width) => { return generateIcon(chevronCompactDown, height, width); }
export const ChevronCompactLeft = (height,width) => { return generateIcon(chevronCompactLeft, height, width); }
export const ChevronCompactRight = (height,width) => { return generateIcon(chevronCompactRight, height, width); }
export const ChevronCompactUp = (height,width) => { return generateIcon(chevronCompactUp, height, width); }
export const ChevronDown = (height,width) => { return generateIcon(chevronDown, height, width); }
export const ChevronLeft = (height,width) => { return generateIcon(chevronLeft, height, width); }
export const ChevronRight = (height,width) => { return generateIcon(chevronRight, height, width); }
export const ChevronUp = (height,width) => { return generateIcon(chevronUp, height, width); }
export const CircleFill = (height,width) => { return generateIcon(circleFill, height, width); }
export const CircleHalf = (height,width) => { return generateIcon(circleHalf, height, width); }
export const CircleSlash = (height,width) => { return generateIcon(circleSlash, height, width); }
export const Circle = (height,width) => { return generateIcon(circle, height, width); }
export const ClockFill = (height,width) => { return generateIcon(clockFill, height, width); }
export const Clock = (height,width) => { return generateIcon(clock, height, width); }
export const CloudDownload = (height,width) => { return generateIcon(cloudDownload, height, width); }
export const CloudFill = (height,width) => { return generateIcon(cloudFill, height, width); }
export const CloudUpload = (height,width) => { return generateIcon(cloudUpload, height, width); }
export const Cloud = (height,width) => { return generateIcon(cloud, height, width); }
export const CodeSlash = (height,width) => { return generateIcon(codeSlash, height, width); }
export const Code = (height,width) => { return generateIcon(code, height, width); }
export const ColumnsGutters = (height,width) => { return generateIcon(columnsGutters, height, width); }
export const Columns = (height,width) => { return generateIcon(columns, height, width); }
export const Command = (height,width) => { return generateIcon(command, height, width); }
export const Compass = (height,width) => { return generateIcon(compass, height, width); }
export const ConeStriped = (height,width) => { return generateIcon(coneStriped, height, width); }
export const Cone = (height,width) => { return generateIcon(cone, height, width); }
export const Controller = (height,width) => { return generateIcon(controller, height, width); }
export const CreditCard = (height,width) => { return generateIcon(creditCard, height, width); }
export const CursorFill = (height,width) => { return generateIcon(cursorFill, height, width); }
export const Cursor = (height,width) => { return generateIcon(cursor, height, width); }
export const Dash = (height,width) => { return generateIcon(dash, height, width); }
export const DiamondHalf = (height,width) => { return generateIcon(diamondHalf, height, width); }
export const Diamond = (height,width) => { return generateIcon(diamond, height, width); }
export const DisplayFill = (height,width) => { return generateIcon(displayFill, height, width); }
export const Display = (height,width) => { return generateIcon(display, height, width); }
export const DocumentCode = (height,width) => { return generateIcon(documentCode, height, width); }
export const DocumentDiff = (height,width) => { return generateIcon(documentDiff, height, width); }
export const DocumentRichtext = (height,width) => { return generateIcon(documentRichtext, height, width); }
export const DocumentSpreadsheet = (height,width) => { return generateIcon(documentSpreadsheet, height, width); }
export const DocumentText = (height,width) => { return generateIcon(documentText, height, width); }
export const Document = (height,width) => { return generateIcon(document, height, width); }
export const DocumentsAlt = (height,width) => { return generateIcon(documentsAlt, height, width); }
export const Documents = (height,width) => { return generateIcon(documents, height, width); }
export const Dot = (height,width) => { return generateIcon(dot, height, width); }
export const Download = (height,width) => { return generateIcon(download, height, width); }
export const EggFried = (height,width) => { return generateIcon(eggFried, height, width); }
export const EjectFill = (height,width) => { return generateIcon(ejectFill, height, width); }
export const Eject = (height,width) => { return generateIcon(eject, height, width); }
export const EnvelopeFill = (height,width) => { return generateIcon(envelopeFill, height, width); }
export const EnvelopeOpenFill = (height,width) => { return generateIcon(envelopeOpenFill, height, width); }
export const EnvelopeOpen = (height,width) => { return generateIcon(envelopeOpen, height, width); }
export const Envelope = (height,width) => { return generateIcon(envelope, height, width); }
export const EyeFill = (height,width) => { return generateIcon(eyeFill, height, width); }
export const EyeSlashFill = (height,width) => { return generateIcon(eyeSlashFill, height, width); }
export const EyeSlash = (height,width) => { return generateIcon(eyeSlash, height, width); }
export const Eye = (height,width) => { return generateIcon(eye, height, width); }
export const Filter = (height,width) => { return generateIcon(filter, height, width); }
export const FlagFill = (height,width) => { return generateIcon(flagFill, height, width); }
export const Flag = (height,width) => { return generateIcon(flag, height, width); }
export const FolderFill = (height,width) => { return generateIcon(folderFill, height, width); }
export const FolderSymlinkFill = (height,width) => { return generateIcon(folderSymlinkFill, height, width); }
export const FolderSymlink = (height,width) => { return generateIcon(folderSymlink, height, width); }
export const Folder = (height,width) => { return generateIcon(folder, height, width); }
export const Fonts = (height,width) => { return generateIcon(fonts, height, width); }
export const ForwardFill = (height,width) => { return generateIcon(forwardFill, height, width); }
export const Forward = (height,width) => { return generateIcon(forward, height, width); }
export const GearFill = (height,width) => { return generateIcon(gearFill, height, width); }
export const GearWideConnected = (height,width) => { return generateIcon(gearWideConnected, height, width); }
export const GearWide = (height,width) => { return generateIcon(gearWide, height, width); }
export const Gear = (height,width) => { return generateIcon(gear, height, width); }
export const Geo = (height,width) => { return generateIcon(geo, height, width); }
export const GraphDown = (height,width) => { return generateIcon(graphDown, height, width); }
export const GraphUp = (height,width) => { return generateIcon(graphUp, height, width); }
export const GridFill = (height,width) => { return generateIcon(gridFill, height, width); }
export const Grid = (height,width) => { return generateIcon(grid, height, width); }
export const Hammer = (height,width) => { return generateIcon(hammer, height, width); }
export const Hash = (height,width) => { return generateIcon(hash, height, width); }
export const HeartFill = (height,width) => { return generateIcon(heartFill, height, width); }
export const Heart = (height,width) => { return generateIcon(heart, height, width); }
export const HouseFill = (height,width) => { return generateIcon(houseFill, height, width); }
export const House = (height,width) => { return generateIcon(house, height, width); }
export const ImageAlt = (height,width) => { return generateIcon(imageAlt, height, width); }
export const ImageFill = (height,width) => { return generateIcon(imageFill, height, width); }
export const Image = (height,width) => { return generateIcon(image, height, width); }
export const Images = (height,width) => { return generateIcon(images, height, width); }
export const InboxFill = (height,width) => { return generateIcon(inboxFill, height, width); }
export const Inbox = (height,width) => { return generateIcon(inbox, height, width); }
export const InboxesFill = (height,width) => { return generateIcon(inboxesFill, height, width); }
export const Inboxes = (height,width) => { return generateIcon(inboxes, height, width); }
export const InfoFill = (height,width) => { return generateIcon(infoFill, height, width); }
export const InfoSquareFill = (height,width) => { return generateIcon(infoSquareFill, height, width); }
export const InfoSquare = (height,width) => { return generateIcon(infoSquare, height, width); }
export const Info = (height,width) => { return generateIcon(info, height, width); }
export const JustifyLeft = (height,width) => { return generateIcon(justifyLeft, height, width); }
export const JustifyRight = (height,width) => { return generateIcon(justifyRight, height, width); }
export const Justify = (height,width) => { return generateIcon(justify, height, width); }
export const KanbanFill = (height,width) => { return generateIcon(kanbanFill, height, width); }
export const Kanban = (height,width) => { return generateIcon(kanban, height, width); }
export const Laptop = (height,width) => { return generateIcon(laptop, height, width); }
export const LayoutSidebarReverse = (height,width) => { return generateIcon(layoutSidebarReverse, height, width); }
export const LayoutSidebar = (height,width) => { return generateIcon(layoutSidebar, height, width); }
export const LayoutSplit = (height,width) => { return generateIcon(layoutSplit, height, width); }
export const ListCheck = (height,width) => { return generateIcon(listCheck, height, width); }
export const ListOl = (height,width) => { return generateIcon(listOl, height, width); }
export const ListTask = (height,width) => { return generateIcon(listTask, height, width); }
export const ListUl = (height,width) => { return generateIcon(listUl, height, width); }
export const List = (height,width) => { return generateIcon(list, height, width); }
export const LockFill = (height,width) => { return generateIcon(lockFill, height, width); }
export const Lock = (height,width) => { return generateIcon(lock, height, width); }
export const Map = (height,width) => { return generateIcon(map, height, width); }
export const Mic = (height,width) => { return generateIcon(mic, height, width); }
export const Moon = (height,width) => { return generateIcon(moon, height, width); }
export const MusicPlayerFill = (height,width) => { return generateIcon(musicPlayerFill, height, width); }
export const MusicPlayer = (height,width) => { return generateIcon(musicPlayer, height, width); }
export const Option = (height,width) => { return generateIcon(option, height, width); }
export const Outlet = (height,width) => { return generateIcon(outlet, height, width); }
export const PauseFill = (height,width) => { return generateIcon(pauseFill, height, width); }
export const Pause = (height,width) => { return generateIcon(pause, height, width); }
export const Pen = (height,width) => { return generateIcon(pen, height, width); }
export const Pencil = (height,width) => { return generateIcon(pencil, height, width); }
export const PeopleFill = (height,width) => { return generateIcon(peopleFill, height, width); }
export const People = (height,width) => { return generateIcon(people, height, width); }
export const PersonFill = (height,width) => { return generateIcon(personFill, height, width); }
export const Person = (height,width) => { return generateIcon(person, height, width); }
export const PhoneLandscape = (height,width) => { return generateIcon(phoneLandscape, height, width); }
export const Phone = (height,width) => { return generateIcon(phone, height, width); }
export const PieChartFill = (height,width) => { return generateIcon(pieChartFill, height, width); }
export const PieChart = (height,width) => { return generateIcon(pieChart, height, width); }
export const PlayFill = (height,width) => { return generateIcon(playFill, height, width); }
export const Play = (height,width) => { return generateIcon(play, height, width); }
export const Plug = (height,width) => { return generateIcon(plug, height, width); }
export const Plus = (height,width) => { return generateIcon(plus, height, width); }
export const Power = (height,width) => { return generateIcon(power, height, width); }
export const QuestionFill = (height,width) => { return generateIcon(questionFill, height, width); }
export const QuestionSquareFill = (height,width) => { return generateIcon(questionSquareFill, height, width); }
export const QuestionSquare = (height,width) => { return generateIcon(questionSquare, height, width); }
export const Question = (height,width) => { return generateIcon(question, height, width); }
export const ReplyAllFill = (height,width) => { return generateIcon(replyAllFill, height, width); }
export const ReplyAll = (height,width) => { return generateIcon(replyAll, height, width); }
export const ReplyFill = (height,width) => { return generateIcon(replyFill, height, width); }
export const Reply = (height,width) => { return generateIcon(reply, height, width); }
export const Screwdriver = (height,width) => { return generateIcon(screwdriver, height, width); }
export const Search = (height,width) => { return generateIcon(search, height, width); }
export const ShieldFill = (height,width) => { return generateIcon(shieldFill, height, width); }
export const ShieldLockFill = (height,width) => { return generateIcon(shieldLockFill, height, width); }
export const ShieldLock = (height,width) => { return generateIcon(shieldLock, height, width); }
export const ShieldShaded = (height,width) => { return generateIcon(shieldShaded, height, width); }
export const Shield = (height,width) => { return generateIcon(shield, height, width); }
export const ShiftFill = (height,width) => { return generateIcon(shiftFill, height, width); }
export const Shift = (height,width) => { return generateIcon(shift, height, width); }
export const SkipBackwardFill = (height,width) => { return generateIcon(skipBackwardFill, height, width); }
export const SkipBackward = (height,width) => { return generateIcon(skipBackward, height, width); }
export const SkipEndFill = (height,width) => { return generateIcon(skipEndFill, height, width); }
export const SkipEnd = (height,width) => { return generateIcon(skipEnd, height, width); }
export const SkipForwardFill = (height,width) => { return generateIcon(skipForwardFill, height, width); }
export const SkipForward = (height,width) => { return generateIcon(skipForward, height, width); }
export const SkipStartFill = (height,width) => { return generateIcon(skipStartFill, height, width); }
export const SkipStart = (height,width) => { return generateIcon(skipStart, height, width); }
export const Speaker = (height,width) => { return generateIcon(speaker, height, width); }
export const SquareFill = (height,width) => { return generateIcon(squareFill, height, width); }
export const SquareHalf = (height,width) => { return generateIcon(squareHalf, height, width); }
export const Square = (height,width) => { return generateIcon(square, height, width); }
export const StarFill = (height,width) => { return generateIcon(starFill, height, width); }
export const StarHalf = (height,width) => { return generateIcon(starHalf, height, width); }
export const Star = (height,width) => { return generateIcon(star, height, width); }
export const StopFill = (height,width) => { return generateIcon(stopFill, height, width); }
export const Stop = (height,width) => { return generateIcon(stop, height, width); }
export const StopwatchFill = (height,width) => { return generateIcon(stopwatchFill, height, width); }
export const Stopwatch = (height,width) => { return generateIcon(stopwatch, height, width); }
export const Sun = (height,width) => { return generateIcon(sun, height, width); }
export const Table = (height,width) => { return generateIcon(table, height, width); }
export const TabletLandscape = (height,width) => { return generateIcon(tabletLandscape, height, width); }
export const Tablet = (height,width) => { return generateIcon(tablet, height, width); }
export const TagFill = (height,width) => { return generateIcon(tagFill, height, width); }
export const Tag = (height,width) => { return generateIcon(tag, height, width); }
export const TerminalFill = (height,width) => { return generateIcon(terminalFill, height, width); }
export const Terminal = (height,width) => { return generateIcon(terminal, height, width); }
export const TextCenter = (height,width) => { return generateIcon(textCenter, height, width); }
export const TextIndentLeft = (height,width) => { return generateIcon(textIndentLeft, height, width); }
export const TextIndentRight = (height,width) => { return generateIcon(textIndentRight, height, width); }
export const TextLeft = (height,width) => { return generateIcon(textLeft, height, width); }
export const TextRight = (height,width) => { return generateIcon(textRight, height, width); }
export const ThreeDotsVertical = (height,width) => { return generateIcon(threeDotsVertical, height, width); }
export const ThreeDots = (height,width) => { return generateIcon(threeDots, height, width); }
export const ToggleOff = (height,width) => { return generateIcon(toggleOff, height, width); }
export const ToggleOn = (height,width) => { return generateIcon(toggleOn, height, width); }
export const Toggles = (height,width) => { return generateIcon(toggles, height, width); }
export const Tools = (height,width) => { return generateIcon(tools, height, width); }
export const TrashFill = (height,width) => { return generateIcon(trashFill, height, width); }
export const Trash = (height,width) => { return generateIcon(trash, height, width); }
export const TriangleFill = (height,width) => { return generateIcon(triangleFill, height, width); }
export const TriangleHalf = (height,width) => { return generateIcon(triangleHalf, height, width); }
export const Triangle = (height,width) => { return generateIcon(triangle, height, width); }
export const Trophy = (height,width) => { return generateIcon(trophy, height, width); }
export const TvFill = (height,width) => { return generateIcon(tvFill, height, width); }
export const Tv = (height,width) => { return generateIcon(tv, height, width); }
export const TypeBold = (height,width) => { return generateIcon(typeBold, height, width); }
export const TypeH1 = (height,width) => { return generateIcon(typeH1, height, width); }
export const TypeH2 = (height,width) => { return generateIcon(typeH2, height, width); }
export const TypeH3 = (height,width) => { return generateIcon(typeH3, height, width); }
export const TypeItalic = (height,width) => { return generateIcon(typeItalic, height, width); }
export const TypeStrikethrough = (height,width) => { return generateIcon(typeStrikethrough, height, width); }
export const TypeUnderline = (height,width) => { return generateIcon(typeUnderline, height, width); }
export const Type = (height,width) => { return generateIcon(type, height, width); }
export const UnlockFill = (height,width) => { return generateIcon(unlockFill, height, width); }
export const Unlock = (height,width) => { return generateIcon(unlock, height, width); }
export const Upload = (height,width) => { return generateIcon(upload, height, width); }
export const VolumeDownFill = (height,width) => { return generateIcon(volumeDownFill, height, width); }
export const VolumeDown = (height,width) => { return generateIcon(volumeDown, height, width); }
export const VolumeMuteFill = (height,width) => { return generateIcon(volumeMuteFill, height, width); }
export const VolumeMute = (height,width) => { return generateIcon(volumeMute, height, width); }
export const VolumeUpFill = (height,width) => { return generateIcon(volumeUpFill, height, width); }
export const VolumeUp = (height,width) => { return generateIcon(volumeUp, height, width); }
export const Wallet = (height,width) => { return generateIcon(wallet, height, width); }
export const Watch = (height,width) => { return generateIcon(watch, height, width); }
export const Wifi = (height,width) => { return generateIcon(wifi, height, width); }
export const Window = (height,width) => { return generateIcon(window, height, width); }
export const Wrench = (height,width) => { return generateIcon(wrench, height, width); }
export const XCircleFill = (height,width) => { return generateIcon(xCircleFill, height, width); }
export const XCircle = (height,width) => { return generateIcon(xCircle, height, width); }
export const XOctagonFill = (height,width) => { return generateIcon(xOctagonFill, height, width); }
export const XOctagon = (height,width) => { return generateIcon(xOctagon, height, width); }
export const XSquareFill = (height,width) => { return generateIcon(xSquareFill, height, width); }
export const XSquare = (height,width) => { return generateIcon(xSquare, height, width); }
export const X = (height,width) => { return generateIcon(x, height, width); }