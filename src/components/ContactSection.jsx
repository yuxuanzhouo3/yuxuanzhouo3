// @ts-ignore;
import React, { useState, useEffect } from 'react';
// @ts-ignore;
import { Send, Mail, Phone, MapPin } from 'lucide-react';
// @ts-ignore;
import { useToast } from '@/components/ui';

export function ContactSection(props) {
  const {
    $w
  } = props;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // 使用 CloudBase SDK 写入 orbitchat_user_feedback
      await $w.cloud.callDataSource({
        dataSourceName: 'orbitchat_user_feedback',
        methodName: 'wedaCreateV2',
        params: {
          data: {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            submit_time: Date.now(),
            // 使用时间戳格式
            status: 'pending' // 必须包含status字段
          }
        }
      });
      toast({
        title: "提交成功",
        description: "感谢您的留言，我们会尽快联系您"
      });

      // 清空表单
      setFormData({
        name: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('Failed to submit feedback:', error);
      toast({
        title: "提交失败",
        description: "请稍后重试",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            联系我们
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            有任何问题或合作意向，欢迎随时联系我们
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">发送消息</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  姓名 *
                </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="请输入您的姓名" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  邮箱 *
                </label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="请输入您的邮箱" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  消息 *
                </label>
                <textarea name="message" value={formData.message} onChange={handleChange} required rows={4} className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="请输入您的消息" />
              </div>

              <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2">
                {isSubmitting ? <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>发送中...</span>
                  </> : <>
                    <Send size={20} />
                    <span>发送消息</span>
                  </>}
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-white mb-6">联系方式</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">邮箱</h4>
                  <p className="text-gray-400">contact@orbitchat.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">电话</h4>
                  <p className="text-gray-400">+86 400-123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-cyan-400 mt-1" />
                <div>
                  <h4 className="text-white font-semibold">地址</h4>
                  <p className="text-gray-400">北京市朝阳区科技园区A座1001室</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-slate-800/50 rounded-lg">
              <h4 className="text-white font-semibold mb-2">商务合作</h4>
              <p className="text-gray-400 text-sm">
                我们欢迎各类商务合作，包括企业定制、技术合作、投资洽谈等。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}