<template>
    <div class="content">
    <div id="myChart" @mouseover="showAni" :style="{width: '700px', height: '700px'}"></div>
    </div>
</template>
<script>
export default {
    name: 'EchartsPies',
    data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted: function(){
    this.creatE();
  },
  methods: {
    creatE: function(){

        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            legend: {},
            tooltip: {
                trigger: 'axis',
                showContent: false
            },
            dataset: {
                source: [
                    ['product', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00'],
                    ['一号会议室', 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
                    ['二号会议室', 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
                    ['三号会议室', 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
                    ['四号会议室', 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
                ]
            },
            xAxis: {type: 'category'},
            yAxis: {gridIndex: 0},
            grid: {top: '55%'},
            series: [
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {type: 'line', smooth: true, seriesLayoutBy: 'row'},
                {
                    type: 'pie',
                    id: 'pie',
                    radius: '30%',
                    center: ['50%', '25%'],
                    label: {
                        formatter: '{b}: {@2012} ({d}%)'
                    },
                    encode: {
                        itemName: 'product',
                        value: '2012',
                        tooltip: '2012'
                    }
                }
            ]
        });
        myChart.on('updateAxisPointer', function (event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
            var dimension = xAxisInfo.value + 1;
            myChart.setOption({
                series: {
                    id: 'pie',
                    label: {
                        formatter: '{b}: {@[' + dimension + ']} ({d}%)'
                    },
                    encode: {
                        value: dimension,
                        tooltip: dimension
                    }
                }
            });
        }
    });
    },
   
    
  }
}
</script>
<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .content
        padding 100px
        #myChart
            position relative
            left 0
            right 0
            margin  0 auto 
</style>
