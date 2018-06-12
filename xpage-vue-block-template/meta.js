const CATEGORIES = [
    '表格',
    '表单',
    '图表',
    '列表',
    '模态框',
    '筛选',
    '数据展示',
    '信息展示',
    '异常',
    '欢迎页',
    '视频',
    '其他'
];

const {
    addToRouter,
    formatDate
} = require('./util');

module.exports = {
    prompts: {
        name: {
            type: 'input',
            message: 'name',
            default: 'demo block',
            validate: (value) => {
                value = value.trim();
                if (!value) {
                    return 'name cannot be empty';
                }
                return true;
            }
        },
        version: {
            type: 'string',
            required: true,
            message: 'version',
            default: '1.0.0'
        },
        date: {
            type: 'string',
            message: 'date',
            default: formatDate(new Date())
        },
        description: {
            type: 'string',
            required: true,
            message: 'description',
            validate: (value) => {
                value = value.trim();
                if (!value) {
                    return 'description cannot be empty';
                }
                return true;
            }
        },
        categories: {
            type: 'list',
            message: 'categories',
            choices: CATEGORIES,
            required: true,
            filter: (answer) => {
                return answer;
            }
        }
    },
    complete(data, {chalk}) {
        // addToRouter(data);
    }
};
