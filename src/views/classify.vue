<template>
	<div class="bd">
		<div class="top">
			<van-search style="float: left;width: 88%;" v-model="value" shape="round" background="lightseagreen" placeholder="黑凤梨" />
			<van-icon style="float: left;margin-top: 0.8rem;" name="scan" size="25" color="white" />
		</div>

		<van-tree-select height="800px" :items="items" :main-active-index.sync="active">
			<template #content>
				<van-card v-if="active === 0" num="2" tag="标签" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" origin-price="10.00" />
				<van-card v-if="active === 0" num="2" tag="标签" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" origin-price="10.00" />
				<van-card v-if="active === 1" num="2" tag="标签" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" origin-price="10.00" />
				<van-card v-if="active === 1" num="2" tag="标签" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" origin-price="10.00" />
				<van-card v-if="active === 2" num="2" tag="标签" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" origin-price="10.00" />
				<van-card v-if="active === 3" num="2" tag="标签" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" origin-price="10.00" />
				<van-card v-if="active === 4" num="2" tag="标签" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" origin-price="10.00" />
				<van-card v-if="active === 5" num="2" tag="标签" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" origin-price="10.00" />
				<van-card v-if="active === 6" num="2" tag="标签" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" origin-price="10.00" />
				<van-card v-if="active === 7" num="2" tag="标签" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" origin-price="10.00" />
				<van-card v-if="active === 7" num="2" tag="标签" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" origin-price="10.00" />
				<van-card v-if="active === 8" num="2" tag="标签" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" origin-price="10.00" />
				<van-card v-if="active === 8" num="2" tag="标签" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" origin-price="10.00" />
				<van-card v-if="active === 9" num="2" tag="标签" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" origin-price="10.00" />
				<van-card v-if="active === 4" num="2" tag="标签" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" origin-price="10.00" />
				<van-card v-if="active === 2" num="2" tag="标签" price="2.00" desc="描述信息" title="商品标题" thumb="https://img.yzcdn.cn/vant/ipad.jpeg" origin-price="10.00" />
			</template>
		</van-tree-select>
		<div class="footer">
			<van-tabbar active-color="lightseagreen" style="width: 100%;min-width: 320px;max-width: 640px;" v-model="active">
				<van-tabbar-item to="home" icon="home-o">首页</van-tabbar-item>
				<van-tabbar-item to="classify" icon="apps-o">分类</van-tabbar-item>
				<van-tabbar-item to="Shopping" icon="cart-o">购物车</van-tabbar-item>
				<van-tabbar-item to="my" icon="user-o">我的</van-tabbar-item>
			</van-tabbar>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: 0,
				items: [{
					text: '今日优惠'
				}, {
					text: '进口鲜果'
				}, {
					text: '时令鲜果'
				}, {
					text: '今日鲜果'
				}, {
					text: '车厘子'
				}, {
					text: '橙子'
				}, {
					text: '奇异果'
				}, {
					text: '桃子/杏子'
				}, {
					text: '瓜类'
				}],
			};
		},
	};
</script>

<style>
	body {
		width: 100%;
		margin: 0 auto;
		min-width: 320px;
		max-width: 640px;
		background: #fff;
		font-size: 14px;
		font-family: -apple-system, Helvetica, sans-serif;
		color: #666;
		line-height: 1.5;
		background-color: #F2F3F5;
	}

	* {
		margin: 0 0;
		padding: 0 0;
	}

	a {
		text-decoration: none;
	}

	ul li {
		list-style: none;
	}

	.footer {
		width: 100%;
		margin-top: 50px;
		background-color: white;

	}
</style>
