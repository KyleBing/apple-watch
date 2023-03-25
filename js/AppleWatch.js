/*****************************
 Create Date: 20230310155016
 Update Date: 20230310155019
 *****************************/

const latestOS = "最新"
const lastUpdateDate = '2022.12.27'

const SCREEN_TYPE = {
    square: '',
    rounded: ''
}

const appleWatches = [
    {
        name: "Apple Watch 1",
        name_short: "1",
        pic: "1",
        isNew: false,
        active: false,
        dateRelease: "2015-04-24",
        dateUnsupported: "2018-09-17",
        waterResistance: 'IPX7',
        waterResistanceDepth: '1', // m
        dustResistance: '',


        cellular: '', // 蜂窝网络
        wifi: '802.11 b/g/n 2.4 GHz',
        bluetooth: '4.0',
        ultraWideBand: '',
        sensorHeart: '1', // 心率检测版本
        sensorECG: false,
        sensorBloodOxygen: false, // 血氧检测
        sensorTemperature: false, // 温度检测器
        sensorGPS: [], // 卫星导航系统
        sensorAccelerometer: '16g', // 加速度
        sensorGyroscope: 'yes', // 陀螺仪
        sensorAmbient: 'yes', // 光线传感器
        sensorCompass: false, // 指南针
        heySiri: false, // 是否支持 siri
        display: {
            screenType: SCREEN_TYPE.square, // 屏幕样式
            type: 'OLED Retina', // 屏幕类型
            touch3D: true, // 3d touch
            brightness: 450, // nit
            pixelDensity: 326, // ppi 像素密度
        },
        sizeSmall: {
            name: '38',
            model: 'A1553',
            screenSize: 38, // mm
            pixelWidth: 272,
            pixelHeight: 340,
            battery: 205, // mah
            batteryVoltage: 3.8, // v
            height: 38.6, // mm
            width: 33.3, // mm
            depth: 10.5, // mm
            type: [
                {
                    type: '铝',
                    weight: 25,
                    height: 42, // mm
                    width: 35.9, // mm
                    depth: 10.5, // mm
                },
                {
                    type: '钢',
                    weight: 40,
                    height: 42, // mm
                    width: 35.9, // mm
                    depth: 10.5, // mm
                },
                {
                    type: '金',
                    weight: 54,
                    height: 42, // mm
                    width: 35.9, // mm
                    depth: 10.5, // mm
                }
            ]
        },
        sizeLarge: {
            name: '42',
            model: 'A1554',
            screenSize: 42, // mm
            pixelWidth: 312,
            pixelHeight: 390,
            battery: 246, // mah
            batteryVoltage: 3.78, // v

            type: [
                {
                    type: '铝',
                    weight: 30,
                    height: 42, // mm
                    width: 35.9, // mm
                    depth: 10.5, // mm
                },
                {
                    type: '钢',
                    weight: 50,
                    height: 42, // mm
                    width: 35.9, // mm
                    depth: 10.5, // mm
                },
                {
                    type: '金',
                    weight: 68,
                    height: 42, // mm
                    width: 35.9, // mm
                    depth: 10.5, // mm
                }
            ]
        },
        batteryChargeTime: '', // 充电时长
        storage: 8, // GB
        cpu: {
            name: 'Apple 1',
            speed: '520MHz',
            bit: 32,
            coreCount: 1
        },
        memory: {
            type: 'DRAM',
            size: '512MB', // MB
        },
        OS: {
            from: 'watchOS 1.0',
            to: 'watchOS 4.32'
        },
        appleWatchRequire: '>iPhone5 >iOS8.2'
    },
    {
        name: "Apple Watch 1P",
        name_short: "1P",
        pic: "1P",
        isNew: false,
        active: false,
        dateRelease: "2016-09-07",
        dateUnsupported: "2020-12-14",
        waterResistance: 'IPX7',
        waterResistanceDepth: '1', // m
        dustResistance: '',

        cellular: '', // 蜂窝网络
        wifi: '802.11 b/g/n 2.4 GHz',
        bluetooth: '4.0',
        ultraWideBand: '',
        sensorHeart: '1', // 心率检测版本
        sensorECG: false,
        sensorBloodOxygen: false, // 血氧检测
        sensorTemperature: false, // 温度检测器
        sensorGPS: [], // 卫星导航系统
        sensorAccelerometer: '16g', // 加速度
        sensorGyroscope: 'yes', // 陀螺仪
        sensorAmbient: 'yes', // 光线传感器
        sensorCompass: false, // 指南针
        heySiri: false, // 是否支持 siri
        display: {
            screenType: SCREEN_TYPE.square, // 屏幕样式
            type: 'OLED Retina', // 屏幕类型
            touch3D: true, // 3d touch
            brightness: 450, // nit
            pixelDensity: 326, // ppi 像素密度
        },
        sizeSmall: {
            name: '38',
            model: 'A1802',
            screenSize: 38, // mm
            pixelWidth: 272,
            pixelHeight: 340,
            battery: 205, // mah
            batteryVoltage: 3.8, // v

            type: [
                {
                    type: '铝',
                    weight: 25, // g
                    height: 38.6, // mm
                    width: 33.3, // mm
                    depth: 10.5, // mm
                },
            ]
        },
        sizeLarge: {
            name: '42',
            model: 'A1803',
            screenSize: 42, // mm
            pixelWidth: 312,
            pixelHeight: 390,
            battery: 246, // mah
            batteryVoltage: 3.78, // v
            weight: [
                {
                    type: '铝',
                    weight: 30, // g
                    height: 42.5, // mm
                    width: 36.4, // mm
                    depth: 10.5, // mm
                },
            ]
        },
        batteryChargeTime: '', // 充电时长
        storage: 8, // GB
        cpu: {
            name: 'Apple S1P',
            speed: '520MHz',
            bit: 32,
            coreCount: 2
        },
        memory: {
            type: 'DRAM',
            size: '512MB', // MB
        },
        OS: {
            from: 'watchOS 3.0',
            to: 'watchOS 6.3'
        },
        appleWatchRequire: '>iPhone5 >iOS10'
    },
    {
        name: "Apple Watch 2",
        name_short: "2",
        pic: "2",
        isNew: false,
        active: false,
        dateRelease: "2016-09-07",
        dateUnsupported: "2020-12-14",
        waterResistance: 'ISO 22810:2010',
        waterResistanceDepth: '50', // m
        dustResistance: '',


        cellular: '', // 蜂窝网络
        wifi: '802.11 b/g/n 2.4 GHz',
        bluetooth: '4.0',
        ultraWideBand: '',
        sensorHeart: '1', // 心率检测版本
        sensorECG: false,
        sensorBloodOxygen: false, // 血氧检测
        sensorTemperature: false, // 温度检测器
        sensorGPS: [ // 卫星导航系统
            'GPS', 'GLONASS'
        ],
        sensorAccelerometer: '16g', // 加速度
        sensorGyroscope: 'yes', // 陀螺仪
        sensorAmbient: 'yes', // 光线传感器
        sensorCompass: false, // 指南针
        heySiri: false, // 是否支持 siri
        display: {
            screenType: SCREEN_TYPE.square, // 屏幕样式
            type: 'OLED Retina2', // 屏幕类型
            touch3D: true, // 3d touch
            brightness: 1000, // nit
            pixelDensity: 326, // ppi 像素密度
        },
        sizeSmall: {
            name: '38',
            screenSize: 38, // mm
            pixelWidth: 272,
            pixelHeight: 340,
            battery: 273, // mah
            batteryVoltage: 3.77, // v
            type: [
                {
                    type: '铝',
                    model: 'A1757',
                    weight: 28.2, // g
                    height: 38.6, // mm
                    width: 33.3, // mm
                    depth: 11.4, // mm
                },
                {
                    type: '钢',
                    model: 'A1757',
                    weight: 41.9, // g
                    height: 38.6, // mm
                    width: 33.3, // mm
                    depth: 11.4, // mm
                },
                {
                    type: 'ED',
                    model: 'A1816',
                    weight: 39.6, // g
                    height: 39.2, // mm
                    width: 34, // mm
                    depth: 11.8, // mm
                }
            ],
        },
        sizeLarge: {
            name: '42',
            model: 'A1554',
            screenSize: 42, // mm
            pixelWidth: 312,
            pixelHeight: 390,
            battery: 334, // mah
            batteryVoltage: 3.8, // v
            type: [
                {
                    type: '铝',
                    model: 'A1758',
                    weight: 34.2, // g
                    height: 42.5, // mm
                    width: 36.4, // mm
                    depth: 11.4, // mm
                },
                {
                    type: '钢',
                    model: 'A1758',
                    weight: 52.4, // g
                    height: 42.5, // mm
                    width: 36.4, // mm
                    depth: 11.4, // mm
                },
                {
                    type: 'ED',
                    model: 'A1817',
                    weight: 45.6, // g
                    height: 42.6, // mm
                    width: 36.5, // mm
                    depth: 11.8, // mm
                }
            ],
        },
        batteryChargeTime: '', // 充电时长
        storage: 8, // GB
        cpu: {
            name: 'Apple S2',
            speed: '520MHz',
            bit: 32,
            coreCount: 2
        },
        memory: {
            type: 'DRAM',
            size: '512MB', // MB
        },
        OS: {
            from: 'watchOS 3.0',
            to: 'watchOS 6.3'
        },
        appleWatchRequire: '>iPhone5 >iOS10'
    },
]

