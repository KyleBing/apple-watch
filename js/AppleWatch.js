/*****************************
 Create Date: 20230310155016
 Update Date: 20230330161002
 *****************************/

const latestOS = "最新"
const lastUpdateDate = '2023-05-31' // 2023-05-31

const SCREEN_TYPE = {
    square: '',
    rounded: ''
}

const appleWatches = [
    {
        name: "Apple Watch 1",
        name_short: "1",
        pic: "https://diary-container.kylebing.cn/FnR81H3xpTUgQNudimXZC2n8XDHy",
        isNew: false,
        active: false,
        dateRelease: "2015-04-24",
        dateUnsupported: "2018-09-17",
        waterResistance: 'IPX7',
        waterResistanceThickness: '1', // m
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
        sensorAccelerometer: 16, // 加速度
        sensorGyroscope: true, // 陀螺仪
        sensorAmbient: true, // 光线传感器
        sensorAltimeter: true, // 海拔传感器
        sensorCompass: false, // 指南针
        heySiri: false, // 是否支持 siri
        screen: {
            screenType: SCREEN_TYPE.square, // 屏幕样式
            type: 'OLED Retina', // 屏幕类型
            touch3D: true, // 3d touch
            brightness: 450, // nit
            pixelDensity: 326, // ppi 像素密度
        },
        sizeSmall: {
            name: '38/40/41',
            screenSize: 38, // mm
            pixelWidth: 272,
            pixelHeight: 340,
            battery: 205, // mah
            batteryVoltage: 3.8, // v
            type: [
                {
                    type: '铝',
                    weight: 25,
                    height: 38.6, // mm
                    width: 33.3, // mm
                    thickness: 10.5, // mm
                },
                {
                    type: '钢',
                    weight: 40,
                    height: 38.6, // mm
                    width: 33.3, // mm
                    thickness: 10.5, // mm
                },
                {
                    type: '金',
                    weight: 54,
                    height: 38.6, // mm
                    width: 33.3, // mm
                    thickness: 10.5, // mm
                }
            ]
        },
        sizeLarge: {
            name: '42/44/45',
            screenSize: 44, // mm
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
                    thickness: 10.5, // mm
                },
                {
                    type: '钢',
                    weight: 50,
                    height: 42, // mm
                    width: 35.9, // mm
                    thickness: 10.5, // mm
                },
                {
                    type: '金',
                    weight: 68,
                    height: 42, // mm
                    width: 35.9, // mm
                    thickness: 10.5, // mm
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
            to: '4.32'
        },
        appleWatchRequire: [
            {name: '',value: '>iPhone5 >iOS8.2'}
        ],
        model: [
            {
                name: '普通',
                value: [
                    {name: '38', value: 'A1553'},
                    {name: '42', value: 'A1554'},
                ],
            },
        ]
    },
    {
        name: "Apple Watch S1",
        name_short: "S1",
        pic: "https://diary-container.kylebing.cn/FigPZM8YQ5jQmOgxWDp2Wo0_CPfI",
        isNew: false,
        active: false,
        dateRelease: "2016-09-12",
        dateUnsupported: "2020-12-14",
        waterResistance: 'IPX7',
        waterResistanceThickness: '1', // m
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
        sensorAccelerometer: 16, // 加速度
        sensorGyroscope: true, // 陀螺仪
        sensorAmbient: true, // 光线传感器
        sensorAltimeter: true, // 海拔传感器
        sensorCompass: false, // 指南针
        heySiri: false, // 是否支持 siri
        screen: {
            screenType: SCREEN_TYPE.square, // 屏幕样式
            type: 'OLED Retina', // 屏幕类型
            touch3D: true, // 3d touch
            brightness: 450, // nit
            pixelDensity: 326, // ppi 像素密度
        },
        sizeSmall: {
            name: '38/40/41',
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
                    thickness: 10.5, // mm
                },
            ]
        },
        sizeLarge: {
            name: '42/44/45',
            screenSize: 44, // mm
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
                    thickness: 10.5, // mm
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
            to: '6.3'
        },
        appleWatchRequire: [
            {name: '', value: '>iPhone5 >iOS10'}
        ],
        model: [
            {
                name: '普通',
                value: [
                    {name: '38', value: 'A1802'},
                    {name: '42', value: 'A1803'},
                ],
            },
        ]
    },
    {
        name: "Apple Watch S2",
        name_short: "S2",
        pic: "https://diary-container.kylebing.cn/FlsGixwR7-pVhoobr2oPQh2Eznj-",
        isNew: false,
        active: false,
        dateRelease: "2016-09-16",
        dateUnsupported: "2020-12-14",
        waterResistance: 'ISO 22810:2010',
        waterResistanceThickness: '50', // m
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
        sensorAccelerometer: 16, // 加速度
        sensorGyroscope: true, // 陀螺仪
        sensorAmbient: true, // 光线传感器
        sensorAltimeter: true, // 海拔传感器
        sensorCompass: false, // 指南针
        heySiri: false, // 是否支持 siri
        screen: {
            screenType: SCREEN_TYPE.square, // 屏幕样式
            type: 'OLED Retina2', // 屏幕类型
            touch3D: true, // 3d touch
            brightness: 1000, // nit
            pixelDensity: 326, // ppi 像素密度
        },
        sizeSmall: {
            name: '38/40/41',
            screenSize: 38, // mm
            pixelWidth: 272,
            pixelHeight: 340,
            battery: 273, // mah
            batteryVoltage: 3.77, // v
            type: [
                {
                    type: '铝',
                    weight: 28.2, // g
                    height: 38.6, // mm
                    width: 33.3, // mm
                    thickness: 11.4, // mm
                },
                {
                    type: '钢',
                    weight: 41.9, // g
                    height: 38.6, // mm
                    width: 33.3, // mm
                    thickness: 11.4, // mm
                },
                {
                    type: 'ED',
                    weight: 39.6, // g
                    height: 39.2, // mm
                    width: 34, // mm
                    thickness: 11.8, // mm
                }
            ],
        },
        sizeLarge: {
            name: '42/44/45',
            screenSize: 44, // mm
            pixelWidth: 312,
            pixelHeight: 390,
            battery: 334, // mah
            batteryVoltage: 3.8, // v
            type: [
                {
                    type: '铝',
                    weight: 34.2, // g
                    height: 42.5, // mm
                    width: 36.4, // mm
                    thickness: 11.4, // mm
                },
                {
                    type: '钢',
                    weight: 52.4, // g
                    height: 42.5, // mm
                    width: 36.4, // mm
                    thickness: 11.4, // mm
                },
                {
                    type: 'ED',
                    weight: 45.6, // g
                    height: 42.6, // mm
                    width: 36.5, // mm
                    thickness: 11.8, // mm
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
            to: '6.3'
        },
        appleWatchRequire: [
            {name: '', value: '>iPhone5 >iOS10'}
        ],
        model: [
            {
                name: '普通',
                value: [
                    {name: '38', value: 'A1757'},
                    {name: '42', value: 'A1758'},
                ],
            },
            {
                name: 'ED',
                value: [
                    {name: '38', value: 'A1816'},
                    {name: '42', value: 'A1817'},
                ],
            },
        ]
    },
    {
        name: "Apple Watch S3",
        name_short: "S3",
        pic: "https://diary-container.kylebing.cn/Fhuz4JnjlsN06lFaQYoau3B4wUXc",
        isNew: false,
        active: false,
        dateRelease: "2017-09-22",
        dateUnsupported: "2017-09-22",
        waterResistance: 'ISO 22810:2010',
        waterResistanceThickness: '50', // m
        dustResistance: '',

        cellular: 'eSIM(可选)', // 蜂窝网络
        wifi: '802.11 b/g/n 2.4 GHz',
        bluetooth: '4.2',
        ultraWideBand: '',
        sensorHeart: '1', // 心率检测版本
        sensorECG: false,
        sensorBloodOxygen: false, // 血氧检测
        sensorTemperature: false, // 温度检测器
        sensorGPS: [ // 卫星导航系统
            'GPS', 'GLONASS', 'Galileo', 'QZSS'
        ],
        sensorAccelerometer: 16, // 加速度
        sensorGyroscope: true, // 陀螺仪
        sensorAmbient: true, // 光线传感器
        sensorAltimeter: true, // 海拔传感器
        sensorCompass: false, // 指南针
        heySiri: true, // 是否支持 siri
        screen: {
            screenType: SCREEN_TYPE.square, // 屏幕样式
            type: 'OLED Retina2', // 屏幕类型
            touch3D: true, // 3d touch
            brightness: 1000, // nit
            pixelDensity: 326, // ppi 像素密度
        },
        sizeSmall: {
            name: '38/40/41',
            screenSize: 38, // mm
            pixelWidth: 272,
            pixelHeight: 340,
            battery: [ // mah
                {name: 'GPS', value: 262},
                {name: '蜂窝', value: 279},
            ],
            batteryVoltage: [  // v
                {name: 'GPS', value: 3.81},
                {name: '蜂窝', value: 3.82},
            ],
            type: [
                {
                    type: '铝',
                    weight: 26.7, // g
                    height: 38.6, // mm
                    width: 33.3, // mm
                    thickness: 11.4, // mm
                },
                {
                    type: '钢',
                    weight: 42.2, // g
                    height: 38.6, // mm
                    width: 33.3, // mm
                    thickness: 11.4, // mm
                },
                {
                    type: 'ED',
                    weight: 40.1, // g
                    height: 39.2, // mm
                    width: 34, // mm
                    thickness: 11.8, // mm
                }
            ],
        },
        sizeLarge: {
            name: '42/44/45',
            screenSize: 44, // mm
            pixelWidth: 312,
            pixelHeight: 390,
            battery: [ // mah
                {name: 'GPS', value: 342},
                {name: '蜂窝', value: 352},
            ],
            batteryVoltage: [  // v
                {name: 'GPS', value: 3.82},
                {name: '蜂窝', value: 3.82},
            ],
            type: [
                {
                    type: '铝',
                    weight: 32.3, // g
                    height: 42.5, // mm
                    width: 36.4, // mm
                    thickness: 11.4, // mm
                },
                {
                    type: '钢',
                    weight: 52.8, // g
                    height: 42.5, // mm
                    width: 36.4, // mm
                    thickness: 11.4, // mm
                },
                {
                    type: 'ED',
                    weight: 46.4, // g
                    height: 42.6, // mm
                    width: 36.5, // mm
                    thickness: 11.8, // mm
                }
            ],
        },
        batteryChargeTime: [ // 充电时长
            {name: '80%', value: '1.5h'}, // h
            {name: '100%', value: '2h'}, // h
        ],
        storage: [ // GB
            {name: 'GPS', value: 8},
            {name: '蜂窝', value: 16},
        ],
        cpu: {
            name: 'Apple S3',
            speed: '',
            bit: 32,
            coreCount: 2
        },
        memory: {
            type: 'DRAM',
            size: '768MB', // MB
        },
        OS: {
            from: 'watchOS 4.0',
            to: '8.7.1'
        },
        appleWatchRequire: [
            {name: 'GPS', value: '>iPhone5s >iOS11'},
            {name: '蜂窝', value: '>iPhone6 >iOS11'},
        ],
        model: [
            {
                name: 'GPS',
                value: [
                    {name: '38', value: 'A1858'},
                    {name: '42', value: 'A1859'},
                ]
            },
            {
                name: '蜂窝',
                value: [
                    {
                        name: '北美',
                        value: [
                            {name: '38', value: 'A1860'},
                            {name: '42', value: 'A1861'},
                        ]
                    },
                    {
                        name: '欧亚非',
                        value: [
                            {name: '38', value: 'A1889'},
                            {name: '42', value: 'A1891'},
                        ]
                    },
                    {
                        name: '中国',
                        value: [
                            {name: '38', value: 'A1890'},
                            {name: '42', value: 'A1892'},
                        ]
                    }
                ]
            },
        ]
    },
    {
        name: "Apple Watch S4",
        name_short: "S4",
        pic: "https://diary-container.kylebing.cn/Fjyc_fOz30x8JJLM47xjZKTaTcmj",
        isNew: false,
        active: false,
        dateRelease: "2018-09-21",
        dateUnsupported: "",
        waterResistance: 'ISO 22810:2010',
        waterResistanceThickness: '50', // m
        dustResistance: '',

        cellular: 'eSIM(可选)', // 蜂窝网络
        wifi: '802.11 b/g/n 2.4 GHz',
        bluetooth: '5',
        ultraWideBand: '',
        sensorHeart: '2', // 心率检测版本
        sensorECG: true,
        sensorBloodOxygen: false, // 血氧检测
        sensorTemperature: false, // 温度检测器
        sensorGPS: [ // 卫星导航系统
            'GPS', 'GLONASS', 'Galileo', 'QZSS'
        ],
        sensorAccelerometer: 32, // 加速度 g
        sensorGyroscope: '增强版本', // 陀螺仪
        sensorAmbient: true, // 光线传感器
        sensorAltimeter: true, // 海拔传感器
        sensorCompass: false, // 指南针
        heySiri: true, // 是否支持 siri
        screen: {
            screenType: SCREEN_TYPE.rounded, // 屏幕样式
            type: 'LTPO OLED Retina', // 屏幕类型
            touch3D: true, // 3d touch
            brightness: 1000, // nit
            pixelDensity: 326, // ppi 像素密度
        },
        sizeSmall: {
            name: '38/40/41',
            screenSize: 40, // mm
            pixelWidth: 324,
            pixelHeight: 394,
            battery: 224.9, // mah
            batteryVoltage: 3.81, // v
            type: [
                {
                    type: '铝',
                    weight: 30.1, // g
                    height: 40, // mm
                    width: 34, // mm
                    thickness: 10.7, // mm
                },
                {
                    type: '钢',
                    weight: 39.8, // g
                    height: 40, // mm
                    width: 34, // mm
                    thickness: 10.7, // mm
                },
            ],
        },
        sizeLarge: {
            name: '42/44/45',
            screenSize: 44, // mm
            pixelWidth: 368,
            pixelHeight: 448,
            battery: 291.8, // mah
            batteryVoltage: 3.81, // v
            type: [
                {
                    type: '铝',
                    weight: 36.7, // g
                    height: 44, // mm
                    width: 38, // mm
                    thickness: 10.7, // mm
                },
                {
                    type: '钢',
                    weight: 47.9, // g
                    height: 44, // mm
                    width: 38, // mm
                    thickness: 10.7, // mm
                },
            ],
        },
        batteryChargeTime: [ // 充电时长
            {name: '80%', value: '1.5h'}, // h
            {name: '100%', value: '2h'}, // h
        ],
        storage: 16,
        cpu: {
            name: 'Apple S4',
            speed: '',
            bit: 64,
            coreCount: 2
        },
        memory: {
            type: 'DRAM',
            size: '1GB', // MB
        },
        OS: {
            from: 'watchOS 5.0',
            to: '9.3.1'
        },
        appleWatchRequire: [
            {name: 'GPS', value: '>iPhone5s >iOS12'},
            {name: '蜂窝', value: '>iPhone6 >iOS12'},
        ],
        model: [
            {
                name: "GPS",
                value: [
                    {name: '40', value: 'A1977'},
                    {name: '44', value: 'A1978'},
                ],
            },
            {
                name: "蜂窝",
                value: [
                    {
                        name: '北美',
                        value: [
                            {name: '40', value: 'A1975'},
                            {name: '44', value: 'A1976'},
                        ]
                    },
                    {
                        name: '欧亚太中',
                        value: [
                            {name: '40', value: 'A2007'},
                            {name: '44', value: 'A2008'},
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Apple Watch S5",
        name_short: "S5",
        pic: "https://diary-container.kylebing.cn/FofAJp5VtEPH3ANLTyAx2tFOEnHb",
        isNew: false,
        active: false,
        dateRelease: "2019-09-25",
        dateUnsupported: "",
        waterResistance: 'ISO 22810:2010',
        waterResistanceThickness: '50', // m
        dustResistance: '',

        cellular: 'eSIM(可选)', // 蜂窝网络
        wifi: '802.11 b/g/n 2.4 GHz',
        bluetooth: '5',
        ultraWideBand: '',
        sensorHeart: '2', // 心率检测版本
        sensorECG: true,
        sensorBloodOxygen: false, // 血氧检测
        sensorTemperature: false, // 温度检测器
        sensorGPS: [ // 卫星导航系统
            'GPS', 'GLONASS', 'Galileo', 'QZSS'
        ],
        sensorAccelerometer: 32, // 加速度 g
        sensorGyroscope: '增强版本', // 陀螺仪
        sensorAmbient: true, // 光线传感器
        sensorAltimeter: true, // 海拔传感器
        sensorCompass: true, // 指南针
        heySiri: true, // 是否支持 siri
        screen: {
            screenType: SCREEN_TYPE.rounded, // 屏幕样式
            type: 'LTPO OLED Retina 长亮屏幕', // 屏幕类型
            touch3D: true, // 3d touch
            brightness: 1000, // nit
            pixelDensity: 326, // ppi 像素密度
        },
        sizeSmall: {
            name: '38/40/41',
            screenSize: 40, // mm
            pixelWidth: 324,
            pixelHeight: 394,
            battery: 245, // mah
            batteryVoltage: 3.85, // v
            type: [
                {
                    type: '铝',
                    weight: 30.8, // g
                    height: 40, // mm
                    width: 34, // mm
                    thickness: 10.74, // mm
                },
                {
                    type: '钢',
                    weight: 40.6, // g
                    height: 40, // mm
                    width: 34, // mm
                    thickness: 10.74, // mm
                },
                {
                    type: 'ED',
                    weight: 39.7, // g
                    height: 40, // mm
                    width: 34, // mm
                    thickness: 10.74, // mm
                },
            ],
        },
        sizeLarge: {
            name: '42/44/45',
            screenSize: 44, // mm
            pixelWidth: 368,
            pixelHeight: 448,
            battery: 296, // mah
            batteryVoltage: 3.814, // v
            type: [
                {
                    type: '铝',
                    weight: 36.5, // g
                    height: 44, // mm
                    width: 38, // mm
                    thickness: 10.74, // mm
                },
                {
                    type: '钢',
                    weight: 47.8, // g
                    height: 44, // mm
                    width: 38, // mm
                    thickness: 10.74, // mm
                },
                {
                    type: 'ED',
                    weight: 46.7, // g
                    height: 44, // mm
                    width: 38, // mm
                    thickness: 10.74, // mm
                },
            ],
        },
        batteryChargeTime: [ // 充电时长
            {name: '80%', value: '1.5h'}, // h
            {name: '100%', value: '2.5h'}, // h
        ],
        storage: 32,
        cpu: {
            name: 'Apple S5',
            speed: '',
            bit: 64,
            coreCount: 2
        },
        memory: {
            type: 'DRAM',
            size: '1GB', // MB
        },
        OS: {
            from: 'watchOS 6.0',
            to: '9.3.1'
        },
        appleWatchRequire: [
            {name: '', value: '>iPhone6s >iOS13'},
        ],
        model: [
            {
                name: "GPS",
                value: [
                    {name: '40', value: 'A2092'},
                    {name: '44', value: 'A2093'},
                ],
            },
            {
                name: "蜂窝",
                value: [
                    {
                        name: '北美',
                        value: [
                            {name: '40', value: 'A2094'},
                            {name: '44', value: 'A2095'},
                        ]
                    },
                    {
                        name: '欧亚太中',
                        value: [
                            {name: '40', value: 'A2156'},
                            {name: '44', value: 'A2157'},
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Apple Watch SE1",
        name_short: "SE1",
        pic: "https://diary-container.kylebing.cn/Fp4n9tnTzWPLFK5auYjCTWvmqjZo",
        isNew: false,
        active: false,
        dateRelease: "2020-09-18",
        dateUnsupported: "",
        waterResistance: 'ISO 22810:2010',
        waterResistanceThickness: '50', // m
        dustResistance: '',

        cellular: 'eSIM(可选)', // 蜂窝网络
        wifi: '802.11 b/g/n 2.4 GHz',
        bluetooth: '5',
        ultraWideBand: '',
        sensorHeart: '2', // 心率检测版本
        sensorECG: false,
        sensorBloodOxygen: false, // 血氧检测
        sensorTemperature: false, // 温度检测器
        sensorGPS: [ // 卫星导航系统
            'GPS', 'GLONASS', 'Galileo', 'QZSS'
        ],
        sensorAccelerometer: 32, // 加速度 g
        sensorGyroscope: '增强版本', // 陀螺仪
        sensorAmbient: true, // 光线传感器
        sensorAltimeter: '常开', // 海拔传感器
        sensorCompass: true, // 指南针
        heySiri: true, // 是否支持 siri
        screen: {
            screenType: SCREEN_TYPE.rounded, // 屏幕样式
            type: 'LTPO OLED Retina', // 屏幕类型
            touch3D: false, // 3d touch
            brightness: 1000, // nit
            pixelDensity: 326, // ppi 像素密度
        },
        sizeSmall: {
            name: '38/40/41',
            screenSize: 40, // mm
            pixelWidth: 324,
            pixelHeight: 394,
            battery: 245, // mah
            batteryVoltage: 3.85, // v
            type: [
                {
                    type: '铝',
                    weight: 30.49, // g
                    height: 40, // mm
                    width: 34, // mm
                    thickness: 10.7, // mm
                },
            ],
        },
        sizeLarge: {
            name: '42/44/45',
            screenSize: 44, // mm
            pixelWidth: 368,
            pixelHeight: 448,
            battery: 296, // mah
            batteryVoltage: 3.814, // v
            type: [
                {
                    type: '铝',
                    weight: 36.2, // g
                    height: 44, // mm
                    width: 38, // mm
                    thickness: 10.7, // mm
                },
            ],
        },
        batteryChargeTime: [ // 充电时长
            {name: '80%', value: '1.5h'}, // h
            {name: '100%', value: '2.5h'}, // h
        ],
        storage: 32,
        cpu: {
            name: 'Apple S5',
            speed: '',
            bit: 64,
            coreCount: 2
        },
        memory: {
            type: 'DRAM',
            size: '1GB', // MB
        },
        OS: {
            from: 'watchOS 7.0',
            to: '9.3.1'
        },
        appleWatchRequire: [
            {name: '', value: '>iPhone6s >iOS14'},
        ],
        model: [
            {
                name: "GPS",
                value: [
                    {name: '40', value: 'A2351'},
                    {name: '44', value: 'A2352'},
                ],
            },
            {
                name: "蜂窝",
                value: [
                    {
                        name: '北美',
                        value: [
                            {name: '40', value: 'A2353'},
                            {name: '44', value: 'A2354'},
                        ]
                    },
                    {
                        name: '欧亚太中',
                        value: [
                            {name: '40', value: 'A2355'},
                            {name: '44', value: 'A2356'},
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Apple Watch S6",
        name_short: "S6",
        pic: "https://diary-container.kylebing.cn/FkVbZkYbusmhXSbdAI9xxMheg2xz",
        isNew: false,
        active: false,
        dateRelease: "2020-09-18",
        dateUnsupported: "",
        waterResistance: 'ISO 22810:2010',
        waterResistanceThickness: '50', // m
        dustResistance: '',

        cellular: 'eSIM(可选)', // 蜂窝网络
        wifi: '802.11 b/g/n 2.4 & 5GHz',
        bluetooth: '5',
        ultraWideBand: 'U1芯片',
        sensorHeart: '3', // 心率检测版本
        sensorECG: true,
        sensorBloodOxygen: true, // 血氧检测
        sensorTemperature: false, // 温度检测器
        sensorGPS: [ // 卫星导航系统
            'GPS', 'GLONASS', 'Galileo', 'QZSS'
        ],
        sensorAccelerometer: 32, // 加速度 g
        sensorGyroscope: '增强版本', // 陀螺仪
        sensorAmbient: true, // 光线传感器
        sensorAltimeter: '常开', // 海拔传感器
        sensorCompass: true, // 指南针
        heySiri: true, // 是否支持 siri
        screen: {
            screenType: SCREEN_TYPE.rounded, // 屏幕样式
            type: 'LTPO OLED Retina 常亮', // 屏幕类型
            touch3D: false, // 3d touch
            brightness: 1000, // nit
            pixelDensity: 326, // ppi 像素密度
        },
        sizeSmall: {
            name: '38/40/41',
            screenSize: 40, // mm
            pixelWidth: 324,
            pixelHeight: 394,
            battery: 265.9, // mah
            batteryVoltage: 3.85, // v
            type: [
                {
                    type: '铝',
                    weight: 30.5, // g
                    height: 40, // mm
                    width: 34, // mm
                    thickness: 10.7, // mm
                },
                {
                    type: '钢',
                    weight: 39.7, // g
                    height: 40, // mm
                    width: 34, // mm
                    thickness: 10.7, // mm
                },
                {
                    type: 'ED',
                    weight: 34.6, // g
                    height: 40, // mm
                    width: 34, // mm
                    thickness: 10.7, // mm
                },
            ],
        },
        sizeLarge: {
            name: '42/44/45',
            screenSize: 44, // mm
            pixelWidth: 368,
            pixelHeight: 448,
            battery: 303.8, // mah
            batteryVoltage: 3.85, // v
            type: [
                {
                    type: '铝',
                    weight: 36.5, // g
                    height: 44, // mm
                    width: 38, // mm
                    thickness: 10.7, // mm
                },
                {
                    type: '钢',
                    weight: 47.1, // g
                    height: 44, // mm
                    width: 38, // mm
                    thickness: 10.7, // mm
                },
                {
                    type: 'ED',
                    weight: 41.3, // g
                    height: 44, // mm
                    width: 38, // mm
                    thickness: 10.7, // mm
                },
            ],
        },
        batteryChargeTime: [ // 充电时长
            {name: '80%', value: '1h'}, // h
            {name: '100%', value: '1.5h'}, // h
        ],
        storage: 32,
        cpu: {
            name: 'Apple S6',
            speed: '',
            bit: 64,
            coreCount: 2
        },
        memory: {
            type: 'DRAM',
            size: '1.5GB',
        },
        OS: {
            from: 'watchOS 7.0',
            to: '9.3.1'
        },
        appleWatchRequire: [
            {name: '', value: '>iPhone6s >iOS14'},
        ],
        model: [
            {
                name: "GPS",
                value: [
                    {name: '40', value: 'A2291'},
                    {name: '44', value: 'A2292'},
                ],
            },
            {
                name: "蜂窝",
                value: [
                    {
                        name: '北美',
                        value: [
                            {name: '40', value: 'A2293'},
                            {name: '44', value: 'A2294'},
                        ]
                    },
                    {
                        name: '欧亚太中',
                        value: [
                            {name: '40', value: 'A2375'},
                            {name: '44', value: 'A2376'},
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Apple Watch S7",
        name_short: "S7",
        pic: "https://diary-container.kylebing.cn/FquSLnx8leLIr2RmSIlKqzGA88o7",
        isNew: false,
        active: false,
        dateRelease: "2021-10-15",
        dateUnsupported: "",
        waterResistance: 'ISO 22810:2010',
        waterResistanceThickness: '50', // m
        dustResistance: 'IP6X',

        cellular: 'eSIM(可选)', // 蜂窝网络
        wifi: '802.11 b/g/n 2.4 & 5GHz',
        bluetooth: '5',
        ultraWideBand: 'U1芯片',
        sensorHeart: '3', // 心率检测版本
        sensorECG: true,
        sensorBloodOxygen: true, // 血氧检测
        sensorTemperature: false, // 温度检测器
        sensorGPS: [ // 卫星导航系统
            'GPS', 'GLONASS', 'Galileo', 'QZSS', '北斗'
        ],
        sensorAccelerometer: 32, // 加速度 g
        sensorGyroscope: '增强版本', // 陀螺仪
        sensorAmbient: true, // 光线传感器
        sensorAltimeter: '常开', // 海拔传感器
        sensorCompass: true, // 指南针
        heySiri: true, // 是否支持 siri
        screen: {
            screenType: SCREEN_TYPE.rounded, // 屏幕样式
            type: 'LTPO OLED Retina 常亮', // 屏幕类型
            touch3D: false, // 3d touch
            brightness: 1000, // nit
            pixelDensity: 326, // ppi 像素密度
        },
        sizeSmall: {
            name: '38/40/41',
            screenSize: 41, // mm
            pixelWidth: 352,
            pixelHeight: 430,
            battery: 284.2, // mah
            batteryVoltage: 3.85, // v
            type: [
                {
                    type: '铝',
                    weight: 32.0, // g
                    height: 41, // mm
                    width: 35, // mm
                    thickness: 10.74, // mm
                },
                {
                    type: '钢',
                    weight: 42.3, // g
                    height: 41, // mm
                    width: 35, // mm
                    thickness: 10.74, // mm
                },
                {
                    type: 'ED',
                    weight: 37, // g
                    height: 41, // mm
                    width: 35, // mm
                    thickness: 10.74, // mm
                },
            ],
        },
        sizeLarge: {
            name: '42/44/45',
            screenSize: 45, // mm
            pixelWidth: 396,
            pixelHeight: 484,
            battery: 308.8, // mah
            batteryVoltage: 3.85, // v
            type: [
                {
                    type: '铝',
                    weight: 38.8, // g
                    height: 45, // mm
                    width: 38, // mm
                    thickness: 10.74, // mm
                },
                {
                    type: '钢',
                    weight: 51.5, // g
                    height: 45, // mm
                    width: 38, // mm
                    thickness: 10.74, // mm
                },
                {
                    type: 'ED',
                    weight: 45.1, // g
                    height: 45, // mm
                    width: 38, // mm
                    thickness: 10.74, // mm
                },
            ],
        },
        batteryChargeTime: [ // 充电时长
            {name: '80%', value: '45min'}, // h
            {name: '100%', value: '75min'}, // h
        ],
        storage: 32,
        cpu: {
            name: 'Apple S7',
            speed: '',
            bit: 64,
            coreCount: 2
        },
        memory: {
            type: 'DRAM',
            size: '1.5GB',
        },
        OS: {
            from: 'watchOS 8.0',
            to: '9.3.1'
        },
        appleWatchRequire: [
            {name: '', value: '>iPhone6s >iOS15'},
        ],
        model: [
            {
                name: "GPS",
                value: [
                    {name: '41', value: 'A2473'},
                    {name: '45', value: 'A2474'},
                ],
            },
            {
                name: "蜂窝",
                value: [
                    {
                        name: '北美',
                        value: [
                            {name: '41', value: 'A2475'},
                            {name: '45', value: 'A2477'},
                        ]
                    },
                    {
                        name: '欧亚太中',
                        value: [
                            {name: '41', value: 'A2476'},
                            {name: '45', value: 'A2478'},
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Apple Watch SE2",
        name_short: "SE2",
        pic: "https://diary-container.kylebing.cn/FqV0tZ6H6JbrI_7kmHJUr8_ruEQ_",
        isNew: true,
        active: false,
        dateRelease: "2022-09-16",
        dateUnsupported: "",
        waterResistance: 'ISO 22810:2010',
        waterResistanceThickness: '50', // m
        dustResistance: '',

        cellular: 'eSIM(可选)', // 蜂窝网络
        wifi: '802.11 b/g/n 2.4GHz',
        bluetooth: '5.3',
        ultraWideBand: '',
        sensorHeart: '2', // 心率检测版本
        sensorECG: false,
        sensorBloodOxygen: false, // 血氧检测
        sensorTemperature: false, // 温度检测器
        sensorGPS: [ // 卫星导航系统
            'GPS', 'GLONASS', 'Galileo', 'QZSS'
        ],
        sensorAccelerometer: 'High-g', // 加速度 g
        sensorGyroscope: '高灵敏度', // 陀螺仪
        sensorAmbient: true, // 光线传感器
        sensorAltimeter: '常开', // 海拔传感器
        sensorCompass: true, // 指南针
        heySiri: true, // 是否支持 siri
        screen: {
            screenType: SCREEN_TYPE.rounded, // 屏幕样式
            type: 'LTPO OLED Retina', // 屏幕类型
            touch3D: false, // 3d touch
            brightness: 1000, // nit
            pixelDensity: 326, // ppi 像素密度
        },
        sizeSmall: {
            name: '38/40/41',
            screenSize: 40, // mm
            pixelWidth: 324,
            pixelHeight: 394,
            battery: 284.2, // mah
            batteryVoltage: 3.85, // v
            type: [
                {
                    type: '铝',
                    weight: 27.9, // g
                    height: 40, // mm
                    width: 34, // mm
                    thickness: 10.7, // mm
                },

            ],
        },
        sizeLarge: {
            name: '42/44/45',
            screenSize: 44, // mm
            pixelWidth: 368,
            pixelHeight: 448,
            battery: 308.8, // mah
            batteryVoltage: 3.85, // v
            type: [
                {
                    type: '铝',
                    weight: 33, // g
                    height: 44, // mm
                    width: 38, // mm
                    thickness: 10.7, // mm
                },
            ],
        },
        batteryChargeTime: [ // 充电时长
            {name: '80%', value: '1.5h'}, // h
            {name: '100%', value: '2.5h'}, // h
        ],
        storage: 32,
        cpu: {
            name: 'Apple S8',
            speed: '',
            bit: 64,
            coreCount: 2
        },
        memory: {
            type: 'DRAM',
            size: '1.5GB',
        },
        OS: {
            from: 'watchOS 8.0',
            to: '9.3.1'
        },
        appleWatchRequire: [
            {name: '', value: '>iPhone8 >iOS16'},
        ],
        model: [
            {
                name: "GPS",
                value: [
                    {name: '40', value: 'A2722'},
                    {name: '44', value: 'A2723'},
                ],
            },
            {
                name: "蜂窝",
                value: [
                    {
                        name: '北美',
                        value: [
                            {name: '40', value: 'A2726'},
                            {name: '44', value: 'A2727'},
                        ]
                    },
                    {
                        name: '欧亚太',
                        value: [
                            {name: '40', value: 'A2725'},
                            {name: '44', value: 'A2724'},
                        ]
                    },
                    {
                        name: '中国',
                        value: [
                            {name: '40', value: 'A2855'},
                            {name: '44', value: 'A2856'},
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Apple Watch S8",
        name_short: "S8",
        pic: "https://diary-container.kylebing.cn/Fsuj2_dZBCWjVfyVB4Y5tPFqMkdq",
        isNew: true,
        active: false,
        dateRelease: "2022-09-16",
        dateUnsupported: "",
        waterResistance: 'ISO 22810:2010',
        waterResistanceThickness: '50', // m
        dustResistance: 'IP6X',

        cellular: 'eSIM(可选)', // 蜂窝网络
        wifi: '802.11 b/g/n 2.4 & 5GHz',
        bluetooth: '5.3',
        ultraWideBand: 'U1芯片',
        sensorHeart: '3', // 心率检测版本
        sensorECG: true,
        sensorBloodOxygen: true, // 血氧检测
        sensorTemperature: true, // 温度检测器
        sensorGPS: [ // 卫星导航系统
            'GPS', 'GLONASS', 'Galileo', 'QZSS', '北斗'
        ],
        sensorAccelerometer: 'High-g', // 加速度 g
        sensorGyroscope: '高灵敏度', // 陀螺仪
        sensorAmbient: true, // 光线传感器
        sensorAltimeter: '常开', // 海拔传感器
        sensorCompass: true, // 指南针
        heySiri: true, // 是否支持 siri
        screen: {
            screenType: SCREEN_TYPE.rounded, // 屏幕样式
            type: 'LTPO OLED Retina 常亮', // 屏幕类型
            touch3D: false, // 3d touch
            brightness: 1000, // nit
            pixelDensity: 326, // ppi 像素密度
        },
        sizeSmall: {
            name: '38/40/41',
            screenSize: 41, // mm
            pixelWidth: 352,
            pixelHeight: 430,
            battery: 284.2, // mah
            batteryVoltage: 3.85, // v
            type: [
                {
                    type: '铝',
                    weight: 32.0, // g
                    height: 41, // mm
                    width: 35, // mm
                    thickness: 10.74, // mm
                },
                {
                    type: '钢',
                    weight: 42.3, // g
                    height: 41, // mm
                    width: 35, // mm
                    thickness: 10.74, // mm
                },
            ],
        },
        sizeLarge: {
            name: '42/44/45',
            screenSize: 45, // mm
            pixelWidth: 396,
            pixelHeight: 484,
            battery: 308.8, // mah
            batteryVoltage: 3.85, // v
            type: [
                {
                    type: '铝',
                    weight: 38.8, // g
                    height: 45, // mm
                    width: 38, // mm
                    thickness: 10.74, // mm
                },
                {
                    type: '钢',
                    weight: 51.5, // g
                    height: 45, // mm
                    width: 38, // mm
                    thickness: 10.74, // mm
                },
            ],
        },
        batteryChargeTime: [ // 充电时长
            {name: '80%', value: '45min'}, // h
            {name: '100%', value: '75min'}, // h
        ],
        storage: 32,
        cpu: {
            name: 'Apple S8',
            speed: '',
            bit: 64,
            coreCount: 2
        },
        memory: {
            type: 'DRAM',
            size: '1.5GB',
        },
        OS: {
            from: 'watchOS 9.0',
            to: '9.3.1'
        },
        appleWatchRequire: [
            {name: '', value: '>iPhone8 >iOS16'},
        ],
        model: [
            {
                name: "GPS",
                value: [
                    {name: '41', value: 'A2770'},
                    {name: '45', value: 'A2771'},
                ],
            },
            {
                name: "蜂窝",
                value: [
                    {
                        name: '北美',
                        value: [
                            {name: '41', value: 'A2772'},
                            {name: '45', value: 'A2774'},
                        ]
                    },
                    {
                        name: '欧亚太',
                        value: [
                            {name: '41', value: 'A2773'},
                            {name: '45', value: 'A2775'},
                        ]
                    },
                    {
                        name: '中国',
                        value: [
                            {name: '41', value: 'A2857'},
                            {name: '45', value: 'A2858'},
                        ]
                    }
                ]
            }
        ]
    },
    {
        name: "Apple Watch Ultra",
        name_short: "Ultra",
        pic: "https://diary-container.kylebing.cn/FjbZvcUX4mjxpaz_NTt1Sdy5HapX",
        isNew: true,
        active: false,
        dateRelease: "2022-09-23",
        dateUnsupported: "",
        waterResistance: 'ISO 22810',
        waterResistanceThickness: '100', // m
        dustResistance: 'IP6X',

        cellular: 'eSIM', // 蜂窝网络
        wifi: '802.11 b/g/n 2.4 & 5GHz',
        bluetooth: '5.3',
        ultraWideBand: 'U1芯片',
        sensorHeart: '3', // 心率检测版本
        sensorECG: true,
        sensorBloodOxygen: true, // 血氧检测
        sensorTemperature: true, // 温度检测器
        sensorGPS: [ // 卫星导航系统
            'GPS', 'GLONASS', 'Galileo', 'QZSS', '北斗'
        ],
        sensorAccelerometer: 'High-g', // 加速度 g
        sensorGyroscope: '高灵敏度', // 陀螺仪
        sensorAmbient: true, // 光线传感器
        sensorAltimeter: '常开', // 海拔传感器
        sensorCompass: true, // 指南针
        heySiri: true, // 是否支持 siri
        screen: {
            screenType: SCREEN_TYPE.rounded, // 屏幕样式
            type: 'LTPO OLED Retina 常亮', // 屏幕类型
            touch3D: false, // 3d touch
            brightness: 2000, // nit
            pixelDensity: 338, // ppi 像素密度
        },
        sizeLarge: {
            name: '49',
            screenSize: 49, // mm
            pixelWidth: 410,
            pixelHeight: 502,
            battery: 542, // mah
            batteryVoltage: 3.86, // v
            type: [
                {
                    type: 'Ultra',
                    weight: 61.3, // g
                    height: 49, // mm
                    width: 44, // mm
                    thickness: 14.4, // mm
                },
            ],
        },
        batteryChargeTime: [ // 充电时长
            {name: '80%', value: '1h'}, // h
            {name: '100%', value: '1.5h'}, // h
        ],
        storage: 32,
        cpu: {
            name: 'Apple S8',
            speed: '',
            bit: 64,
            coreCount: 2
        },
        memory: {
            type: 'DRAM',
            size: '1.5GB',
        },
        OS: {
            from: 'watchOS 9.0',
            to: '9.3.1'
        },
        appleWatchRequire: [
            {name: '', value: '>iPhone8 >iOS16'},
        ],
        model: [
            {
                name: "蜂窝",
                value: [
                    {
                        name: '北美',
                        value: [
                            {name: '49', value: 'A2622'},
                        ]
                    },
                    {
                        name: '欧亚太',
                        value: [
                            {name: '49', value: 'A2648'},
                        ]
                    },
                    {
                        name: '中国',
                        value: [
                            {name: '49', value: 'A2859'},
                        ]
                    }
                ]
            }
        ]
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
        // 浏览器参数
        portraitMode: false,
        mobileMode: false,
        latestOS: latestOS,
        appleWatches: appleWatches.reverse(),
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
        linkAddress: 'https://kylebing.cn/tools/apple-watch/',
        linkQQ: 'https://jq.qq.com/?_wv=1027&k=Z8E0HrWA'
    },
    mounted() {
        // 全屏相关
        let chromeCore = /Chrome/i.test(navigator.userAgent)
        let mobileMode = /Mobile/i.test(navigator.userAgent)
        this.portraitMode = window.innerWidth > window.innerHeight
        this.mobileMode = mobileMode
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
