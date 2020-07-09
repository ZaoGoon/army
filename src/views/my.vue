<template>
	<div class="my">
		<div class="bg">
			<div class="coo" style="position: fixed;right: 0.25rem;top: 1rem;">
				<van-cell title="" icon="comment-o" style="text-align: right;" />
			</div>
		</div>
		<div style="width: 70px;height: 70px;position: fixed;top:8rem">
			<van-image style="float: left;position: fixed;left: 1rem;" width="100" height="100" src="https://img.yzcdn.cn/vant/cat.jpeg" />
		</div>
		<div style="float: left;position: fixed;left: 8rem;top: 9rem;">
			<p style="font-size: 20px;font-weight: bold;">鲜果小王子</p>
		</div>
		<div class="ioo" style="position: fixed;right: 1rem;top: 9.55rem;">
			<van-cell title="" icon="qr" style="text-align: right;" />
		</div>


		<van-cell-group>
			<div style="position: fixed;top: 17rem; width: 100%;">
				<van-row>
					<van-col span="8" align="center">200</van-col>
					<van-col span="8" align="center">0</van-col>
					<van-col span="8" align="center">1600</van-col>
				</van-row>
				<van-row>
					<van-col span="8" align="center">账户余额</van-col>
					<van-col span="8" align="center">优惠券</van-col>
					<van-col span="8" align="center">账户积分</van-col>
				</van-row>
			</div>
			<div>
				<van-tabbar v-model="active" :fixed="false" style="position: fixed;bottom: 24rem;" active-color="red">
					<van-tabbar-item icon="notes-o" to="allorders">待支付
						<van-icon class-prefix="my-icon" name="daifukuan" slot="icon" />
					</van-tabbar-item>
					<van-tabbar-item icon="apps-o" to="allorders">待配送
						<van-icon class-prefix="my-icon" name="daifahuo" slot="icon" />
					</van-tabbar-item>
					<van-tabbar-item icon="shopping-cart-o" to="allorders">配送中
						<van-icon class-prefix="my-icon" name="daishouhuo" slot="icon" />
					</van-tabbar-item>
					<van-tabbar-item icon="contact" to="allorders">待评价
						<van-icon class-prefix="my-icon" name="daipingjia" slot="icon" />
					</van-tabbar-item>
					<van-tabbar-item icon="contact" to="allorders">全部订单
						<van-icon class-prefix="my-icon" name="rizhi" slot="icon" />
					</van-tabbar-item>
				</van-tabbar>
			</div>
			<div class="too" style="position: fixed;bottom: 14rem;">
				<van-cell title="我的收藏" icon="like-o" style="text-align: left;" />
				<van-cell title="优惠福利" icon="point-gift-o" style="text-align: left;" />
				<van-cell title="会员中心" icon="diamond-o" style="text-align: left;" />
			</div>
			<div class="foo" style="position: fixed;bottom: 3rem;">
				<van-cell title="地址管理" icon="location-o" style="text-align: left;" />
				<van-cell title="门店/自提点查询" icon="idcard" style="text-align: left;" />
				<van-cell title="客服帮助" icon="service-o" style="text-align: left;" />
				<van-cell title="设置" icon="setting-o" style="text-align: left;" />
			</div>
			<div class="footer">
				<van-tabbar active-color="lightseagreen" style="width: 100%;min-width: 320px;max-width: 640px;" v-model="active">
					<van-tabbar-item to="home" icon="home-o">首页</van-tabbar-item>
					<van-tabbar-item to="classify" icon="apps-o">分类</van-tabbar-item>
					<van-tabbar-item to="Shopping" icon="cart-o">购物车</van-tabbar-item>
					<van-tabbar-item to="my" icon="user-o">我的</van-tabbar-item>
				</van-tabbar>
			</div>
		</van-cell-group>
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
	
	.bg {
		width: 100%;
		height: 90px;
		background: lightseagreen;
	}

	.coo .van-cell {
		background: lightseagreen;
	}

	.coo .van-cell__left-icon {
		color: white;
		font-size: 22px;
	}

	.ioo .van-cell__left-icon {
		color: #000000;
		font-size: 22px;
	}

	.too .van-cell__left-icon {
		color: red;
	}

	.foo .van-cell__left-icon {
		color: skyblue;
	}
</style>
<script>
	export default {
		name: 'my',
		data() {
			return {
				active: 0,
				icon: {
					active: 'https://img.yzcdn.cn/vant/user-active.png',
					inactive: 'https://img.yzcdn.cn/vant/user-inactive.png',
				},
			};
		},
	};
</script>
