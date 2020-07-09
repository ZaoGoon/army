<template>
	<div>
		<h3>购物车</h3>
		<p style="position: fixed;top: 3rem;right: 1rem;">编辑</p>
		<div align="left">
			<van-tag style="position: fixed;top: 6.98rem;z-index: 99;font-size: 14px;background-color: white;color: red;" type="danger">满减</van-tag>
			<van-notice-bar style="color: #000000;background-color: white;width: 312px;position: fixed;right: 0.01rem;" mode="link">
				满69元，已减10元
			</van-notice-bar>
		</div>
		<div class="coo">
			<van-radio-group v-model="radio">
				<van-radio name="1">
					<van-card num="1" price="25.0/份" desc="规格:约600g" title="美国新奇士(Sunkist)红心橙*6个 约600g" thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
						<template #footer>
							<van-button size="mini">-</van-button>
							<van-button size="mini">+</van-button>
							<p style="position: absolute;right: 65px;">小计:</p>
							<p style="color: red;font-weight: bold;">￥25.00</p>
						</template>
					</van-card>
				</van-radio>
			</van-radio-group>
			<van-radio-group v-model="radio">
				<van-radio name="1">
					<van-card num="1" price="25.0/份" desc="规格:约800g" title="法国嘎啦(French Gala)苹果*6 约800g" thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
						<template #footer>
							<van-button size="mini">-</van-button>
							<van-button size="mini">+</van-button>
							<p style="position: absolute;right: 65px;">小计:</p>
							<p style="color: red;font-weight: bold;">￥25.00</p>
						</template>
					</van-card>
				</van-radio>
			</van-radio-group>
			<van-radio-group v-model="radio">
				<van-radio name="1">
					<van-card num="1" price="38.0/份" desc="规格:约1500g" title="菲律宾帝王(Philippines king)香蕉 约3斤" thumb="https://img.yzcdn.cn/vant/ipad.jpeg">
						<template #footer>
							<van-button size="mini">-</van-button>
							<van-button size="mini">+</van-button>
							<p style="position: absolute;right: 65px;">小计:</p>
							<p style="color: red;font-weight: bold;">￥38.00</p>
						</template>
					</van-card>
				</van-radio>
			</van-radio-group>
		</div>
		<div style="position: fixed;top:10px;">
			<van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit" to="ordercpl">
				<van-checkbox v-model="checked">全选</van-checkbox>
			</van-submit-bar>
		</div>
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
	
	.coo .van-card {
		padding: 0px 20px;
		position: relative;
		top: 40px;
		margin-top: 10px;
		text-align: left;
	}

	.van-card__footer {
		height: 95px;
	}

	.van-submit-bar__bar {
		position: relative;
		bottom: 60px;
	}
</style>
<script>
	export default {
		data() {
			return {
				radio: '1',
			};
		},
	};
</script>
