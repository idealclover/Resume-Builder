> 🤣写简历的时候才知道自己这么菜 QAQ

## Resume - 傻翠自己的简历生成引擎

根据传入的```data.json```数据生成简历

### 效果展示

* [原始数据](https://github.com/idealclover/Resume/blob/master/data.json)
* [生成的html](https://github.com/idealclover/Resume/blob/master/examples/resume.html)
* [生成的markdown](https://github.com/idealclover/Resume/blob/master/examples/resume.md)
* [生成的pdf](https://github.com/idealclover/Resume/blob/master/examples/resume.pdf)

~~不要问我为什么没有jpg格式！！！~~

### 食用方法

1. clone this repository ``` git clone https://github.com/idealclover/Resume.git```
2. 进入目录并安装依赖 ```npm install```
3. 按照数据格式填写```data.json```
4. 输入对应指令生成简历文件

```
npm run build-all //一键生成全部格式
npm run build-html //生成html
npm run build-markdown //生成markdown
npm run build-pdf //生成pdf
```

### 样式说明与自定义

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

### Contribute

如果有任何想法或需求，可以在 [issue](https://github.com/idealclover/Resume/issues) 中告诉我们，同时我们欢迎各种 pull requests


### Open-source Licenses

This project is under Apache-2.0 license, feel free to use it under the license.
