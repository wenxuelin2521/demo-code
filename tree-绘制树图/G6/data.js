function UUIDcreatePart(length) {
    var uuidpart = "";
    for (var i = 0; i < length; i++) {
        var uuidchar = parseInt((Math.random() * 256), 10).toString(16);
        if (uuidchar.length == 1) {
            uuidchar = "0" + uuidchar;
        }
        uuidpart += uuidchar;
    }
    return uuidpart;
}

/**
 * Create a UUID
 */
function createUUID() {
    return UUIDcreatePart(4) + '-' +
        UUIDcreatePart(2) + '-' +
        UUIDcreatePart(2) + '-' +
        UUIDcreatePart(2) + '-' +
        UUIDcreatePart(6);
};




var data = {
    id: createUUID(),
    label: "电表箱",
    level: 0, // 决定层级
    status: "01", // 决定颜色
    children: [

        {
            id: createUUID(),
            label: "电表01",
            level: 1,
            status: "01",
            children: [

                {
                    id: createUUID(),
                    label: "低压出线柜01",
                    level: 2,
                    status: "01",
                    children: [

                        {
                            id: createUUID(),
                            label: "变压器01",
                            level: 3,
                            status: "03",
                            children: []
                        },
                        {
                            id: createUUID(),
                            label: "变压器02",
                            level: 3,
                            status: "05",
                            children: [

                                {
                                    id: createUUID(),
                                    label: "分支箱01",
                                    level: 4,
                                    status: "05",
                                    children: []
                                },
                                {
                                    id: createUUID(),
                                    label: "分支箱02",
                                    level: 4,
                                    status: "05",
                                    children: []
                                },
                            ]
                        },
                    ]
                },
                {
                    id: createUUID(),
                    label: "低压出线柜02",
                    level: 2,
                    status: "02",
                    children: []
                },

            ]
        },
        {
            id: createUUID(),
            label: "电表02",
            level: 1,
            status: "02",
            children: []
        },
        {
            id: createUUID(),
            label: "电表03",
            level: 1,
            status: "03",
            children: [

                {
                    id: createUUID(),
                    label: "低压出线柜01",
                    level: 2,
                    status: "01",
                    children: []
                },
                {
                    id: createUUID(),
                    label: "低压出线柜02",
                    level: 2,
                    status: "02",
                    children: [

                        {
                            id: createUUID(),
                            label: "变压器01",
                            level: 3,
                            status: "01",
                            children: []
                        },
                        {
                            id: createUUID(),
                            label: "变压器02",
                            level: 3,
                            status: "03",
                            children: []
                        },
                        {
                            id: createUUID(),
                            label: "变压器03",
                            level: 3,
                            status: "04",
                            children: []
                        },
                    ]
                },
                {
                    id: createUUID(),
                    label: "低压出线柜02",
                    level: 2,
                    status: "02",
                    children: []
                },

            ]
        },
    ]
}