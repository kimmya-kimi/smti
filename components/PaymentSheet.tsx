"use client";

import { useState } from "react";

interface PaymentSheetProps {
  open: boolean;
  amountText: string;
  orderId: string;
  loading: boolean;
  error?: string;
  onClose: () => void;
  onConfirm: () => void;
}

export function PaymentSheet({
  open,
  amountText,
  orderId,
  loading,
  error,
  onClose,
  onConfirm,
}: PaymentSheetProps) {
  const [imageFailed, setImageFailed] = useState(false);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/65 p-4 backdrop-blur-sm md:items-center">
      <div className="w-full max-w-md rounded-[30px] border border-white/10 bg-[#0f0d14] p-5 shadow-[0_0_80px_rgba(0,0,0,0.45)]">
        <div className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">支付确认</div>
        <div className="mt-3 text-2xl font-black text-white">解锁完整报告</div>
        <p className="mt-3 text-sm leading-7 text-white/70">
          完成支付后，完整人格分析、职业建议、恋爱画像和完整分享模块会立即解锁。
        </p>

        <div className="mt-5 rounded-[24px] border border-white/10 bg-black/25 p-4">
          <div className="flex items-center justify-between text-sm text-white/68">
            <span>商品</span>
            <span>SMTI完整报告</span>
          </div>
          <div className="mt-3 flex items-center justify-between text-sm text-white/68">
            <span>订单号</span>
            <span className="max-w-[180px] truncate text-right">{orderId}</span>
          </div>
          <div className="mt-4 flex items-end justify-between">
            <span className="text-sm text-white/68">支付金额</span>
            <span className="text-3xl font-black text-gold">{amountText}</span>
          </div>
        </div>

        <div className="mt-5 rounded-[24px] border border-white/10 bg-black/25 p-4">
          <div className="rounded-2xl border border-[#2b83f6]/35 bg-[#2b83f6]/12 px-4 py-3 text-center text-sm font-semibold text-[#7ab6ff]">
            当前仅支持支付宝收款
          </div>

          <div className="mt-4 rounded-[22px] border border-white/10 bg-[#0a0b0f] p-4">
            <div className="mb-3 text-center text-sm font-medium text-white/70">支付宝收款码</div>
            <div className="mx-auto flex aspect-square w-full max-w-[240px] items-center justify-center overflow-hidden rounded-[20px] border border-white/10 bg-white p-3">
              {!imageFailed ? (
                <img
                  src="/payments/alipay.jpg?v=20260702"
                  alt="支付宝收款码"
                  className="h-full w-full object-contain"
                  onError={() => setImageFailed(true)}
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center rounded-[16px] border border-dashed border-slate-300/70 bg-slate-50 px-6 text-center">
                  <div className="text-sm font-semibold text-slate-600">二维码加载失败</div>
                  <a
                    href="/payments/alipay.jpg?v=20260702"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700"
                  >
                    打开收款码原图
                  </a>
                </div>
              )}
            </div>
            <div className="mt-3 text-center">
              <a
                href="/payments/alipay.jpg?v=20260702"
                target="_blank"
                rel="noreferrer"
                className="text-xs font-medium text-gold/80 underline underline-offset-4"
              >
                看不到二维码？打开原图
              </a>
            </div>
            <div className="mt-4 rounded-[18px] border border-gold/15 bg-gold/8 px-4 py-3 text-left">
              <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold/78">付款说明</div>
              <div className="mt-2 text-xs leading-6 text-white/62">
                1. 打开支付宝扫一扫
                <br />
                2. 支付 <span className="font-semibold text-white">{amountText}</span>
                <br />
                3. 付款备注可填写订单号后四位：
                <span className="ml-1 font-semibold text-gold">{orderId.slice(-4)}</span>
                <br />
                4. 付款完成后，返回这里点击“我已付款”
              </div>
            </div>
            <div className="mt-3 text-center text-xs leading-6 text-white/52">
              扫码支付后，不会自动跳转，需要手动回来确认解锁
            </div>
          </div>
        </div>

        {error ? <div className="mt-4 text-sm text-ember">{error}</div> : null}

        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-semibold text-white/78 transition hover:bg-white/10"
          >
            稍后再说
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className="rounded-2xl border border-gold/40 bg-gold/15 px-5 py-4 text-sm font-semibold text-gold transition hover:bg-gold/20 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "确认中..." : "我已付款，立即解锁"}
          </button>
        </div>
      </div>
    </div>
  );
}
