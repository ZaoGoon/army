<template>
	<div class="bd">
		<div class="top">
			<van-icon style="float: left;margin-top: 0.8rem;" size="25" color="white" name="location-o" />
			<van-search style="float: left;width: 82%;" v-model="value" shape="round" background="lightseagreen" placeholder="黑凤梨" />
			<van-icon color="white" style="float: left;margin-top: 0.8rem;" name="scan" size="25" />
		</div>

		<div class="swipe">
			<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
				<van-swipe-item><img src="../img/11.jpg" /></van-swipe-item>
				<van-swipe-item><img src="../img/22.jpg" /></van-swipe-item>
				<van-swipe-item><img src="../img/33.jpg" /></van-swipe-item>
				<van-swipe-item><img src="../img/44.jpg" /></van-swipe-item>
			</van-swipe>
		</div>

		<div class="ann">
			<van-button style="width: 40%;height: 80px;margin-left: 10px;background-color: lightseagreen;border-radius: 20px;color: white;" type="default">专题预售</van-button>
			<van-button style="width: 25%;height: 80px;margin-left: 10px;background-color: yellowgreen;border-radius: 20px;color: white;" type="default">邀请好友</van-button>
			<van-button style="width: 25%;height: 80px;margin-left: 10px;background-color: orange;border-radius: 20px;color: white;" type="default">扶贫助困</van-button>
		</div>

		<div class="content">
			<van-row gutter="20">
				<van-col span="6" style="font-weight: bold;font-size: 18px;margin-left: 10px;">鲜果快报</van-col>
				<van-col span="15" style="float: right;background-color: #E8E8E8;border-radius: 20px;">
					<p style="color: orange;font-weight: bold;float: left;">每日</p>|今年的水果，为何如此甜
				</van-col>
			</van-row>
		</div>

		<div class="contentnr">
			<van-row gutter="20">
				<van-col span="6" style="color: black;font-weight: bold;margin-left: 10px;">拼团预售</van-col>
				<van-col span="10" style="float: right;">产地直采，品质保障</van-col>
			</van-row>
			<van-card num="1" price="2.00" thumb="../img/44.jpg" desc="特别好吃!特别好吃!特别好吃!" title="大桃子" />
		</div>

		<div class="content2">
			<van-row gutter="20">
				<van-col span="6" style="color: black;font-weight: bold;margin-left: 10px;">热卖优惠</van-col>
				<van-col span="10" style="float: right;">人气热销，大众喜欢</van-col>
			</van-row>
			<van-grid :border="false" :column-num="3">
				<van-grid-item>
					<van-image to="AddShopping" src="https://img.yzcdn.cn/vant/apple-1.jpg" />
					<p style="font-weight: bold;color: #000000;">广东大桃子</p>
					<font style="color: orange;font-size: 14px;">￥2.5/份
						<van-icon style="margin-left: 20px;" size="14" name="add-o" />
					</font>
				</van-grid-item>
				<van-grid-item>
					<van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
					<p style="font-weight: bold;color: #000000;">广东大桃子</p>
					<font style="color: orange;font-size: 14px;">￥2.5/份
						<van-icon style="margin-left: 20px;" size="14" name="add-o" />
					</font>
				</van-grid-item>
				<van-grid-item>
					<van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
					<p style="font-weight: bold;color: #000000;">广东大桃子</p>
					<font style="color: orange;font-size: 14px;">￥2.5/份
						<van-icon style="margin-left: 20px;" size="14" name="add-o" />
					</font>
				</van-grid-item>
			</van-grid>

			<van-grid :border="false" :column-num="3">
				<van-grid-item>
					<van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
					<p style="font-weight: bold;color: #000000;">广东大桃子</p>
					<font style="color: orange;font-size: 14px;">￥2.5/份
						<van-icon style="margin-left: 20px;" size="14" name="add-o" />
					</font>
				</van-grid-item>
				<van-grid-item>
					<van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
					<p style="font-weight: bold;color: #000000;">广东大桃子</p>
					<font style="color: orange;font-size: 14px;">￥2.5/份
						<van-icon style="margin-left: 20px;" size="14" name="add-o" />
					</font>
				</van-grid-item>
				<van-grid-item>
					<van-image src="https://img.yzcdn.cn/vant/apple-3.jpg" />
					<p style="font-weight: bold;color: #000000;">广东大桃子</p>
					<font style="color: orange;font-size: 14px;">￥2.5/份
						<van-icon style="margin-left: 20px;" size="14" name="add-o" />
					</font>
				</van-grid-item>
			</van-grid>
		</div>

		<div class="content3">
			<van-row gutter="20">
				<van-col span="6" style="color: black;font-weight: bold;margin-left: 10px;">时令新尚</van-col>
				<van-col span="10" style="float: right;">应季水果，优质果园</van-col>
			</van-row>
			<van-card num="1" price="2.5" thumb="//img.yzcdn.cn/vant/apple-1.jpg" desc="特别好吃!特别好吃!特别好吃!" title="大桃子" />


			<van-card num="1" price="2.5" thumb="//img.yzcdn.cn/vant/apple-1.jpg" desc="特别好吃!特别好吃!特别好吃!" title="大桃子" />
		</div>

		<div class="content4">
			<h2 align="center">为您推荐</h2>

			<van-grid :border="false" :column-num="2">
				<van-grid-item>
					<van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
					<p style="font-weight: bold;color: #000000;">广东大桃子</p>
					<font style="color: orange;font-size: 14px;">￥2.5/份
						<van-icon style="margin-left: 60px;" size="14" name="add-o" />
					</font>
				</van-grid-item>
				<van-grid-item>
					<van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
					<p style="font-weight: bold;color: #000000;">广东大桃子</p>
					<font style="color: orange;font-size: 14px;">￥2.5/份
						<van-icon style="margin-left: 60px;" size="14" name="add-o" />
					</font>
				</van-grid-item>
				<van-grid-item>
					<van-image src="https://img.yzcdn.cn/vant/apple-1.jpg" />
					<p style="font-weight: bold;color: #000000;">广东大桃子</p>
					<font style="color: orange;font-size: 14px;">￥2.5/份
						<van-icon style="margin-left: 60px;" size="14" name="add-o" />
					</font>
				</van-grid-item>
				<van-grid-item>
					<van-image src="https://img.yzcdn.cn/vant/apple-2.jpg" />
					<p style="font-weight: bold;color: #000000;">广东大桃子</p>
					<font style="color: orange;font-size: 14px;">￥2.5/份
						<van-icon style="margin-left: 60px;" size="14" name="add-o" />
					</font>
				</van-grid-item>
			</van-grid>
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

<script>
	export default {
		data() {
			return {
				active: 0,
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

	.top {
		width: 100%;
		height: 60px;
		background: lightseagreen;
	}

	.my-swipe .van-swipe-item {
		height: 220px;
		color: #fff;
		font-size: 20px;
		line-height: 200px;
		text-align: center;
		/* background-color: #39a9ed; */
	}

	.swipe {
		padding-top: 10px;
		width: 90%;
		margin: 0 auto;
		padding-bottom: 10px;
	}

	.my-swipe .van-swipe-item img {
		width: 100%;
		height: 100%;
		border-radius: 20px;
	}

	.ann {
		width: 100%;
		height: 80px;
		padding-top: 20px;
		background-color: white;
	}

	.content {
		padding-top: 20px;
		background-color: white;
	}

	.contentnr {
		margin-top: 20px;
		background-color: white;
	}

	.content2 {
		margin-top: 20px;
		background-color: white;
	}

	.content3 {
		margin-top: 20px;
		background-color: white;
	}

	.content4 {
		margin-top: 20px;
		background-color: white;
	}

	.footer {
		width: 100%;
		margin-top: 50px;
		background-color: white;
		
	}
</style>
