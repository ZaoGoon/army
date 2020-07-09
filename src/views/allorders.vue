<template>
	<div class="bd">
		<div class="tit">
			<van-icon name="arrow-left" style="float: left;" />
			<h4 align="center">全部订单</h4>
		</div>

		<div class="nav">
			<van-tabs style="max-width: 640px;min-width: 320px;width: 100%;" v-model="active">
				<van-tab style="padding-top: 10px;background-color: white;border: 1px solid gainsboro;height: 450px;" title="全部">
					<van-tag style="float: left;" type="warning">准时达</van-tag>
					<p style="float: left;">约</p>
					<font style="float: left;color: orange;">12:35</font>
					<p style="float: left;">送达</p>
					<van-icon style="float: right;" name="arrow" to="dispatching" />
					<font style="float: right;color: orange;">配送中</font>
					<van-card style="margin-top: 40px;" num="1" price="2.00" thumb="../img/44.jpg" desc="特别好吃!特别好吃!特别好吃!" title="大桃子" />
					<van-card style="margin-top: 10px;" num="1" price="2.00" thumb="../img/44.jpg" desc="特别好吃!特别好吃!特别好吃!" title="大桃子" />
					<van-card style="margin-top: 10px;" num="1" price="2.00" thumb="../img/44.jpg" desc="特别好吃!特别好吃!特别好吃!" title="大桃子" />
					<van-row gutter="20">
						<van-col style="color: #000000;font-weight: bold;float: right;margin-right: 5px;" span="5">合计￥9.9</van-col>
						<van-col style="float: right;margin-right: 20px;" span=" 8">共3件商品</van-col>
					</van-row>

					<van-button style="float: right;background: lightgray;border-radius: 20px;height: 24px;" type="default">再来一单</van-button>
					<van-button style="float: right;background: lightgray;border-radius: 20px;height: 24px;margin-right: 20px;" type="default">确认送达</van-button>

				</van-tab>
				<van-tab style="padding-top: 10px;background-color: white;border: 1px solid gainsboro;height: 450px;" title="待支付">
					<van-tag style="float: left;" type="warning">准时达</van-tag>
					<p style="float: left;">约</p>
					<font style="float: left;color: orange;">12:35</font>
					<p style="float: left;">送达</p>
					<van-icon style="float: right;" name="arrow" to="dispatching" />
					<font style="float: right;color: orange;">配送中</font>
					<van-card style="margin-top: 40px;" num="1" price="2.00" thumb="../img/44.jpg" desc="特别好吃!特别好吃!特别好吃!" title="大桃子" />
					<van-card style="margin-top: 10px;" num="1" price="2.00" thumb="../img/44.jpg" desc="特别好吃!特别好吃!特别好吃!" title="大桃子" />
					<van-card style="margin-top: 10px;" num="1" price="2.00" thumb="../img/44.jpg" desc="特别好吃!特别好吃!特别好吃!" title="大桃子" />
					<van-row gutter="20">
						<van-col style="color: #000000;font-weight: bold;float: right;margin-right: 5px;" span="5">合计￥9.9</van-col>
						<van-col style="float: right;margin-right: 20px;" span=" 8">共3件商品</van-col>
					</van-row>

					<van-button style="float: right;background: lightgray;border-radius: 20px;height: 24px;" type="default">再来一单</van-button>
					<van-button style="float: right;background: lightgray;border-radius: 20px;height: 24px;margin-right: 20px;" type="default">确认送达</van-button>
				</van-tab>
				<van-tab style="padding-top: 10px;background-color: white;border: 1px solid gainsboro;height: 450px;" title="待配送">
					<van-tag style="float: left;" type="warning">准时达</van-tag>
					<p style="float: left;">约</p>
					<font style="float: left;color: orange;">12:35</font>
					<p style="float: left;">送达</p>
					<van-icon style="float: right;" name="arrow" to="dispatching" />
					<font style="float: right;color: orange;">配送中</font>
					<van-card style="margin-top: 40px;" num="1" price="2.00" thumb="../img/44.jpg" desc="特别好吃!特别好吃!特别好吃!" title="大桃子" />
					<van-card style="margin-top: 10px;" num="1" price="2.00" thumb="../img/44.jpg" desc="特别好吃!特别好吃!特别好吃!" title="大桃子" />
					<van-card style="margin-top: 10px;" num="1" price="2.00" thumb="../img/44.jpg" desc="特别好吃!特别好吃!特别好吃!" title="大桃子" />
					<van-row gutter="20">
						<van-col style="color: #000000;font-weight: bold;float: right;margin-right: 5px;" span="5">合计￥9.9</van-col>
						<van-col style="float: right;margin-right: 20px;" span=" 8">共3件商品</van-col>
					</van-row>

					<van-button style="float: right;background: lightgray;border-radius: 20px;height: 24px;" type="default">再来一单</van-button>
					<van-button style="float: right;background: lightgray;border-radius: 20px;height: 24px;margin-right: 20px;" type="default">确认送达</van-button>
				</van-tab>
				<van-tab style="padding-top: 10px;background-color: white;border: 1px solid gainsboro;height: 450px;" title="配送中">
					<van-tag style="float: left;" type="warning">准时达</van-tag>
					<p style="float: left;">约</p>
					<font style="float: left;color: orange;">12:35</font>
					<p style="float: left;">送达</p>
					<van-icon style="float: right;" name="arrow" to="dispatching" />
					<font style="float: right;color: orange;">配送中</font>
					<van-card style="margin-top: 40px;" num="1" price="2.00" thumb="../img/44.jpg" desc="特别好吃!特别好吃!特别好吃!" title="大桃子" />
					<van-card style="margin-top: 10px;" num="1" price="2.00" thumb="../img/44.jpg" desc="特别好吃!特别好吃!特别好吃!" title="大桃子" />
					<van-card style="margin-top: 10px;" num="1" price="2.00" thumb="../img/44.jpg" desc="特别好吃!特别好吃!特别好吃!" title="大桃子" />
					<van-row gutter="20">
						<van-col style="color: #000000;font-weight: bold;float: right;margin-right: 5px;" span="5">合计￥9.9</van-col>
						<van-col style="float: right;margin-right: 20px;" span=" 8">共3件商品</van-col>
					</van-row>

					<van-button style="float: right;background: lightgray;border-radius: 20px;height: 24px;" type="default">再来一单</van-button>
					<van-button style="float: right;background: lightgray;border-radius: 20px;height: 24px;margin-right: 20px;" type="default">确认送达</van-button>
				</van-tab>
				<van-tab style="padding-top: 10px;background-color: white;border: 1px solid gainsboro;height: 450px;" title="待评价">
					<van-tag style="float: left;" type="warning">准时达</van-tag>
					<p style="float: left;">约</p>
					<font style="float: left;color: orange;">12:35</font>
					<p style="float: left;">送达</p>
					<van-icon style="float: right;" name="arrow" to="dispatching" />
					<font style="float: right;color: orange;">配送中</font>
					<van-card style="margin-top: 40px;" num="1" price="2.00" thumb="../img/44.jpg" desc="特别好吃!特别好吃!特别好吃!" title="大桃子" />
					<van-card style="margin-top: 10px;" num="1" price="2.00" thumb="../img/44.jpg" desc="特别好吃!特别好吃!特别好吃!" title="大桃子" />
					<van-card style="margin-top: 10px;" num="1" price="2.00" thumb="../img/44.jpg" desc="特别好吃!特别好吃!特别好吃!" title="大桃子" />
					<van-row gutter="20">
						<van-col style="color: #000000;font-weight: bold;float: right;margin-right: 5px;" span="5">合计￥9.9</van-col>
						<van-col style="float: right;margin-right: 20px;" span=" 8">共3件商品</van-col>
					</van-row>

					<van-button style="float: right;background: lightgray;border-radius: 20px;height: 24px;" type="default">再来一单</van-button>
					<van-button style="float: right;background: lightgray;border-radius: 20px;height: 24px;margin-right: 20px;" type="default">确认送达</van-button>
				</van-tab>
			</van-tabs>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				active: 2,
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

	.tit {
		width: 100%;
		margin-top: 20px;

	}

	.nav {
		margin-top: 20px;
		width: 100%;
		min-width: 320px;
		max-width: 640px;
	}
</style>