let app = new Vue({
    el: "#app",
    data: {
        // date
        dateLastUpdate: lastUpdateDate,
        // thumb up
        pingPongInterval: null,
        thumbsUpKey: 'apple-watch',
        heartActive: false,
        thumbsUpCount: 0,
        // full screen 相关
        showFullScreenBtn: false,
        didEnteredFullScreen: false,
        // 浏览器参数
        portraitMode: false,
        mobileMode: false,
        latestOS: latestOS,
        appleWatches: appleWatches,
        appleWatchesOrigin: appleWatches,

        deviceMap: new Map(),

        // 机型信息筛选
        selectedNames: [], // 已选中的名字

        tags: [],
        keyword: '',
        tipShowed: false,

        // share info
        showShare: false,
        insets: {
            height: innerHeight,
            width: innerWidth
        },
        shareQrCode: null,
        shareQrCodeQQ: null,
        linkAddress: 'http://kylebing.cn/tools/iphone/',
        linkQQ: 'https://jq.qq.com/?_wv=1027&k=Z8E0HrWA'
    },
    mounted() {
        // 全屏相关
        let chromeCore = /Chrome/i.test(navigator.userAgent)
        let mobileMode = /Mobile/i.test(navigator.userAgent)
        this.portraitMode = window.innerWidth > window.innerHeight
        this.mobileMode = mobileMode
        this.showFullScreenBtn = chromeCore && !mobileMode
        this.getInitThumbsUpCount()
        this.websocketInit()

        this.generateDeviceMap() // 生成 Apple Watch Map

        // onresize
        onresize = () => {
            this.insets = {
                height: innerHeight,
                width: innerWidth
            }
        }
        this.shareQrCode = QRCode.generatePNG(this.linkAddress, {margin: 1})
        this.shareQrCodeQQ = QRCode.generatePNG(this.linkQQ, {margin: 1})
    },
    methods: {
        toggleShare() {
            this.showShare = !this.showShare
        },
        generateDeviceMap() {
            this.appleWatches.forEach(device => {
                this.deviceMap.set(device.name, device)
            })
        },
        tagToggle(tag) {
            if (this.tags.some(item => item === tag)) {
                this.tags.splice(this.tags.indexOf(tag), 1)
            } else {
                this.tags.push(tag)
            }
        },

        // 筛选手机信息
        filterTagToggle(deviceName) {
            if (this.selectedNames.includes(deviceName)) {
                this.selectedNames.splice(this.selectedNames.indexOf(deviceName), 1)
            } else {
                this.selectedNames.push(deviceName)
            }
            this.updateShowingDevices()

        },
        updateShowingDevices() {
            this.appleWatches = this.selectedNames.map(name => this.deviceMap.get(name))
            if (this.appleWatches.length === 0) {
                this.appleWatches = [...this.appleWatchesOrigin]
            }
            this.appleWatches.push(this.appleWatchesOrigin[0])
            this.appleWatches.pop()
        },

        // 全屏显示
        enterFullScreen: function () {
            document.documentElement.requestFullscreen()
        },
        filterIphone() {

        },

        // 点赞功能
        getInitThumbsUpCount() {
            axios.get('../../portal/thumbs-up?key=' + this.thumbsUpKey)
                .then(res => {
                    if (res.data && res.data.data) {
                        this.thumbsUpCount = res.data.data
                    }
                })
        },
        websocketInit() {
            this.websocket = new WebSocket('wss://kylebing.cn/ws')
            this.websocket.onopen = this.websocketOnOpen
            this.websocket.onmessage = this.websocketOnMessage
            this.websocket.onerror = this.websocketOnError
            this.websocket.onclose = this.websocketClose
        },
        websocketOnOpen() {
            this.portStatus = 'success'
            this.pingPongInterval = setInterval(() => {
                if (this.websocket) {
                    switch (this.websocket.readyState) {
                        case 0: // connecting
                            break;
                        case 1: // open
                            let message = new WSMessage(WSMessage.type.heartBeat, 'ping')
                            this.websocket.send(JSON.stringify(message))
                            break;
                        case 2:  // closing
                            clearInterval(this.pingPongInterval)
                            break;
                        case 3: // closed
                            clearInterval(this.pingPongInterval)
                            break;
                    }
                }
            }, 10000)
        },
        websocketOnMessage(res) {
            let receivedMessage = JSON.parse(res.data)
            switch (receivedMessage.type) {
                case WSMessage.type.heartBeat:
                    break;
                case WSMessage.type.thumbsUp:
                    if (receivedMessage.content.key === this.thumbsUpKey) {
                        this.thumbsUpCount = receivedMessage.content.count
                    }
                    break;
            }
        },
        websocketOnError() {
            this.portStatus = 'error'
            this.websocket.send('on error')
        },
        websocketClose() {
            this.portStatus = 'closed'
            console.log('socket has closed')
        },
        thumbsUp() {
            this.sendMessage(this.thumbsUpKey)
        },
        sendMessage(key) {
            if (this.websocket) {
                this.heartActive = true
                let message = new WSMessage(WSMessage.type.thumbsUp, {
                    key: key
                })
                this.websocket.send(JSON.stringify(message))
            }
        },
    },
    computed: {
        maxScore(){
            let max = 0
            appleWatches.forEach(item => {
                if (max < item.geekbenchScore.multi) {
                    max = item.geekbenchScore.multi
                }
            })
            return max
        }
    }
})

class WSMessage {
    constructor(type, content) {
        this.type = type
        this.content = content
    }

    static type = {
        thumbsUp: 'thumbs-up',
        heartBeat: 'heart-beat',
    }
}


document.addEventListener('touchstart', () => {
}, false)

// 当全屏模式变化时
document.documentElement.onfullscreenchange = () => {
    app.didEnteredFullScreen = Boolean(document.fullscreenElement)
}
