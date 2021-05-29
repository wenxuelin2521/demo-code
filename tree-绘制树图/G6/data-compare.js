function UUIDcreatePart(length) {
  var uuidpart = "";
  for (var i = 0; i < length; i++) {
    var uuidchar = parseInt(Math.random() * 256, 10).toString(16);
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
  return (
    UUIDcreatePart(4) +
    "-" +
    UUIDcreatePart(2) +
    "-" +
    UUIDcreatePart(2) +
    "-" +
    UUIDcreatePart(2) +
    "-" +
    UUIDcreatePart(6)
  );
}

var fakeData = {
  id: createUUID(), // 节点唯一标识
  desc: "这是一条假数据",
  index: 0, // 决定这个节点使用什么类型图标：0-变压器；1-低压出线；2-二级分支；3-表箱；4-户表；
  status: 0, // 状态决定颜色：0-蓝色-未变更；1-红色-删除；2-绿色-新装；3-紫色换表；4-黄色-计量箱；
  children: [
    {
      id: createUUID(),
      desc: "电表01",
      index: 1,
      status: 1,
      children: [
        {
          id: createUUID(),
          desc: "电表01",
          index: 2,
          status: 2,
          children: [
            {
              id: createUUID(),
              desc: "电表01",
              index: 3,
              status: 3,
              children: [
                  {
                    id: createUUID(),
                    desc: "电表01",
                    index:4,
                    status: 4,
                    children: []
                  },
                  {
                    id: createUUID(),
                    desc: "电表01",
                    index:4,
                    status: 4,
                    children: []
                  },
                  {
                    id: createUUID(),
                    desc: "电表01",
                    index:4,
                    status: 4,
                    children: []
                  },
                  {
                    id: createUUID(),
                    desc: "电表01",
                    index:4,
                    status: 4,
                    children: []
                  }
              ],
            },
          ],
        },
      ],
    },
  ],
};

var fakeDataRight = {
    id: createUUID(), // 节点唯一标识
    desc: "这是一条假数据",
    index: 0, // 决定这个节点使用什么类型图标：0-变压器；1-低压出线；2-二级分支；3-表箱；4-户表；
    status: 0, // 状态决定颜色：0-蓝色-未变更；1-红色-删除；2-绿色-新装；3-紫色换表；4-黄色-计量箱；
    children: [
      {
        id: createUUID(),
        desc: "电表01",
        index: 1,
        status: 1,
        children: [
          {
            id: createUUID(),
            desc: "电表01",
            index: 2,
            status: 2,
            children: [
              {
                id: createUUID(),
                desc: "电表01",
                index: 3,
                status: 3,
                children: [
                    {
                      id: createUUID(),
                      desc: "电表01",
                      index:4,
                      status: 4,
                      children: []
                    },
                    {
                      id: createUUID(),
                      desc: "电表01",
                      index:4,
                      status: 4,
                      children: []
                    },
                    {
                      id: createUUID(),
                      desc: "电表01",
                      index:4,
                      status: 4,
                      children: []
                    },
                    {
                      id: createUUID(),
                      desc: "电表01",
                      index:4,
                      status: 4,
                      children: []
                    }
                ],
              },
            ],
          },
        ],
      },
      {
        id: createUUID(),
        desc: "电表01",
        index: 1,
        status: 1,
        children: [
          {
            id: createUUID(),
            desc: "电表01",
            index: 2,
            status: 2,
            children: [
              {
                id: createUUID(),
                desc: "电表01",
                index: 3,
                status: 3,
                children: [
                    {
                      id: createUUID(),
                      desc: "电表01",
                      index:4,
                      status: 4,
                      children: []
                    },
                    {
                      id: createUUID(),
                      desc: "电表01",
                      index:4,
                      status: 4,
                      children: []
                    },
                    {
                      id: createUUID(),
                      desc: "电表01",
                      index:4,
                      status: 4,
                      children: []
                    },
                    {
                      id: createUUID(),
                      desc: "电表01",
                      index:4,
                      status: 4,
                      children: []
                    }
                ],
              },
            ],
          },
        ],
      },
    ],
  };
