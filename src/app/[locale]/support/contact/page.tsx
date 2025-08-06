"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Users, Clock, Home, ArrowRight } from "lucide-react";
import { Header } from "../../components/Header/Header";

export default function ContactPage() {
  const t = useTranslations("contact");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage("✨ Your message has been sent successfully!");
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  const contactOptions = [
    {
      icon: Mail,
      title: t("general.title"),
      description: t("general.description"),
      hours: t("general.hours"),
      gradient: "from-purple-400 via-indigo-500 to-cyan-600",
      bgGlow: "bg-gradient-to-br from-purple-500/20 to-cyan-500/20",
    },
    {
      icon: Phone,
      title: t("technical.title"),
      description: t("technical.description"),
      hours: t("technical.hours"),
      gradient: "from-cyan-400 via-blue-500 to-indigo-600",
      bgGlow: "bg-gradient-to-br from-cyan-500/20 to-indigo-500/20",
    },
    {
      icon: Users,
      title: t("partnership.title"),
      description: t("partnership.description"),
      hours: t("partnership.hours"),
      gradient: "from-emerald-400 via-green-500 to-emerald-600",
      bgGlow: "bg-gradient-to-br from-emerald-500/20 to-green-500/20",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-950 relative overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,69,244,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,69,244,0.05)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

        {/* Modern Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(139,69,244,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(99,102,241,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_60%)]"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-16 w-48 h-48 bg-gradient-to-br from-purple-500/30 to-indigo-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-indigo-500/25 to-cyan-500/25 rounded-full blur-3xl animate-bounce" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 bg-gradient-to-br from-purple-500/35 to-pink-500/35 rounded-full blur-2xl animate-ping" style={{animationDuration: '3s'}}></div>

        {/* Floating Particles */}
        <div className="absolute top-40 left-40 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-60 right-60 w-2 h-2 bg-indigo-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-60 left-1/3 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-bounce opacity-60" style={{animationDelay: '1s'}}></div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Back to Home Link */}
          <div className='flex justify-start mb-12'>
             <Link
                  href="/"
                  className='inline-flex items-center px-6 py-3 bg-gray-900/60 backdrop-blur-sm rounded-full border border-purple-400/30 hover:bg-gray-800/60 hover:border-purple-400/50 transition-all duration-300 group text-sm font-semibold text-white shadow-lg shadow-purple-500/20'
                >
                  <Home className='h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300 text-purple-400' />
                  {t('backToHome')}
                  <ArrowRight className='h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300 text-purple-400' />
                </Link>
          </div>

          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-6xl sm:text-7xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-indigo-200 bg-clip-text text-transparent leading-tight tracking-wide drop-shadow-lg">
              {t("title")}
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{t("subtitle")}</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Contact Options */}
            <div className="space-y-8">
              {contactOptions.map((item, index) => (
                <Card key={index} className="group relative bg-gray-900/60 backdrop-blur-xl border border-purple-400/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 cursor-pointer overflow-hidden rounded-3xl shadow-xl shadow-purple-500/10">
                  {/* Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl rounded-3xl`} />
                  
                  {/* Background Pattern */}
                  <div className={`absolute inset-0 ${item.bgGlow} opacity-40 group-hover:opacity-60 transition-opacity duration-500 rounded-3xl`}></div>

                  <CardHeader className="relative z-10">
                    <CardTitle className="flex items-center gap-4 text-2xl font-black text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-200 group-hover:bg-clip-text transition-all duration-300 tracking-wide">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-gray-400 group-hover:text-gray-200 transition-colors duration-300 text-lg">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10 space-y-3 text-base">
                    <p className="text-gray-500 group-hover:text-gray-300 transition-colors duration-300 flex items-center gap-3">
                      <Clock className="h-5 w-5 text-purple-400" /> {item.hours}
                    </p>
                  </CardContent>
                  
                  {/* Bottom Accent */}
                  <div className={`absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center rounded-b-3xl`} />
                </Card>
              ))}
            </div>

            {/* Contact Form */}
            <Card className="h-fit shadow-xl border border-purple-400/20 bg-gray-900/60 backdrop-blur-xl rounded-3xl overflow-hidden">
              {/* Form Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 opacity-0 hover:opacity-20 transition-opacity duration-500 blur-2xl rounded-3xl"></div>
              
              <CardHeader className="relative z-10 pb-6">
                <CardTitle className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-black tracking-wide">
                  {t("form.title")}
                </CardTitle>
                <CardDescription className="text-gray-300 text-lg">
                  {t("form.description")}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-3">
                    <Label htmlFor="name" className="text-purple-200 font-semibold text-base tracking-wide">{t("form.name")}</Label>
                    <Input
                      className="text-white bg-gray-800/50 border border-purple-400/30 focus:border-purple-400/60 rounded-xl h-12 text-base backdrop-blur-sm"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="email" className="text-purple-200 font-semibold text-base tracking-wide">{t("form.email")}</Label>
                    <Input
                      className="text-white bg-gray-800/50 border border-purple-400/30 focus:border-purple-400/60 rounded-xl h-12 text-base backdrop-blur-sm"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="subject" className="text-purple-200 font-semibold text-base tracking-wide">{t("form.subject")}</Label>
                    <Select name="subject">
                      <SelectTrigger className="text-white bg-gray-800/50 border border-purple-400/30 focus:border-purple-400/60 rounded-xl h-12 text-base backdrop-blur-sm" id="subject">
                        <SelectValue placeholder={t("form.placeholder")} />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-800/90 border border-purple-400/30 rounded-xl backdrop-blur-xl">
                        <SelectItem value="general" className="text-white hover:bg-purple-500/20">
                          {t("form.options.general")}
                        </SelectItem>
                        <SelectItem value="technical" className="text-white hover:bg-purple-500/20">
                          {t("form.options.technical")}
                        </SelectItem>
                        <SelectItem value="billing" className="text-white hover:bg-purple-500/20">
                          {t("form.options.billing")}
                        </SelectItem>
                        <SelectItem value="partnership" className="text-white hover:bg-purple-500/20">
                          {t("form.options.partnership")}
                        </SelectItem>
                        <SelectItem value="other" className="text-white hover:bg-purple-500/20">
                          {t("form.options.other")}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="message" className="text-purple-200 font-semibold text-base tracking-wide">{t("form.message")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t("form.placeholderMessage")}
                      className="min-h-[140px] text-white bg-gray-800/50 border border-purple-400/30 focus:border-purple-400/60 rounded-xl text-base backdrop-blur-sm resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full text-lg font-bold bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/40 hover:scale-105 rounded-xl h-14 tracking-wide"
                  >
                    {t("form.button")}
                  </Button>

                  {successMessage && (
                    <div className="text-emerald-400 text-base text-center mt-6 p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20 backdrop-blur-sm">
                      {successMessage}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

