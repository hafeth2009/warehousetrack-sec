import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'ar' | 'en' | 'ur';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// الترجمات
const translations = {
  ar: {
    // Navigation
    dashboard: 'لوحة القيادة',
    employees: 'شؤون الموظفين',
    contracts: 'المقايسات والعقود',
    warehouse: 'المستودع',
    dailyProgram: 'البرنامج اليومي',
    emergency: 'أعمال الطوارئ',
    
    // Employee Management
    employeeList: 'الموظفين',
    attendance: 'الحضور والغياب',
    departments: 'أقسام الشركة',
    teams: 'الفرق',
    jobTitles: 'المسميات الوظيفية',
    
    // Contracts
    materialDistribution: 'مخطط توزيع المواد',
    unifiedContract: 'العقد الموحد',
    emergencyWork: 'أعمال الطوارئ',
    emergencyPrograms: 'برامج أعطال الطوارئ',
    
    // Warehouse
    itemMovement: 'حركة الأصناف',
    itemWithdrawal: 'إخراج صنف',
    returnToWarehouse: 'إعادة للمستودع',
    companyReturns: 'إرجاعات الشركة',
    materialTransfer: 'مناقلة المواد',
    scrap: 'سكراب',
    unreceivedMeasurements: 'مقايسات لم تستلم',
    warehouseBalance: 'رصيد المستودع',
    inventory: 'الجرد',
    items: 'الأصناف',
    
    // Daily Program
    workProgram: 'برنامج العمل',
    dailyProgramSetup: 'إعداد البرنامج اليومي',
    
    // Auth
    login: 'تسجيل الدخول',
    register: 'إنشاء حساب',
    email: 'البريد الإلكتروني',
    password: 'كلمة المرور',
    fullName: 'الاسم الكامل',
    phone: 'رقم الهاتف',
    branch: 'الفرع',
    logout: 'تسجيل الخروج',
    
    // Branches
    shaqra: 'شقراء',
    thadig: 'ثادق',
    muzahmiyah: 'المزاحمية',
    
    // General
    save: 'حفظ',
    cancel: 'إلغاء',
    edit: 'تعديل',
    delete: 'حذف',
    add: 'إضافة',
    search: 'بحث',
    language: 'اللغة',
    darkMode: 'الوضع الليلي',
    lightMode: 'الوضع النهاري',
    welcomeBack: 'مرحباً بك مرة أخرى',
    totalInventory: 'إجمالي المخزون',
    activeEmployees: 'الموظفين النشطين',
    pendingTasks: 'المهام المعلقة',
    completedToday: 'المكتمل اليوم'
  },
  en: {
    // Navigation
    dashboard: 'Dashboard',
    employees: 'Human Resources',
    contracts: 'Contracts & Measurements',
    warehouse: 'Warehouse',
    dailyProgram: 'Daily Program',
    emergency: 'Emergency Work',
    
    // Employee Management
    employeeList: 'Employees',
    attendance: 'Attendance',
    departments: 'Company Departments',
    teams: 'Teams',
    jobTitles: 'Job Titles',
    
    // Contracts
    materialDistribution: 'Material Distribution Plan',
    unifiedContract: 'Unified Contract',
    emergencyWork: 'Emergency Work',
    emergencyPrograms: 'Emergency Fault Programs',
    
    // Warehouse
    itemMovement: 'Item Movement',
    itemWithdrawal: 'Item Withdrawal',
    returnToWarehouse: 'Return to Warehouse',
    companyReturns: 'Company Returns',
    materialTransfer: 'Material Transfer',
    scrap: 'Scrap',
    unreceivedMeasurements: 'Unreceived Measurements',
    warehouseBalance: 'Warehouse Balance',
    inventory: 'Inventory',
    items: 'Items',
    
    // Daily Program
    workProgram: 'Work Program',
    dailyProgramSetup: 'Daily Program Setup',
    
    // Auth
    login: 'Login',
    register: 'Register',
    email: 'Email',
    password: 'Password',
    fullName: 'Full Name',
    phone: 'Phone',
    branch: 'Branch',
    logout: 'Logout',
    
    // Branches
    shaqra: 'Shaqra',
    thadig: 'Thadig',
    muzahmiyah: 'Muzahmiyah',
    
    // General
    save: 'Save',
    cancel: 'Cancel',
    edit: 'Edit',
    delete: 'Delete',
    add: 'Add',
    search: 'Search',
    language: 'Language',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    welcomeBack: 'Welcome Back',
    totalInventory: 'Total Inventory',
    activeEmployees: 'Active Employees',
    pendingTasks: 'Pending Tasks',
    completedToday: 'Completed Today'
  },
  ur: {
    // Navigation
    dashboard: 'ڈیش بورڈ',
    employees: 'انسانی وسائل',
    contracts: 'معاہدے اور پیمائشیں',
    warehouse: 'گودام',
    dailyProgram: 'روزانہ پروگرام',
    emergency: 'ہنگامی کام',
    
    // Employee Management
    employeeList: 'ملازمین',
    attendance: 'حاضری',
    departments: 'کمپنی کے شعبے',
    teams: 'ٹیمیں',
    jobTitles: 'عہدے',
    
    // Contracts
    materialDistribution: 'مال کی تقسیم کا منصوبہ',
    unifiedContract: 'متحد معاہدہ',
    emergencyWork: 'ہنگامی کام',
    emergencyPrograms: 'ہنگامی خرابی کے پروگرام',
    
    // Warehouse
    itemMovement: 'اشیاء کی نقل و حرکت',
    itemWithdrawal: 'چیز نکالنا',
    returnToWarehouse: 'گودام میں واپسی',
    companyReturns: 'کمپنی کی واپسی',
    materialTransfer: 'مال کی منتقلی',
    scrap: 'سکریپ',
    unreceivedMeasurements: 'غیر موصولہ پیمائشیں',
    warehouseBalance: 'گودام کا بیلنس',
    inventory: 'انوینٹری',
    items: 'اشیاء',
    
    // Daily Program
    workProgram: 'کام کا پروگرام',
    dailyProgramSetup: 'روزانہ پروگرام کا اہتمام',
    
    // Auth
    login: 'لاگ ان',
    register: 'رجسٹر',
    email: 'ای میل',
    password: 'پاس ورڈ',
    fullName: 'پورا نام',
    phone: 'فون',
    branch: 'برانچ',
    logout: 'لاگ آؤٹ',
    
    // Branches
    shaqra: 'شقراء',
    thadig: 'ثادق',
    muzahmiyah: 'المزاحمیہ',
    
    // General
    save: 'محفوظ کریں',
    cancel: 'منسوخ',
    edit: 'ترمیم',
    delete: 'ڈیلیٹ',
    add: 'شامل کریں',
    search: 'تلاش',
    language: 'زبان',
    darkMode: 'ڈارک موڈ',
    lightMode: 'لائٹ موڈ',
    welcomeBack: 'واپس خوش آمدید',
    totalInventory: 'کل انوینٹری',
    activeEmployees: 'فعال ملازمین',
    pendingTasks: 'زیر التوا کام',
    completedToday: 'آج مکمل'
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const stored = localStorage.getItem('language');
    return (stored as Language) || 'ar';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.setAttribute('lang', language);
    document.documentElement.setAttribute('dir', language === 'ar' || language === 'ur' ? 'rtl' : 'ltr');
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  const dir = language === 'ar' || language === 'ur' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};