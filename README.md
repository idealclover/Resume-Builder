> 🤣不写简历还真以为自己挺牛逼呢 QAQ

## Resume - 傻翠自己的简历生成引擎

根据传入的```data.json```数据生成简历

### 食用方法

1. clone this repository ``` git clone https://github.com/idealclover/Resume.git```
2. 进入目录并安装依赖 ```npm install```
3. 按照数据格式填写```data.json```
4. 启动服务器 ```node index.js```
5. 打开 ```127.0.0.1:3000```查看效果

### 样式说明

//TODO

### 数据格式

```
{
    "name": "",
    "language": "zh-cn",
    "contact": {
        "address": "",
        "phone": "",
        "email": "",
        "blog": ""
    },
    "categories":{
        "类别1（如：教育背景）": [
            {
                "name": "项目1（如：南京大学商学院）",
                "time": "",
                "position": "",
                "details": [
                    "具体描述1",
                    "具体描述2",
                    ...
                ]
            },
            项目2，项目3...
        ],
        类别2，类别3...
    }
}
```
