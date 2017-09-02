document.addEventListener('DOMContentLoaded', function(){
    var arr=[
            {
                "title":"新手入门",
                "guid":"guid1",
                "list":["常见问题",
                "新会员注册",
                "用户登录",
                "找回密码"] 
            },
            {
                "title":"购物指南",
                "guid":"guid2",
                "list":["购物流程",
                "订单状态说明",
                "隐私声明",
                "发票制度"]
            },
            {
                "title":"配送服务",
                "guid":"guid3",
                "list":["范围、时间及费用",
                "商品验货及签收",
                "门店自提"]
            },
            {
                "title":"支付方式",
                "guid":"guid4",
                "list":["货到付款",
                "网上支付,银行转账",
                "激活优惠券",
                "优惠券使用指南"]
            },
            {
                "title":"售后服务",
                "guid":"guid5",
                "list":["退换货政策",
                "退换货流程",
                "退款方式和时效",
                "售后常见问题",
                "正品保障",
                "品牌售后"]
            },
            {
                "title":"企业服务",
                "guid":"guid6",
                "list":["供应商合作",
                "供应商入口",
                "商家入驻",
                "市场合作"]
            }
        ]
        var z_dv1 = document.getElementById('z_dv1');
        // 创建ul/li

        z_dv1.innerHTML = arr.map(function(item){
            // console.log(item.list)
           var res = item.list.map(function(attr,z_idex){
                // console.log(attr,z_idex)
                return `
                <li><a>${attr}</a></li>
                `
            }).join('');
           // console.log(res)
            return `
            <ul>
                <h4>${item.title}</h4>
                ${res}
            </ul>
            `
        }).join('');
 });