<style lang="scss" scoped></style>

<template>
  <div>
    <div v-if="keyword" class="text-0 text-[#fcfffd]" style="line-height: 1">
      <span
        v-for="item in fSplitKeywordsFromStringText(text, [keyword])"
        class="text-16px"
        :class="[item.type ? 'text-[#F181DE]' : '']"
        v-html="item.text.replaceAll(' ', '&nbsp;')"
      ></span>
    </div>

    <div class="text-16px text-[#fcfffd]" v-else>
      {{ text }}
    </div>
  </div>
</template>

<script>
import fSplitKeywordsFromStringText from '@/assets/keywords';
export default {
  props: {
    keyword: '',
    text: '',
  },
  components: {},
  computed: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {
    fSplitKeywordsFromStringText,
  },
};
</script>
