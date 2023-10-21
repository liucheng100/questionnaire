export default {
    param: {
        v1: false,
        v_1: false,
        v_2: false,
        v_3: false,
        v_new: false,
        v_part_1: 0,
        v_part_2: 0,
        v_act: 0,

    },
    test: [
        // 1
        {
            // 后端设定的id
            bg_id: 'a_1',
            // 0 类标题 1 单选 2 不定项 3 填空 4 分值題 5 图片
            type: 1,
            // 题目前面显示的标号 不填则不显示
            // 取消掉了太麻烦
            idx: "1.",
            // 标题内容
            title: "（单选）你的性别是：",
            // 设定逻辑是否显示
            appear(param: any) {
                return true;
            },
            // 选项
            opts: [
                {
                    // 后端设定的拼接前缀
                    bg_idx: 'A.',
                    // 选项内容
                    txt: '男',
                    // 选项是否显示
                    appear(param: any) {
                        return true;
                    },
                    // 绑定选择状态
                    active: false,
                    // 将active的值映射到目标变量 对于单选题@click时将全部选项的该方法执行一遍
                    tarParam(param: any) {
                        param.v1 = this.active
                    },
                    // 打开自定义选项
                    extra: 0,
                    // 附加自定义绑定值
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '女',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        param.v1 = this.active
                    },
                    extra: 0,
                    strVal: '',
                },
            ]

        },
        // 2
        {
            bg_id: 'a_2',
            type: 3,
            idx: "2.",
            title: "（填空）你的民族是：",
            appear(param: any) {
                return true;
            },
            strVal: '',
        },
        // 3
        {
            bg_id: 'a_3',
            type: 1,
            idx: "3.",
            title: "（单选）你的生源地所在区域是：",
            appear(param: any) {
                return true;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '东部地区（北京、天津、河北、上海、江苏、浙江、福建、山东、广东、海南）',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '中部地区（山西、安徽、江西、河南、湖北、湖南）',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '西部地区（内蒙古、广西、重庆、四川、贵州、云南、西藏、陕西、甘肃、青海、宁夏、新疆、新疆生产建设兵团）',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '东北地区（辽宁、吉林、黑龙江）',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '台湾',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'F.',
                    txt: '香港',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'G.',
                    txt: '澳门',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
            ]

        },
        // 4
        {
            bg_id: 'a_4',
            type: 1,
            idx: "4.",
            title: "（单选）你是：",
            appear(param: any) {
                return true;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '本科生',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        param.v_1 = this.active
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '硕士研究生',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) {
                        param.v_2 = this.active
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '博士研究生',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) {
                        param.v_3 = this.active
                    },
                    extra: 0,
                    strVal: '',
                },
            ]

        },
        // 5
        {
            bg_id: 'a_5',
            type: 1,
            idx: "5.",
            title: "你的年级是：",
            appear(param: any) {
                return true;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '一年级',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        param.v_new = this.active
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '二年级',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '三年级',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '四年级',
                    appear(param: any) {
                        return param.v_1 || param.v_3;
                    },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '五年级',
                    appear(param: any) {
                        return param.v_1;
                    },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'F.',
                    txt: '其他',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
            ]

        },
        // 6
        {
            bg_id: 'a_6',
            type: 1,
            idx: "6.",
            title: "（单选）你的政治面貌：",
            appear(param: any) {
                return true;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '中共党员',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '中共预备党员',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '共青团员',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '群众',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
            ]

        },
        // 7
        {
            bg_id: 'a_7',
            type: 1,
            idx: "7.",
            title: "（单选）你的专业所属学科类别是：",
            appear(param: any) {
                return true;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '人文社科类',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '理学类',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '工学类',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '医学类',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
            ]

        },
        // 8    B
        {
            bg_id: 'b_1',
            type: 1,
            idx: "8.",
            title: "（单选）你是在天津大学入党的，或者你正在天津大学申请入党吗？",
            appear(param: any) {
                return true;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '两者都不是',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '我是在天津大学发展入党的',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) {
                        param.v_part_1 = this.active
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '我正在天津大学申请入党',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) {
                        param.v_part_2 = this.active
                    },
                    extra: 0,
                    strVal: '',
                },
            ]

        },
        // 9
        {
            bg_id: 'b_2',
            type: 2,
            idx: " ",
            title: "（不定项选择）你在天津大学申请入党的过程中，遇到的困难主要有",
            appear(param: any) {
                return param.v_part_1 || param.v_part_2;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '不清楚申请入党的流程',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '不清楚撰写各类材料的规范',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '入党申请人结业考试难度大',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '党组织的培养联系较少',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '学制较短，培养周期紧张',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'F.',
                    txt: '缺乏了解认识党组织的机会',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'G.',
                    txt: '其他，请列出',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
            ]

        },
        // 10   3
        {
            bg_id: 'b_3',
            type: 2,
            idx: "9.",
            title: "（不定项选择）你认为优秀学生党员的标准主要包括",
            appear(param: any) {
                return 1;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '学业表现优异',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '思想政治理论水平高',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '积极参与公益志愿服务工作',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '担任班团组织、社团的骨干',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '日常生活中与同学沟通联系紧密',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'F.',
                    txt: '在带动同学学业和思想进步上，作出实际贡献',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'G.',
                    txt: '在较为困难局面中常常起到表率作用',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'H.',
                    txt: '其他，请列出',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
            ]

        },
        // 10   4
        {
            bg_id: 'b_4',
            type: 2,
            idx: "10.",
            title: "（不定项选择）你认为学生党支部发挥战斗堡垒作用的方式主要包括",
            appear(param: any) {
                return 1;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '帮助广大同学提升思想认识水平',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '帮助广大同学解决学业困难',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '组织广大同学开展校园文化活动',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '围绕同学日常生活开展志愿服务',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '在参与学校治理上发挥积极作用',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'F.',
                    txt: '严格对支部党员的教育管理',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'G.',
                    txt: '其他，请列出',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
            ]

        },
        // 10   5
        {
            bg_id: 'b_5',
            type: 1,
            idx: "11.",
            title: "（单选）你认为身边的党员能否起到先锋模范作用？",
            appear(param: any) {
                return 1;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '多数能在各方面起到先锋模范作用',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '基本能在各方面起到先锋模范作用',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '和一般普通同学没有区别',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '还不如一般普通同学',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
            ]
        },
        // 10   6
        {
            bg_id: 'b_6',
            type: 1,
            idx: "12.",
            title: "你是否参与过主题教育相关的学习活动？",
            appear(param: any) {
                return 1;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '是',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        param.v_act = this.active
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '否',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
            ]
        },
        // 10   7
        {
            bg_id: 'b_7',
            type: 2,
            idx: "",
            title: "（不定项选择）主题教育期间，你参加过哪些学习教育活动？",
            appear(param: any) {
                return param.v_act;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '主题报告',
                    appear(param: any) {
                        return !param.v_14;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '专项实践',
                    appear(param: any) { return !param.v_14; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '读书会',
                    appear(param: any) { return !param.v_14; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '主题班团会',
                    appear(param: any) { return !param.v_14; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '交流座谈',
                    appear(param: any) { return !param.v_14; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'F.',
                    txt: '其他',
                    appear(param: any) { return !param.v_14; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
            ]
        },
        // 10   c 1
        // 仅面向本科&&新生
        {
            bg_id: 'c_1',
            type: 1,
            // idx: "13.",
            title: "（单选）你对学校整体迎新工作是否满意",
            appear(param: any) {
                return param.v_1 && param.v_new;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '非常满意',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '比较满意',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '基本满意',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '不太满意',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '非常不满意',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
            ]
        },
        // 10   c 1
        // 仅面向本科&&新生
        {
            bg_id: 'c_2',
            type: 2,
            title: "（不定项选择）你报考天津大学的原因是？",
            appear(param: any) {
                return param.v_1 && param.v_new;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '天津大学的办学水平、师资力量和科研水平吸引我',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '天津大学作为中国第一所现代大学，其深厚的历史底蕴吸引我',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '天津这座城市的历史底蕴和地理位置吸引我',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '家人、老师、朋友推荐',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '其他',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
            ]
        },
        // 10   c 3
        // 仅面向本科&&新生
        {
            bg_id: 'c_3',
            type: 2,
            title: "（不定项选择）学校为每名本科新生安排师友导师，你期待从师友导师身上获得哪些方面的指导帮助？",
            appear(param: any) {
                return param.v_1 && param.v_new;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '学业指导',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '专业背景介绍',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '兴趣爱好培养',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '职业规划引领',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '人际关系处理',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '其他',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
            ],
        },
        // 10   c 4
        // 仅面向本科&&新生
        {
            bg_id: 'c_4',
            type: 2,
            title: "（不定项选择）你认为进入大学在哪些方面可能存在适应问题：",
            appear(param: any) {
                return param.v_1 && param.v_new;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '生活学习环境',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '自我管理',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '心理适应',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '学习方式方法',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '人际关系',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '其他',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
            ]
        },
        // 仅面向 研究生&&新生
        {
            bg_id: 'c_5',
            type: 1,
            title: "（单选）你的本科（硕士）学校是否为天津大学？",
            appear(param: any) {
                return param.v_2 && param.v_new;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '是',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '不是',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
            ]
        },
        // 仅面向 研究生&&新生
        {
            bg_id: 'c_6',
            type: 1,
            title: "（单选）你对研究生求学生涯的期待是？",
            appear(param: any) {
                return param.v_2 && param.v_new;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '多发论文，打牢专业基础',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '参与项目，努力将研究成果运用于实践',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '参加学生工作，锻炼自身软实力',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '发展兴趣爱好，关注运动、休闲、美食等，做一个有趣的人',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '其他',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
            ]
        },
        // 仅面向 研究生&&新生
        {
            bg_id: 'c_7',
            type: 2,
            title: "（不定项选择）你认为在天津大学读研有哪些方面的优势？",
            appear(param: any) {
                return param.v_2 && param.v_new;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '学校知名度',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '校园文化',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '师资队伍',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '科研条件',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '学术氛围',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'F.',
                    txt: '校园环境',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'G.',
                    txt: '学校对学生生活的关注',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'H.',
                    txt: '其他',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
            ]
        },
        // 仅面向 研究生&&!新生
        {
            bg_id: 'c_8',
            type: 1,
            title: "（单选）你在学业科研方面，感到压力",
            appear(param: any) {
                return param.v_2 && !param.v_new;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '非常大',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '比较大',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '还可以',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '压力比较小',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '几乎没有压力',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
            ]
        },
        // 仅面向 研究生&&!新生
        {
            bg_id: 'c_9',
            type: 2,
            title: "（不定项选择）你希望在哪些方面与导师加强互动",
            appear(param: any) {
                return param.v_2 && !param.v_new;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '有关科研方法的交流沙龙',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '有关职业生涯规划的辅导',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '与导师外出参观实践',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '在咖啡厅、生活园区等空间与导师谈心',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '与导师共同参与文体活动',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'F.',
                    txt: '其他',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
            ]
        },
        // 仅面向 研究生&&!新生
        {
            bg_id: 'c_10',
            type: 2,
            max: 3,
            title: "（不定项选择，最多选3项）你选择读研的主要原因是：",
            appear(param: any) {
                return param.v_2 && !param.v_new;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '对科研感兴趣',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '希望继续充实自己，提高专业技能',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '希望找到更好的工作',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '现有学历限制了自己的发展',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '对本科不满意，希望有一个新的平台',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'F.',
                    txt: '为出国做准备',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'G.',
                    txt: '不想工作，想再过几年学习生活',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'H.',
                    txt: '父母等家里人的期望',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'I.',
                    txt: '其他',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
            ]
        },
        // all
        {
            bg_id: 'c_11',
            type: 2,
            title: "（不定项选择）你日常通过何种渠道反映针对学校相关问题的意见建议？",
            appear(param: any) {
                return true;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '校领导接待日',
                    appear(param: any) {
                        return !param.v_25;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '校领导午餐会',
                    appear(param: any) { return !param.v_25; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '校长信箱',
                    appear(param: any) { return !param.v_25; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '微北洋校务专区',
                    appear(param: any) { return !param.v_25; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '学生会、研究生会权益代表',
                    appear(param: any) { return !param.v_25; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'F.',
                    txt: '辅导员、班主任、师友导师、研究生导师等',
                    appear(param: any) { return !param.v_25; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'G.',
                    txt: '无渠道',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) {
                        param.v_25 = this.active
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'H.',
                    txt: '其他',
                    appear(param: any) { return !param.v_25; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
            ]
        },
        // all
        {
            bg_id: 'c_12',
            type: 2,
            title: "（不定项选择）你认为学校应该在哪些方面更多的关注学生？",
            appear(param: any) {
                return true;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '生涯规划',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '学习压力',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '生活质量',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '科研环境',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '就业择业',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'F.',
                    txt: '其他',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
            ]
        },
        // all
        {
            bg_id: 'c_13',
            type: 1,
            title: "（单选）你是否了解学校的资助政策或项目",
            appear(param: any) {
                return true;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '非常了解',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '比较了解',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '一般',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '不太了解',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '完全不了解',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
            ]
        },
        // all
        {
            bg_id: 'c_14',
            type: 2,
            title: "（不定项选择）你是通过以下哪些途径知晓资助政策的？",
            appear(param: any) {
                return true;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '学校宣传资料（楼宇宣传海报、学生手册等）',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '辅导员老师讲解',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '班级资助专员介绍',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '网络媒体（网站、公众号等）',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '招生录取环节（新生资助宣讲、家访等）',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'F.',
                    txt: '亲戚朋友、学长学姐介绍',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'G.',
                    txt: '其他',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
            ]
        },
        // all
        {
            bg_id: 'c_15',
            type: 1,
            title: "（单选）你现在最常参与劳动的方式是",
            appear(param: any) {
                return true;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '日常生活劳动',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '专业实践性劳动',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '社会实践性劳动',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '公益性劳动',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
            ]
        },
        // all
        {
            bg_id: 'c_16',
            type: 1,
            title: "（单选）你认为学校和学院开展劳动教育最有效的途径是",
            appear(param: any) {
                return true;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '开展专门课程，举办专题报告讲座，提升学生对马克思主义劳动观的认识',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '大力开展丰富多彩的劳动实践活动，为学生自主劳动提供资源',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '建立学生劳动素养评价体系和评奖评优机制，大力弘扬朋辈先进典型',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '加强校园文化建设，营造劳动最光荣、劳动最崇高、劳动最伟大、劳动最美丽的校园氛围',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '提升教师劳动意识和劳动素养，用言传身教影响和带动学生',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
            ]
        },
        // all
        {
            bg_id: 'c_17',
            type: 1,
            title: "（单选）你接受社会或学校防范电信网络诈骗教育的频次如何：",
            appear(param: any) {
                return true;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '每月多次',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '每月一次',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '每学期一次',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '基本没有',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
            ]
        },
        // all
        {
            bg_id: 'c_18',
            type: 1,
            title: "（单选）你认为何种形式的反诈教育效果比较好：",
            appear(param: any) {
                return true;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '主题班会',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '讲座报告',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '警示案例推送',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '线下展览',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
            ]
        },
        // all
        {
            bg_id: 'c_19',
            type: 1,
            title: "（单选）你在宿舍、教室、实验室是否会留意消防设施与消防通道，是否学过灭火与逃生技能：",
            appear(param: any) {
                return true;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '有留意，学过',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '有留意，没学过',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '没留意，学过',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '没留意，没学过',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
            ]
        },
        // all
        {
            bg_id: 'c_20',
            type: 1,
            title: "（单选）你对校园的消防环境是否感到安全？",
            appear(param: any) {
                return true;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '非常安全',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '比较安全',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '一般',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '不太安全',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '很不安全',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
            ]
        },
        // all
        {
            bg_id: 'c_21',
            type: 2,
            title: "（不定项选择）新学期你有哪些期待？",
            appear(param: any) {
                return true;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '学业/科研有所突破',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '参加更多校园活动',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '开始一段恋爱',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '认识和深度了解天津这座城市',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '好好规划剩余的大学时光',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'F.',
                    txt: '培养艺术、体育等方面的兴趣爱好',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'G.',
                    txt: '顺其自然',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'H.',
                    txt: '没想好',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'I.',
                    txt: '其他',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
            ]
        },
        // d
        {
            bg_id: 'd_1',
            type: 2,
            title: "（不定项选择与填空）在校期间，你在那些方面感到有压力，具体表现为？",
            appear(param: any) {
                return true;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '身体状况',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 1,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '经济支出',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '居住环境',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '宿舍关系',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '恋爱关系',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
                {
                    bg_idx: 'F.',
                    txt: '家庭关系',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
                {
                    bg_idx: 'G.',
                    txt: '师生关系',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
                {
                    bg_idx: 'H.',
                    txt: '朋辈关系',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
                {
                    bg_idx: 'I.',
                    txt: '学业进展',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
                {
                    bg_idx: 'J.',
                    txt: '职业生涯',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
                {
                    bg_idx: 'K.',
                    txt: '饮食及睡眠情况',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
                {
                    bg_idx: 'L.',
                    txt: '其他：',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
            ]
        },
        // d
        {
            bg_id: 'd_2',
            type: 5,
            noImg: true,
            title: "(单选) 上述压力事件在多大程度上对您的生活造成了影响?",
            appear(param: any) {
                return true;
            },
            value: 1,
        },
        // d
        {
            bg_id: 'd_3',
            type: 2,
            title: "（不定项选择）您通常如何排解负面情绪？",
            appear(param: any) {
                return true;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '压抑自我',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '和辅导员沟通',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '寻求心理健康服务（校内或校外）',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '与室友、同学、家人或朋友诉说',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '通过网络平台或社交媒体宣泄',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'F.',
                    txt: '通过看书、画画或体育运动等排解',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'G.',
                    txt: '通过打游戏、追剧等方式转移注意力',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'H.',
                    txt: '其他：',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
            ]
        },
        // d
        {
            bg_id: 'd_4',
            type: 5,
            title: "下面7组图片依次代表了你与他者关系的亲密度，图1代表你与他者毫无关系，图7代表你与他者关系非常亲密。请选择最能代表您和他者关系的一组图片。",
            appear(param: any) {
                return true;
            },
            value: 0,
        },
        // d    type4
        {
            bg_id: 'd_5',
            type: 4,
            title: "您觉得生命中还有哪些对你来说重要的关系？请写在下面（评分1~7）：",
            appear(param: any) {
                return true;
            },
            subs: [
                {
                    txt: '我和同学',
                    // appear(param:any){
                    //     return true;
                    // },
                    value: 1,
                    // tarParam(param:any){
                    //     return;
                    // },
                },
                {
                    txt: '我和舍友',
                    value: 1,
                },
                {
                    txt: '我和老师',
                    value: 1,
                },
                {
                    txt: '我和班级/课题组',
                    value: 1,
                },
                {
                    txt: '我和学校',
                    value: 1,
                },
                {
                    txt: '我和社团',
                    value: 1,
                },
                {
                    txt: '我和家人',
                    value: 1,
                },
                {
                    txt: '我和伴侣',
                    value: 1,
                },
                {
                    txt: '我和兴趣爱好',
                    value: 1,
                },
                {
                    txt: '我和美食',
                    value: 1,
                },
                {
                    txt: '我和国家',
                    value: 1,
                },
            ]
        },
        // d
        {
            bg_id: 'd_6',
            type: 2,
            title: "（不定项选择）您使用过哪些形式的校内心理健康服务资源？",
            appear(param: any) {
                return true;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '没有使用过',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        param.v_5_1 = this.active
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '24小时心理援助热线',
                    appear(param: any) { return !param.v_5_1; },
                    active: false,
                    tarParam(param: any) {
                        param.v_5_2 = this.active
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '心理咨询',
                    appear(param: any) { return !param.v_5_1; },
                    active: false,
                    tarParam(param: any) {
                        param.v_5_3 = this.active
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '心理治疗',
                    appear(param: any) { return !param.v_5_1; },
                    active: false,
                    tarParam(param: any) {
                        param.v_5_4 = this.active
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '药物治疗',
                    appear(param: any) { return !param.v_5_1; },
                    active: false,
                    tarParam(param: any) {
                        param.v_5_5 = this.active
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'F.',
                    txt: '心理评估',
                    appear(param: any) { return !param.v_5_1; },
                    active: false,
                    tarParam(param: any) {
                        param.v_5_6 = this.active
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'G.',
                    txt: '危机干预',
                    appear(param: any) { return !param.v_5_1; },
                    active: false,
                    tarParam(param: any) {
                        param.v_5_7 = this.active
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'H.',
                    txt: '团体活动',
                    appear(param: any) { return !param.v_5_1; },
                    active: false,
                    tarParam(param: any) {
                        param.v_5_8 = this.active
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'I.',
                    txt: '素质拓展',
                    appear(param: any) { return !param.v_5_1; },
                    active: false,
                    tarParam(param: any) {
                        param.v_5_9 = this.active
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'J.',
                    txt: '心协树洞、解忧电台、心情传话筒等活动',
                    appear(param: any) { return !param.v_5_1; },
                    active: false,
                    tarParam(param: any) {
                        param.v_5_10 = this.active
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'K.',
                    txt: '心理讲座',
                    appear(param: any) { return !param.v_5_1; },
                    active: false,
                    tarParam(param: any) {
                        param.v_5_11 = this.active
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'L.',
                    txt: '心理科普',
                    appear(param: any) { return !param.v_5_1; },
                    active: false,
                    tarParam(param: any) {
                        param.v_5_12 = this.active
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'M.',
                    txt: '学校、学院或班级组织的心理活动',
                    appear(param: any) { return !param.v_5_1; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'N.',
                    txt: '其他',
                    appear(param: any) { return !param.v_5_1; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
            ]
        },
        // d
        {
            bg_id: 'd_7',
            type: 2,
            title: "（不定项选择）您未使用校内心理健康服务资源的原因有哪些？",
            appear(param: any) {
                return param.v_5_1;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '没有心理困扰，不需要服务',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '不知道怎么寻求服务',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '缺少时间',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '对服务的有效性持怀疑态度',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '不需要他人帮助，喜欢自己解决',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'F.',
                    txt: '经济压力',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'G.',
                    txt: '担心被歧视',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'H.',
                    txt: '担心保密问题',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'I.',
                    txt: '其他:',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
            ]
        },
        // d
        {
            bg_id: 'd_8',
            type: 1,
            title: "（单选）您觉得学校心理健康教育资源的效果怎么样？",
            appear(param: any) {
                return (param.v_5_2 ||
                    param.v_5_3 ||
                    param.v_5_4 ||
                    param.v_5_5 ||
                    param.v_5_6 ||
                    param.v_5_7 ||
                    param.v_5_8 ||
                    param.v_5_9 ||
                    param.v_5_10 ||
                    param.v_5_11 ||
                    param.v_5_12) && !param.v_5_1;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '完全没有帮助',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '有些帮助',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '比较有帮助',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '非常有帮助',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
            ]
        },
        // d
        {
            bg_id: 'd_9',
            type: 2,
            title: "（不定项选择）您需要学校心理健康教育中心提供哪些方面的帮助?",
            appear(param: any) {
                return true;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '生涯辅导',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '学业支持',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '情绪调节',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '情感关系',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '家庭关系',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'F.',
                    txt: '同辈关系',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'G.',
                    txt: '导学关系',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'H.',
                    txt: '自我探索',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'I.',
                    txt: '其他：',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
            ]
        },
        // E
        {
            bg_id: 'e_1',
            type: 1,
            title: "（单选）目前，你是否思考或探索过未来的职业目标和方向",
            appear(param: any) {
                return true;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '考虑的较为全面和充分，有较明确的目标和方向',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '正处于探索过程中，希望但尚未找到目标和方向',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '没有认真思考过，也没有尝试过探索',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '人云亦云，未经充分探索就做出了决定',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '其他（请说明）',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
            ]
        },
        // E
        {
            bg_id: 'e_2',
            type: 1,
            title: "（单选）关于未来去向的就业去向，你有哪些考虑？",
            appear(param: any) {
                return true;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '国（境）内深造',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '国（境）外深造',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '直接就业',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '自主创业',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '未考虑清楚',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'F.',
                    txt: '其他（请说明）',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
            ]
        },
        // E
        {
            bg_id: 'e_3',
            type: 2,
            title: "（不定项选择）关于未来去向的就业去向，你考虑哪些核心要素？",
            appear(param: any) {
                return true;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '薪酬福利',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '单位性质',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '发展空间',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '工作环境',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '个人兴趣',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'F.',
                    txt: '专业对口',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'G.',
                    txt: '工作地点',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'H.',
                    txt: '价值实现',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'I.',
                    txt: '稳定程度',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'J.',
                    txt: '其他：请说明',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
            ]
        },
        // E
        {
            bg_id: 'e_4',
            type: 2,
            max: 3,
            title: "（不定项选择）你更希望通过哪种形式接受就业指导教育？（最多选3项）",
            appear(param: any) {
                return true;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '就业课程',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '团体辅导',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '小型工作坊',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '实习',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '个体咨询',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'F.',
                    txt: '生涯赛事（生涯规划大赛、模拟求职大赛）',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'G.',
                    txt: '其他（请说明）',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
            ]
        },
        // E
        {
            bg_id: 'e_5',
            type: 2,
            title: "（不定项选择）对于高校就业指导，你最希望获取哪方面的资讯？",
            appear(param: any) {
                return true;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '应聘技巧',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '用人单位资讯',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '求职心理辅导',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: '职业规划辅导',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '专业出路',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'F.',
                    txt: '其他',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
            ]
        },
        // F
        {
            bg_id: 'f_1',
            type: 2,
            title: "（不定项选择）对于当前国内外热点问题，你对哪些比较关注？",
            appear(param: any) {
                return true;
            },
            opts: [
                {
                    bg_idx: 'A.',
                    txt: '贯彻落实党的二十大精神',
                    appear(param: any) {
                        return true;
                    },
                    active: false,
                    tarParam(param: any) {
                        return;
                    },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'B.',
                    txt: '教育、科技、人才“三位一体”布局',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'C.',
                    txt: '中美关系',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'D.',
                    txt: 'ChatGPT引起热议',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'E.',
                    txt: '俄乌冲突',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'F.',
                    txt: '当前高校毕业生就业形势',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'G.',
                    txt: '国产大飞机C919迎来商业首飞',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'H.',
                    txt: '日本福岛第一核电站启动核污染水排海',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'I.',
                    txt: '天津经济社会发展“十项行动”',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'J.',
                    txt: '华为手机mate60系列发布',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 0,
                    strVal: '',
                },
                {
                    bg_idx: 'K.',
                    txt: '其他',
                    appear(param: any) { return true; },
                    active: false,
                    tarParam(param: any) { return; },
                    extra: 1,
                    strVal: '',
                },
            ]
        },
    ]
}