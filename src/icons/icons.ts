import generateIcon from "./generate";

// Icons to import
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
const arrowClockwise = require("bootstrap-icons/icons/arrow-clockwise.svg");
const arrowCounterclockwise = require("bootstrap-icons/icons/arrow-counterclockwise.svg");
const arrowDownLeft = require("bootstrap-icons/icons/arrow-down-left.svg");
const arrowDownRight = require("bootstrap-icons/icons/arrow-down-right.svg");
const arrowDown = require("bootstrap-icons/icons/arrow-down.svg");
const arrowLeftRight = require("bootstrap-icons/icons/arrow-left-right.svg");
const arrowLeft = require("bootstrap-icons/icons/arrow-left.svg");
const arrowRepeat = require("bootstrap-icons/icons/arrow-repeat.svg");
const arrowRight = require("bootstrap-icons/icons/arrow-right.svg");
const arrowUpDown = require("bootstrap-icons/icons/arrow-up-down.svg");
const arrowUpLeft = require("bootstrap-icons/icons/arrow-up-left.svg");
const arrowUpRight = require("bootstrap-icons/icons/arrow-up-right.svg");
const arrowUp = require("bootstrap-icons/icons/arrow-up.svg");
const arrowsContract = require("bootstrap-icons/icons/arrows-contract.svg");
const arrowsExpand = require("bootstrap-icons/icons/arrows-expand.svg");
const arrowsFullscreen = require("bootstrap-icons/icons/arrows-fullscreen.svg");
const at = require("bootstrap-icons/icons/at.svg");
const barChartFill = require("bootstrap-icons/icons/bar-chart-fill.svg");
const barChart = require("bootstrap-icons/icons/bar-chart.svg");
const batteryFull = require("bootstrap-icons/icons/battery-full.svg");
const battery = require("bootstrap-icons/icons/battery.svg");
const bellFill = require("bootstrap-icons/icons/bell-fill.svg");
const bell = require("bootstrap-icons/icons/bell.svg");
const blockquoteLeft = require("bootstrap-icons/icons/blockquote-left.svg");
const blockquoteRight = require("bootstrap-icons/icons/blockquote-right.svg");
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
const brightnessFillHigh = require("bootstrap-icons/icons/brightness-fill-high.svg");
const brightnessFillLow = require("bootstrap-icons/icons/brightness-fill-low.svg");
const brightnessHigh = require("bootstrap-icons/icons/brightness-high.svg");
const brightnessLow = require("bootstrap-icons/icons/brightness-low.svg");
const bullseye = require("bootstrap-icons/icons/bullseye.svg");
const calendar = require("bootstrap-icons/icons/calendar.svg");
const cameraVideoFill = require("bootstrap-icons/icons/camera-video-fill.svg");
const cameraVideo = require("bootstrap-icons/icons/camera-video.svg");
const camera = require("bootstrap-icons/icons/camera.svg");
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
const circleSlash = require("bootstrap-icons/icons/circle-slash.svg");
const circle = require("bootstrap-icons/icons/circle.svg");
const clockFill = require("bootstrap-icons/icons/clock-fill.svg");
const clock = require("bootstrap-icons/icons/clock.svg");
const cloudFill = require("bootstrap-icons/icons/cloud-fill.svg");
const cloud = require("bootstrap-icons/icons/cloud.svg");
const codeSlash = require("bootstrap-icons/icons/code-slash.svg");
const code = require("bootstrap-icons/icons/code.svg");
const command = require("bootstrap-icons/icons/command.svg");
const compass = require("bootstrap-icons/icons/compass.svg");
const creditCard = require("bootstrap-icons/icons/credit-card.svg");
const cursorFill = require("bootstrap-icons/icons/cursor-fill.svg");
const cursor = require("bootstrap-icons/icons/cursor.svg");
const dash = require("bootstrap-icons/icons/dash.svg");
const display = require("bootstrap-icons/icons/display.svg");
const documentCode = require("bootstrap-icons/icons/document-code.svg");
const documentDiff = require("bootstrap-icons/icons/document-diff.svg");
const documentRichtext = require("bootstrap-icons/icons/document-richtext.svg");
const documentText = require("bootstrap-icons/icons/document-text.svg");
const document = require("bootstrap-icons/icons/document.svg");
const documentsAlt = require("bootstrap-icons/icons/documents-alt.svg");
const documents = require("bootstrap-icons/icons/documents.svg");
const dot = require("bootstrap-icons/icons/dot.svg");
const envelope = require("bootstrap-icons/icons/envelope.svg");
const filter = require("bootstrap-icons/icons/filter.svg");
const flagFill = require("bootstrap-icons/icons/flag-fill.svg");
const flag = require("bootstrap-icons/icons/flag.svg");
const folderFill = require("bootstrap-icons/icons/folder-fill.svg");
const folderSymlinkFill = require("bootstrap-icons/icons/folder-symlink-fill.svg");
const folderSymlink = require("bootstrap-icons/icons/folder-symlink.svg");
const folder = require("bootstrap-icons/icons/folder.svg");
const forwardFill = require("bootstrap-icons/icons/forward-fill.svg");
const forward = require("bootstrap-icons/icons/forward.svg");
const gearFill = require("bootstrap-icons/icons/gear-fill.svg");
const gear = require("bootstrap-icons/icons/gear.svg");
const graphDown = require("bootstrap-icons/icons/graph-down.svg");
const graphUp = require("bootstrap-icons/icons/graph-up.svg");
const gridFill = require("bootstrap-icons/icons/grid-fill.svg");
const grid = require("bootstrap-icons/icons/grid.svg");
const heartFill = require("bootstrap-icons/icons/heart-fill.svg");
const heart = require("bootstrap-icons/icons/heart.svg");
const houseFill = require("bootstrap-icons/icons/house-fill.svg");
const house = require("bootstrap-icons/icons/house.svg");
const imageFill = require("bootstrap-icons/icons/image-fill.svg");
const image = require("bootstrap-icons/icons/image.svg");
const inboxFill = require("bootstrap-icons/icons/inbox-fill.svg");
const inbox = require("bootstrap-icons/icons/inbox.svg");
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
const listCheck = require("bootstrap-icons/icons/list-check.svg");
const listOl = require("bootstrap-icons/icons/list-ol.svg");
const listTask = require("bootstrap-icons/icons/list-task.svg");
const listUl = require("bootstrap-icons/icons/list-ul.svg");
const list = require("bootstrap-icons/icons/list.svg");
const lockFill = require("bootstrap-icons/icons/lock-fill.svg");
const lock = require("bootstrap-icons/icons/lock.svg");
const musicPlayerFill = require("bootstrap-icons/icons/music-player-fill.svg");
const musicPlayer = require("bootstrap-icons/icons/music-player.svg");
const option = require("bootstrap-icons/icons/option.svg");
const pauseFill = require("bootstrap-icons/icons/pause-fill.svg");
const pause = require("bootstrap-icons/icons/pause.svg");
const peopleFill = require("bootstrap-icons/icons/people-fill.svg");
const people = require("bootstrap-icons/icons/people.svg");
const personFill = require("bootstrap-icons/icons/person-fill.svg");
const person = require("bootstrap-icons/icons/person.svg");
const phoneLandscape = require("bootstrap-icons/icons/phone-landscape.svg");
const phone = require("bootstrap-icons/icons/phone.svg");
const playFill = require("bootstrap-icons/icons/play-fill.svg");
const play = require("bootstrap-icons/icons/play.svg");
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
const search = require("bootstrap-icons/icons/search.svg");
const skipBackwardFill = require("bootstrap-icons/icons/skip-backward-fill.svg");
const skipBackward = require("bootstrap-icons/icons/skip-backward.svg");
const skipEndFill = require("bootstrap-icons/icons/skip-end-fill.svg");
const skipEnd = require("bootstrap-icons/icons/skip-end.svg");
const skipForwardFill = require("bootstrap-icons/icons/skip-forward-fill.svg");
const skipForward = require("bootstrap-icons/icons/skip-forward.svg");
const skipStartFill = require("bootstrap-icons/icons/skip-start-fill.svg");
const skipStart = require("bootstrap-icons/icons/skip-start.svg");
const squareFill = require("bootstrap-icons/icons/square-fill.svg");
const square = require("bootstrap-icons/icons/square.svg");
const starFill = require("bootstrap-icons/icons/star-fill.svg");
const starHalf = require("bootstrap-icons/icons/star-half.svg");
const star = require("bootstrap-icons/icons/star.svg");
const stopFill = require("bootstrap-icons/icons/stop-fill.svg");
const stop = require("bootstrap-icons/icons/stop.svg");
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
const trashFill = require("bootstrap-icons/icons/trash-fill.svg");
const trash = require("bootstrap-icons/icons/trash.svg");
const triangleFill = require("bootstrap-icons/icons/triangle-fill.svg");
const triangle = require("bootstrap-icons/icons/triangle.svg");
const tvFill = require("bootstrap-icons/icons/tv-fill.svg");
const tv = require("bootstrap-icons/icons/tv.svg");
const typeBold = require("bootstrap-icons/icons/type-bold.svg");
const typeItalic = require("bootstrap-icons/icons/type-italic.svg");
const typeUnderline = require("bootstrap-icons/icons/type-underline.svg");
const type = require("bootstrap-icons/icons/type.svg");
const unlockFill = require("bootstrap-icons/icons/unlock-fill.svg");
const unlock = require("bootstrap-icons/icons/unlock.svg");
const volumeDown = require("bootstrap-icons/icons/volume-down.svg");
const volumeMute = require("bootstrap-icons/icons/volume-mute.svg");
const volumeUp = require("bootstrap-icons/icons/volume-up.svg");
const watch = require("bootstrap-icons/icons/watch.svg");
const wifi = require("bootstrap-icons/icons/wifi.svg");
const xCircleFill = require("bootstrap-icons/icons/x-circle-fill.svg");
const xCircle = require("bootstrap-icons/icons/x-circle.svg");
const xOctagonFill = require("bootstrap-icons/icons/x-octagon-fill.svg");
const xOctagon = require("bootstrap-icons/icons/x-octagon.svg");
const xSquareFill = require("bootstrap-icons/icons/x-square-fill.svg");
const xSquare = require("bootstrap-icons/icons/x-square.svg");
const x = require("bootstrap-icons/icons/x.svg");

