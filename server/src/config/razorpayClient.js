const Razorpay = require('razorpay');

apiKey="rzp_test_kTsRSaDC8hwztX"
apiSecret="LieoD1s9mxMIv569PcgRDMcU"

const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;