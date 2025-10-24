// @ts-ignore;
import React, { useState } from 'react';
// @ts-ignore;
import { Send, Loader2 } from 'lucide-react';
// @ts-ignore;
import { useToast } from '@/components/ui';

export function EnhancedContactForm({
  countryCode
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: countryCode || '',
    requirement: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // 使用 CloudBase SDK 写入数据库
      const result = await window.cloudbase?.tcb.callFunction({
        name: 'submitContact',
        data: {
          ...formData,
          timestamp: new Date().toISOString(),
          source: 'website'
        }
      });
      toast({
        title: "提交成功",
        description: "感谢您的留言，我们会尽快与您联系"
      });
      setFormData({
        name: '',
        email: '',
        country: countryCode || '',
        requirement: ''
      });
    } catch (error) {
      console.error('Submit error:', error);
      toast({
        title: "提交失败",
        description: "请稍后重试或联系客服",
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
  return <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          国家/地区 *
        </label>
        <input type="text" name="country" value={formData.country} onChange={handleChange} required readOnly={!!countryCode} className={`w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 ${countryCode ? 'opacity-75' : ''}`} placeholder="请输入您所在的国家" />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-300 mb-2">
          需求描述 *
        </label>
        <textarea name="requirement" value={formData.requirement} onChange={handleChange} required rows={4} className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500" placeholder="请详细描述您的需求或问题" />
      </div>

      <button type="submit" disabled={isSubmitting} className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2">
        {isSubmitting ? <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>发送中...</span>
          </> : <>
            <Send size={20} />
            <span>发送消息</span>
          </>}
      </button>
    </form>;
}