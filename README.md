# 环形进度条
环形进度条
!(//cdn.51talk.com/apollo/images/ec2f47b66c55f63254cfc5a8abf24ae1.png)
## install
NPM
```
npm install @nat/vue-circle-progress
```
## 用法
```
<template lang="html">
     <circle :percent="percent" :width="80" :height="80" progress-color="red">
                        <div class="percent">{{percent * 100}}%</div>
                    </circle>
</template>
```
```
<script>
    import circle from '@nat/vue-circle-progress';
     export default {
            name: 'ProjectFeatures',
            components: {
                circle
            },
            methods: {
                handleClick (value) {
                    console.log('selected', value);
                }
            }
        };
</script>
```

## API
#### props
##### tabs
属性 | 说明 | 类型 | 默认值
---|---|---|---
width | 环形的宽度 | [ Number] | 68
height | 环形的高度 | [Number] | 68 
percent | 百分比 | [Number] | 0 
progressColor | 环的颜色 | [String] | #FFFFFF 
progressBarColor | 环型通道的颜色 | [String] | #FFE83C 

## 启动
```
npm run dev
```
## 编译
```
npm run build-lib
```
