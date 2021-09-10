<template>
  <h1>{{ msg }}asdasd</h1>
  <div id="container"></div>
</template>

<script>
import img from '../assets/logo.png'
export default {
  name: "TestMap",
  props: {},

  data() {
    return {
      msg: "测试vue3渲染地图",
    };
  },
  mounted() {
    this.$nextTick(function () {
      // 仅在渲染整个视图之后运行的代码
      var center = new TMap.LatLng(39.954104, 116.357503);
      //定义map变量，调用 TMap.Map() 构造函数创建地图
      var map = new TMap.Map(document.getElementById("container"), {
        center: center, //设置地图中心点坐标
        zoom: 17, //设置地图缩放级别
        pitch: 43.5, //设置俯仰角
        rotation: 45, //设置地图旋转角度
        viewMode: "3D",
      });

      //   setTimeout(() => {map.setCenter(new TMap.LatLng(39.908802,116.397502))}, 3000);

      map.on("click", this.testEvent);
      var markerLayer = new TMap.MultiMarker({
        map: map, //指定地图容器
        //样式定义
        styles: {
          //创建一个styleId为"myStyle"的样式（styles的子属性名即为styleId）
          myStyle: new TMap.MarkerStyle({
            width: 25, // 点标记样式宽度（像素）
            height: 35, // 点标记样式高度（像素）
            //焦点在图片中的像素位置，一般大头针类似形式的图片以针尖位置做为焦点，圆形点以圆心位置为焦点
            anchor: { x: 16, y: 32 },
          }),
        },
        //点标记数据数组
        geometries: [
          {
            id: "1", //点标记唯一标识，后续如果有删除、修改位置等操作，都需要此id
            position: new TMap.LatLng(39.954104, 116.357503), //点标记坐标位置
            properties: {
              //自定义属性
              title: "marker1",
            },
          },
          {
            //第二个点标记
            id: "2",
            position: new TMap.LatLng(39.964104, 116.357503),
            properties: {
              title: "marker2",
            },
          },
          {
            //第二个点标记
            id: "3",
            position: new TMap.LatLng(39.965104, 116.357503),
            properties: {
              title: "marker3",
            },
          },
          {
            //第二个点标记
            id: "4",
            position: new TMap.LatLng(39.966104, 116.357503),
            properties: {
              title: "marker4",
            },
          },
        ],
      });

      var path = [
        //多边形的位置信息
        new TMap.LatLng(40.041054, 116.272303),
        new TMap.LatLng(40.039419, 116.272721),
        new TMap.LatLng(40.039764, 116.274824),
        new TMap.LatLng(40.041374, 116.274491),
      ];
      //初始化polygon
      var polygon = new TMap.MultiPolygon({
        id: "polygon-layer", //图层id
        map, //显示多边形图层的底图
        styles: {
          //多边形的相关样式
          polygon: new TMap.PolygonStyle({
            color: "#3777FF", //面填充色
            showBorder: true, //是否显示拔起面的边线
            borderColor: "#00FFFF", //边线颜色
          }),
        },
        geometries: [
          {
            id: "polygon", //多边形图形数据的标志信息
            styleId: "polygon", //样式id
            paths: path, //多边形的位置信息
            properties: {
              //多边形的属性数据
              title: "polygon",
            },
          },
        ],
      });

      //创建InfoWindow实例，并进行初始化
      var infoWindow = new TMap.InfoWindow({
        map: map,
        position: center,
        //设置infoWindow，content支持直接传入html代码，以实现各类内容格式需求
        content: `<div><img src="${img}"><p>Hello World!</p></div>`,
      });
    });
  },
  methods: {
    testEvent(e) {
      console.log(e);
    },
  },
};
</script>

<style>
#container {
  width: 1200px;
  height: 800px;
  margin: 0 auto;
}
</style>
