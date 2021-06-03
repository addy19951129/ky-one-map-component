<template>
  <div>
    <div class="ky-rapid-position-container" v-for="item in areaData" :key="item.adcode">
      <span class="title">{{item.name}}</span>
      <div class="item" v-for="sitem in item.districts" :key="sitem.adcode">
        <div class="label">{{sitem.name}}：</div>
        <div class="list">
          <ul>
            <li v-for="xitem in sitem.districts" :key="xitem.adcode" @click="rapidPosition(xitem)">{{xitem.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mockData from "../assets/mock/fujian";
export default {
  name: "kyRapidPosition",
  data() {
    return {
      areaData: [],
    };
  },
  created() {},
  mounted() {
    this.areaData = mockData.districts;
  },
  methods: {
    rapidPosition(item) {
      var _that = this;
      item.longitude = item.center.split(",")[0];
      item.latitude = item.center.split(",")[1];
      _that.$oneMap.mapToCenter({
        longitude: item.longitude,
        latitude: item.latitude,
        zoom: 9,
      });
    },
  },
};
</script>
<style scoped lang="scss">
.ky-rapid-position-container {
  width: 360px;
  font-size: 14px;
  .title {
    margin-bottom: 5px;
    display: block;
    font-weight: 700;
  }
  .item {
    display: flex;
    .label {
      min-width: 60px;
    }
    .list {
      flex: 1;
      ul {
        margin: 0;
        padding: 0;
        li {
          list-style: none;
          display: inline-block;
          color: #2472df;
          cursor: pointer;
          margin-right: 5px;
          margin-bottom: 5px;
        }
        li:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>
