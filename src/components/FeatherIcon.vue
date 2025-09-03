<template>
  <span v-html="svg"></span>
</template>

<script>
import feather from "feather-icons";

export default {
  name: "FeatherIcon",
  props: {
    icon: { type: String, required: true },
    width: { type: [Number, String], default: 24 },
    height: { type: [Number, String], default: 24 },
    stroke: { type: String, default: "currentColor" }
  },
  computed: {
    svg() {
      return feather.icons[this.icon].toSvg({
        width: this.width,
        height: this.height,
        stroke: this.stroke
      });
    }
  }
};
</script>
