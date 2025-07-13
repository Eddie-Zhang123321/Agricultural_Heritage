import * as images from '@/assets/image.js'
import { ref } from 'vue'

// 数据定义保持不变
const searchQuery = ref('')

// 新生·探元轮播图数据
const newExplorationItems = ref([
  { image: images.ty1 },
  { image: images.ty2 },
  { image: images.ty3 },
  { image: images.ty4 },
  { image: images.ty5 },
  { image: images.ty6 },
  { image: images.ty7 }
])

// 新生·主题数据
const featuredItems = ref([
  { title: '乾隆面', image: images.food1 },
  { title: '桑叶面', image: images.food2 },
  { title: '印象一', image: images.yx1 },
  { title: '印象二', image: images.yx2 },
  { title: '渔塘一', image: images.yt1 },
  { title: '渔塘二', image: images.yt2 },
  { title: '图标一', image: images.tb1 },
  { title: '图标二', image: images.tb2 }
])

// 线稿设色数据
const lineArtItems = ref([
  { title: '鱼戏荷花', image: images.xg1 },
  { title: '荷塘月色', image: images.xg2 },
  { title: '渔舟唱晚', image: images.xg3 },
  { title: '稻花香里说丰年', image: images.xg4 },
  { title: '农耕文化', image: images.xg5 },
  { title: '乡村振兴', image: images.xg6 }
])

// 平面设计数据
const designItems = ref([
  { title: '店铺设计', image: images.pm1 },
  { title: '产品包装', image: images.pm2 },
  { title: '宣传海报', image: images.pm3 },
  { title: '品牌形象', image: images.pm4 },
  { title: '文化衍生品', image: images.pm5 },
  { title: '视觉识别系统', image: images.pm6 }
])

// 标签数据
const tags = ref([
  '全部', '农遗美食', '传统工艺', '文化景点', '非遗传承', '手工艺品'
])
</script>
