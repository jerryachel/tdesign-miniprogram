import Toast from 'tdesign-miniprogram/toast/index';

Component({
  data: {
    visible: false,
    showIndex: false,
    closeBtn: false,
    deleteBtn: false,
    images: [],
  },
  methods: {
    clickHandle() {
      this.setData({
        images: [
          'https://tdesign.gtimg.com/miniprogram/images/swiper1.png',
          'https://tdesign.gtimg.com/miniprogram/images/swiper2.png',
        ],
        showIndex: true,
        visible: true,
        closeBtn: true,
        deleteBtn: true,
      });
    },
    onChange(e) {
      const {
        detail: { index },
      } = e;
      Toast({
        context: this,
        selector: '#t-toast',
        message: `翻到第${index + 1}个`,
      });
    },

    onDelete(e) {
      const {
        detail: { index },
      } = e;
      Toast({
        context: this,
        selector: '#t-toast',
        message: `删除第${index + 1}个`,
      });
    },

    onClose(e) {
      const {
        detail: { trigger },
      } = e;
      if (trigger === 'overlay') {
        Toast({
          context: this,
          selector: '#t-toast',
          message: '点击overlay关闭',
        });
      } else if (trigger === 'button') {
        Toast({
          context: this,
          selector: '#t-toast',
          message: `点击button关闭`,
        });
      }
      this.setData({
        visible: false,
      });
    },
  },
});
