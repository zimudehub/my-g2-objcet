<template>
  <div style="background:#ECECEC">
    <a-card :bordered="false" style="width: 100%">
      <a-divider orientation="left">雅虎长春</a-divider>
      <a-row>
        <a-col :span="8">
          <div id="ccHave" class="g2Wrap"></div>
        </a-col>
        <a-col :span="16">
          <div class="select">
            周期选择:&nbsp;&nbsp;&nbsp;
            <a-select default-value="day" style="width: 120px" @change="ccChange">
              <a-select-option v-for="(item) in selectArr" :key="item.val">{{item.label}}</a-select-option>
            </a-select>
          </div>
          <div id="ccOut" class="outWrap"></div>
        </a-col>
      </a-row>
      <a-divider orientation="left">雅虎瑞安</a-divider>
      <a-row>
        <a-col :span="8">
          <div id="raHave" class="g2Wrap"></div>
        </a-col>
        <a-col :span="16">
          <div class="select">
            周期选择:&nbsp;&nbsp;&nbsp;
            <a-select default-value="day" style="width: 120px" @change="raChange">
              <a-select-option v-for="(item) in selectArr" :key="item.val">{{item.label}}</a-select-option>
            </a-select>
          </div>
          <div id="raOut" class="outWrap"></div>
        </a-col>
      </a-row>
      <a-table :columns="columns" :data-source="data" style="margin-top:25px">
        <a slot="name" slot-scope="text">{{ text }}</a>
      </a-table>
    </a-card>
  </div>
</template>

<script>
import { Chart } from "@antv/g2";
import { havePie, outRect } from "../businessUtil/report";

export default {
  name: "Home",
  data() {
    return {
      ccHave: [
        { item: "空余库存", count: 40, percent: 0.4 },
        { item: "已占用库存", count: 60, percent: 0.6 },
      ],
      ccOut: [
        { name: "出库量", mouth: "Jan.", out: 18.9 },
        { name: "出库量", mouth: "Feb.", out: 28.8 },
        { name: "出库量", mouth: "Mar.", out: 39.3 },
        { name: "出库量", mouth: "Apr.", out: 81.4 },
        { name: "出库量", mouth: "May", out: 47 },
        { name: "出库量", mouth: "Jun.", out: 20.3 },
        { name: "出库量", mouth: "Jul.", out: 24 },
        { name: "出库量", mouth: "Aug.", out: 35.6 },
        { name: "入库量", mouth: "Jan.", out: 12.4 },
        { name: "入库量", mouth: "Feb.", out: 23.2 },
        { name: "入库量", mouth: "Mar.", out: 34.5 },
        { name: "入库量", mouth: "Apr.", out: 99.7 },
        { name: "入库量", mouth: "May", out: 52.6 },
        { name: "入库量", mouth: "Jun.", out: 35.5 },
        { name: "入库量", mouth: "Jul.", out: 37.4 },
        { name: "入库量", mouth: "Aug.", out: 42.4 },
      ],
      raHave: [
        { item: "空余库存", count: 27, percent: 0.27 },
        { item: "已占用库存", count: 73, percent: 0.73 },
      ],
      raOut: [
        { name: "出库量", mouth: "Jan.", out: 18.9 },
        { name: "出库量", mouth: "Feb.", out: 28.8 },
        { name: "出库量", mouth: "Mar.", out: 39.3 },
        { name: "出库量", mouth: "Apr.", out: 81.4 },
        { name: "出库量", mouth: "May", out: 47 },
        { name: "出库量", mouth: "Jun.", out: 20.3 },
        { name: "出库量", mouth: "Jul.", out: 24 },
        { name: "出库量", mouth: "Aug.", out: 35.6 },
        { name: "入库量", mouth: "Jan.", out: 12.4 },
        { name: "入库量", mouth: "Feb.", out: 23.2 },
        { name: "入库量", mouth: "Mar.", out: 34.5 },
        { name: "入库量", mouth: "Apr.", out: 99.7 },
        { name: "入库量", mouth: "May", out: 52.6 },
        { name: "入库量", mouth: "Jun.", out: 35.5 },
        { name: "入库量", mouth: "Jul.", out: 37.4 },
        { name: "入库量", mouth: "Aug.", out: 42.4 },
      ],
      raSelectVal: "day",
      ccSelectVal: "day",
      selectArr: [
        { val: "day", label: "日" },
        { val: "week", label: "周" },
        { val: "month", label: "月" },
        { val: "quarter", label: "季度" },
        { val: "year", label: "年" },
      ],
      data: [
        {
          key: "1",
          name: "John Brown",
          time: "2020年9月23日16:17:35",
          address: "New York No. 1 Lake Park, New York No. 1 Lake Park",
        },
        {
          key: "2",
          name: "Jim Green",
          time: "2020年9月23日16:17:46",
          address: "London No. 2 Lake Park, London No. 2 Lake Park",
        },
        {
          key: "3",
          name: "Joe Black",
          time: "2020年9月23日16:18:01",
          address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
        },
        {
          key: "4",
          name: "Joe Black",
          time: "2020年9月23日16:18:01",
          address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
        },
        {
          key: "5",
          name: "Joe Black",
          time: "2020年9月23日16:18:01",
          address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
        },
        {
          key: "6",
          name: "Joe Black",
          time: "2020年9月23日16:18:01",
          address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
        },
        {
          key: "7",
          name: "Joe Black",
          time: "2020年9月23日16:18:01",
          address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
        },
        {
          key: "8",
          name: "Joe Black",
          time: "2020年9月23日16:18:01",
          address: "Sidney No. 1 Lake Park, Sidney No. 1 Lake Park",
        },
      ],
      columns: [
        {
          title: "操作人",
          dataIndex: "name",
          key: "name",
        },
        {
          title: "时间",
          dataIndex: "time",
          key: "time",
          ellipsis: true,
        },
        {
          title: "操作详情",
          dataIndex: "address",
          key: "address 3",
          ellipsis: true,
        },
      ],
    };
  },
  watch: {
    raSelectVal(newVal) {},
  },
  methods: {
    raChange(val) {
      this.raSelectVal = val;
    },
    ccChange(val) {
      this.ccSelectVal = val;
    },
  },
  mounted() {
    havePie(this.ccHave, "interval", "ccHave");
    outRect(this.ccOut, "interval", "ccOut", "月");
    havePie(this.raHave, "interval", "raHave");
    outRect(this.raOut, "interval", "raOut", "月");
  },
};
</script>

<style scoped>
.g2Wrap {
  height: 260px;
}
.outWrap {
  height: 220px;
}
.select {
  height: 40px;
}
</style>
