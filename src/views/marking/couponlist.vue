<template>
    <list :show-search="true" :show-date="true" :show-key-word="true" :show-add-button="true" :show-page="true" :update-url="updateUrl"
        :delete-url="deleteUrl" :add-url="addUrl" :get-url="getUrl" :form-custom="formCustom" :rule-custom="ruleCustom" :modal-width="600" @set-form="setForm" :routername="'coupon_detail'">
        <template slot="frommodel">
             <FormItem label="优惠劵类型" prop="Type">
                <Select v-model="formCustom.Type" style="width:200px">
                    <Option v-for="item in TypeList" :value="item.id" :key="item.id">{{ item.name }}</Option>
                  </Select>
            </FormItem>
            <FormItem label="名称" prop="Name">
                <Input type="text" style="width: 424px" v-model="formCustom.CouponName" />
            </FormItem>
             <FormItem label="金额/次数" prop="Price">
                <Input type="text" style="width: 100px" v-model="formCustom.Price" :number="true"><span slot="prepend">￥</span></Input>
            </FormItem>
               <FormItem label="满X可用" prop="OrderAmount">
                <Input type="text" style="width: 100px" v-model="formCustom.OrderAmount" :number="true"><span slot="prepend">￥</span></Input>
            </FormItem>
              <FormItem label="每人可领数量" prop="PerMax">
                <Input type="text" style="width: 100px" v-model="formCustom.PerMax" :number="true" />
            </FormItem>
              <FormItem label="总数量" prop="Num">
                <Input type="text" style="width: 100px" v-model="formCustom.Num" :number="true" />
            </FormItem>
          
            <FormItem  label="使用期限" prop="StartTime">
                   <Row>
                     <Col span="11">
                                 <DatePicker type="date" @on-change="changetime1"  v-model="formCustom.StartTime" placeholder="" style="width: 200px"></DatePicker>
                     </Col>
                       <Col span=11>
                                  <DatePicker type="date" @on-change="changetime2"  v-model="formCustom.EndTime" placeholder="" style="width: 200px"></DatePicker>
                     </Col>

                 </Row>
            </FormItem>
             <FormItem label="有效期" prop="ValidDay">
                       <Tooltip  placement="right" >
                                  <div slot="content" style="white-space: normal">该设置指从会员领取当然开始算，输入大于0表示有多少天有效期，输入0表示使用‘使用期限’的时间设置，</div>
                <Input type="text" style="width: 100px" v-model="formCustom.ValidDay" :number="true" />
                       </Tooltip>
            </FormItem>
             <FormItem  label="领取期限" prop="GetStartTime">
                   <Row>
                     <Col span="11">
                          <DatePicker type="date" @on-change="changetime3" v-model="formCustom.GetStartTime" placeholder="" style="width: 200px"></DatePicker>
                     </Col>
                       
                       <Col span="11">
                             <DatePicker type="date" @on-change="changetime4" format="yyyy/MM/dd"  v-model="formCustom.GetEndTime" placeholder="" style="width: 200px"></DatePicker>
                     </Col>
                 </Row>
                 
            </FormItem>
           
             <FormItem label="是否积分兑换" prop="NeedValue">
                 <Row>
                     <Col span="5">
                         <Checkbox v-model="isCheck" />
                     </Col>
                      <Col  span="5">
                         <Input v-if="isCheck" type="text" style="width: 100px" v-model="formCustom.NeedValue" :number="true" />
                     </Col>
                 </Row>
     
            </FormItem>
           
        </template>
    </list>
</template>

<script>
import list from "../main-components/list.vue";
import { validateNum, validateRequired } from "../../libs/validate.js";
import D from "../../libs/date.js";
export default {
  name: "page1-table",
  components: {
    list
  },
  data() {
    return {
      updateUrl: "admin/Coupon/Save",
      deleteUrl: "admin/Coupon/Delete",
      addUrl: "admin/Coupon/Save",
      getUrl: "admin/Coupon/GetList",
      formCustom: {
        Id: 0,
        CouponName: "",
        Price: 0,
        PerMax: 0,
        Num: 0,
        OrderAmount: 0,
        StartTime: "",
        EndTime: "",
        ValidDay: 0,
        GetStartTime: "",
        GetEndTime: "",
        Type: 0,
        NeedValue: 0
      },
      ruleCustom: {
        CouponName: [{ validator: validateRequired, trigger: "blur" }],
        Price: [{ validator: validateNum, trigger: "blur" }],
        PerMax: [{ validator: validateNum, trigger: "blur" }],
        Num: [{ validator: validateNum, trigger: "blur" }],
        OrderAmount: [{ validator: validateNum, trigger: "blur" }],
        ValidDay: [{ validator: validateNum, trigger: "blur" }]
      },
      defaultLogo: [],
      TypeList: [
        { name: "商城购物", id: 0 },
        { name: "预约挂号", id: 1 },
        { name: "游泳", id: 2 },
        { name: "次数卡", id: 3 }
        
      ],
      modalWidth: 600,
      isCheck: false
    };
  },
  computed: {},
  watch: {
    "formCustom.NeedValue": function(val) {
      this.isCheck = val > 0;
    }
  },
  methods: {
    changetime1(date) {
      this.formCustom.StartTime = D.date(date).toString();
    },
    changetime2(date) {
      this.formCustom.EndTime = D.date(date).toString();
    },
    changetime3(date) {
      this.formCustom.GetStartTime = D.date(date).toString();
    },
    changetime4(date) {
      this.formCustom.GetEndTime = D.date(date).toString();
    },
    getresult(data) {
      if (data.length > 0) {
        this.formCustom.Logo = data[0].url;
      }
    },
    setForm(data) {
      if (data) {
        for (let key in this.formCustom) {
          if (key === "Logo") {
            var item = [{ name: "", url: data[key], status: "finished" }];
            this.defaultLogo = item;
          }
          this.formCustom[key] = data[key];
        }
        console.log(this.formCustom);
      } else {
        for (let key in this.formCustom) {
          if (key === "IsRecommend") {
            this.formCustom[key] = false;
          } else if (key === "Id" || key === "NeedValue") {
            this.formCustom[key] = 0;
          } else {
            this.formCustom[key] = "";
          }
        }
        this.defaultLogo = [];
      }
    }
  },
  created() {}
};
</script>