// Icon components
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
export const ArrowClockwise = (height,width) => { return generateIcon(arrowClockwise, height, width); }
export const ArrowCounterclockwise = (height,width) => { return generateIcon(arrowCounterclockwise, height, width); }
export const ArrowDownLeft = (height,width) => { return generateIcon(arrowDownLeft, height, width); }
export const ArrowDownRight = (height,width) => { return generateIcon(arrowDownRight, height, width); }
export const ArrowDown = (height,width) => { return generateIcon(arrowDown, height, width); }
export const ArrowLeftRight = (height,width) => { return generateIcon(arrowLeftRight, height, width); }
export const ArrowLeft = (height,width) => { return generateIcon(arrowLeft, height, width); }
export const ArrowRepeat = (height,width) => { return generateIcon(arrowRepeat, height, width); }
export const ArrowRight = (height,width) => { return generateIcon(arrowRight, height, width); }
export const ArrowUpDown = (height,width) => { return generateIcon(arrowUpDown, height, width); }
export const ArrowUpLeft = (height,width) => { return generateIcon(arrowUpLeft, height, width); }
export const ArrowUpRight = (height,width) => { return generateIcon(arrowUpRight, height, width); }
export const ArrowUp = (height,width) => { return generateIcon(arrowUp, height, width); }
export const ArrowsContract = (height,width) => { return generateIcon(arrowsContract, height, width); }
export const ArrowsExpand = (height,width) => { return generateIcon(arrowsExpand, height, width); }
export const ArrowsFullscreen = (height,width) => { return generateIcon(arrowsFullscreen, height, width); }
export const At = (height,width) => { return generateIcon(at, height, width); }
export const BarChartFill = (height,width) => { return generateIcon(barChartFill, height, width); }
export const BarChart = (height,width) => { return generateIcon(barChart, height, width); }
export const BatteryFull = (height,width) => { return generateIcon(batteryFull, height, width); }
export const Battery = (height,width) => { return generateIcon(battery, height, width); }
export const BellFill = (height,width) => { return generateIcon(bellFill, height, width); }
export const Bell = (height,width) => { return generateIcon(bell, height, width); }
export const BlockquoteLeft = (height,width) => { return generateIcon(blockquoteLeft, height, width); }
export const BlockquoteRight = (height,width) => { return generateIcon(blockquoteRight, height, width); }
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
export const BrightnessFillHigh = (height,width) => { return generateIcon(brightnessFillHigh, height, width); }
export const BrightnessFillLow = (height,width) => { return generateIcon(brightnessFillLow, height, width); }
export const BrightnessHigh = (height,width) => { return generateIcon(brightnessHigh, height, width); }
export const BrightnessLow = (height,width) => { return generateIcon(brightnessLow, height, width); }
export const Bullseye = (height,width) => { return generateIcon(bullseye, height, width); }
export const Calendar = (height,width) => { return generateIcon(calendar, height, width); }
export const CameraVideoFill = (height,width) => { return generateIcon(cameraVideoFill, height, width); }
export const CameraVideo = (height,width) => { return generateIcon(cameraVideo, height, width); }
export const Camera = (height,width) => { return generateIcon(camera, height, width); }
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
export const CircleSlash = (height,width) => { return generateIcon(circleSlash, height, width); }
export const Circle = (height,width) => { return generateIcon(circle, height, width); }
export const ClockFill = (height,width) => { return generateIcon(clockFill, height, width); }
export const Clock = (height,width) => { return generateIcon(clock, height, width); }
export const CloudFill = (height,width) => { return generateIcon(cloudFill, height, width); }
export const Cloud = (height,width) => { return generateIcon(cloud, height, width); }
export const CodeSlash = (height,width) => { return generateIcon(codeSlash, height, width); }
export const Code = (height,width) => { return generateIcon(code, height, width); }
export const Command = (height,width) => { return generateIcon(command, height, width); }
export const Compass = (height,width) => { return generateIcon(compass, height, width); }
export const CreditCard = (height,width) => { return generateIcon(creditCard, height, width); }
export const CursorFill = (height,width) => { return generateIcon(cursorFill, height, width); }
export const Cursor = (height,width) => { return generateIcon(cursor, height, width); }
export const Dash = (height,width) => { return generateIcon(dash, height, width); }
export const Display = (height,width) => { return generateIcon(display, height, width); }
export const DocumentCode = (height,width) => { return generateIcon(documentCode, height, width); }
export const DocumentDiff = (height,width) => { return generateIcon(documentDiff, height, width); }
export const DocumentRichtext = (height,width) => { return generateIcon(documentRichtext, height, width); }
export const DocumentText = (height,width) => { return generateIcon(documentText, height, width); }
export const Document = (height,width) => { return generateIcon(document, height, width); }
export const DocumentsAlt = (height,width) => { return generateIcon(documentsAlt, height, width); }
export const Documents = (height,width) => { return generateIcon(documents, height, width); }
export const Dot = (height,width) => { return generateIcon(dot, height, width); }
export const Envelope = (height,width) => { return generateIcon(envelope, height, width); }
export const Filter = (height,width) => { return generateIcon(filter, height, width); }
export const FlagFill = (height,width) => { return generateIcon(flagFill, height, width); }
export const Flag = (height,width) => { return generateIcon(flag, height, width); }
export const FolderFill = (height,width) => { return generateIcon(folderFill, height, width); }
export const FolderSymlinkFill = (height,width) => { return generateIcon(folderSymlinkFill, height, width); }
export const FolderSymlink = (height,width) => { return generateIcon(folderSymlink, height, width); }
export const Folder = (height,width) => { return generateIcon(folder, height, width); }
export const ForwardFill = (height,width) => { return generateIcon(forwardFill, height, width); }
export const Forward = (height,width) => { return generateIcon(forward, height, width); }
export const GearFill = (height,width) => { return generateIcon(gearFill, height, width); }
export const Gear = (height,width) => { return generateIcon(gear, height, width); }
export const GraphDown = (height,width) => { return generateIcon(graphDown, height, width); }
export const GraphUp = (height,width) => { return generateIcon(graphUp, height, width); }
export const GridFill = (height,width) => { return generateIcon(gridFill, height, width); }
export const Grid = (height,width) => { return generateIcon(grid, height, width); }
export const HeartFill = (height,width) => { return generateIcon(heartFill, height, width); }
export const Heart = (height,width) => { return generateIcon(heart, height, width); }
export const HouseFill = (height,width) => { return generateIcon(houseFill, height, width); }
export const House = (height,width) => { return generateIcon(house, height, width); }
export const ImageFill = (height,width) => { return generateIcon(imageFill, height, width); }
export const Image = (height,width) => { return generateIcon(image, height, width); }
export const InboxFill = (height,width) => { return generateIcon(inboxFill, height, width); }
export const Inbox = (height,width) => { return generateIcon(inbox, height, width); }
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
export const ListCheck = (height,width) => { return generateIcon(listCheck, height, width); }
export const ListOl = (height,width) => { return generateIcon(listOl, height, width); }
export const ListTask = (height,width) => { return generateIcon(listTask, height, width); }
export const ListUl = (height,width) => { return generateIcon(listUl, height, width); }
export const List = (height,width) => { return generateIcon(list, height, width); }
export const LockFill = (height,width) => { return generateIcon(lockFill, height, width); }
export const Lock = (height,width) => { return generateIcon(lock, height, width); }
export const MusicPlayerFill = (height,width) => { return generateIcon(musicPlayerFill, height, width); }
export const MusicPlayer = (height,width) => { return generateIcon(musicPlayer, height, width); }
export const Option = (height,width) => { return generateIcon(option, height, width); }
export const PauseFill = (height,width) => { return generateIcon(pauseFill, height, width); }
export const Pause = (height,width) => { return generateIcon(pause, height, width); }
export const PeopleFill = (height,width) => { return generateIcon(peopleFill, height, width); }
export const People = (height,width) => { return generateIcon(people, height, width); }
export const PersonFill = (height,width) => { return generateIcon(personFill, height, width); }
export const Person = (height,width) => { return generateIcon(person, height, width); }
export const PhoneLandscape = (height,width) => { return generateIcon(phoneLandscape, height, width); }
export const Phone = (height,width) => { return generateIcon(phone, height, width); }
export const PlayFill = (height,width) => { return generateIcon(playFill, height, width); }
export const Play = (height,width) => { return generateIcon(play, height, width); }
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
export const Search = (height,width) => { return generateIcon(search, height, width); }
export const SkipBackwardFill = (height,width) => { return generateIcon(skipBackwardFill, height, width); }
export const SkipBackward = (height,width) => { return generateIcon(skipBackward, height, width); }
export const SkipEndFill = (height,width) => { return generateIcon(skipEndFill, height, width); }
export const SkipEnd = (height,width) => { return generateIcon(skipEnd, height, width); }
export const SkipForwardFill = (height,width) => { return generateIcon(skipForwardFill, height, width); }
export const SkipForward = (height,width) => { return generateIcon(skipForward, height, width); }
export const SkipStartFill = (height,width) => { return generateIcon(skipStartFill, height, width); }
export const SkipStart = (height,width) => { return generateIcon(skipStart, height, width); }
export const SquareFill = (height,width) => { return generateIcon(squareFill, height, width); }
export const Square = (height,width) => { return generateIcon(square, height, width); }
export const StarFill = (height,width) => { return generateIcon(starFill, height, width); }
export const StarHalf = (height,width) => { return generateIcon(starHalf, height, width); }
export const Star = (height,width) => { return generateIcon(star, height, width); }
export const StopFill = (height,width) => { return generateIcon(stopFill, height, width); }
export const Stop = (height,width) => { return generateIcon(stop, height, width); }
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
export const TrashFill = (height,width) => { return generateIcon(trashFill, height, width); }
export const Trash = (height,width) => { return generateIcon(trash, height, width); }
export const TriangleFill = (height,width) => { return generateIcon(triangleFill, height, width); }
export const Triangle = (height,width) => { return generateIcon(triangle, height, width); }
export const TvFill = (height,width) => { return generateIcon(tvFill, height, width); }
export const Tv = (height,width) => { return generateIcon(tv, height, width); }
export const TypeBold = (height,width) => { return generateIcon(typeBold, height, width); }
export const TypeItalic = (height,width) => { return generateIcon(typeItalic, height, width); }
export const TypeUnderline = (height,width) => { return generateIcon(typeUnderline, height, width); }
export const Type = (height,width) => { return generateIcon(type, height, width); }
export const UnlockFill = (height,width) => { return generateIcon(unlockFill, height, width); }
export const Unlock = (height,width) => { return generateIcon(unlock, height, width); }
export const VolumeDown = (height,width) => { return generateIcon(volumeDown, height, width); }
export const VolumeMute = (height,width) => { return generateIcon(volumeMute, height, width); }
export const VolumeUp = (height,width) => { return generateIcon(volumeUp, height, width); }
export const Watch = (height,width) => { return generateIcon(watch, height, width); }
export const Wifi = (height,width) => { return generateIcon(wifi, height, width); }
export const XCircleFill = (height,width) => { return generateIcon(xCircleFill, height, width); }
export const XCircle = (height,width) => { return generateIcon(xCircle, height, width); }
export const XOctagonFill = (height,width) => { return generateIcon(xOctagonFill, height, width); }
export const XOctagon = (height,width) => { return generateIcon(xOctagon, height, width); }
export const XSquareFill = (height,width) => { return generateIcon(xSquareFill, height, width); }
export const XSquare = (height,width) => { return generateIcon(xSquare, height, width); }
export const X = (height,width) => { return generateIcon(x, height, width); }