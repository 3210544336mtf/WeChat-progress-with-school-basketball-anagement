// app.js
App({
  onLaunch: function () {
    // 初始化全局数据
    this.initGlobalData()
  },
  
  initGlobalData: function() {
    // 设置一些模拟的全局数据
    this.globalData.baseUrl = 'https://example.com/api' // 模拟的API地址
    
    // 模拟已登录状态（你可以根据需要修改）
    this.globalData.isLoggedIn = true
    this.globalData.userInfo = {
      nickName: '模拟用户',
      avatarUrl: '/images/default_avatar.png'
    }
    this.globalData.userRole = this.globalData.roles.STUDENT
  },
  
  // 添加login函数，解决TypeError: app.login is not a function的错误
  login: function (code, userInfo, callback) {
    // 设置登录状态
    this.globalData.isLoggedIn = true;
    this.globalData.userInfo = userInfo;
    
    // 根据选择的角色设置
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1];
    const role = currentPage.data.selectedRole || 'student';
    this.globalData.userRole = role;
    
    // 存储到本地，确保重启应用后状态保持
    wx.setStorageSync('isLoggedIn', true);
    wx.setStorageSync('userInfo', userInfo);
    wx.setStorageSync('userRole', role);
    
    if (callback) {
      callback(true);
    }
  },
  
  logout: function() {
    this.globalData.isLoggedIn = false
    this.globalData.userInfo = null
    this.globalData.userRole = null
    
    // 清除存储的用户信息
    wx.removeStorageSync('userInfo')
    wx.removeStorageSync('token')
    wx.removeStorageSync('userRole')
    wx.removeStorageSync('userId')
  },
  
  globalData: {
    userInfo: null,
    isLoggedIn: false,
    userRole: null,
    baseUrl: 'https://example.com/api',
    roles: {
      STUDENT: 'student',
      REFEREE: 'referee',
      ADMIN: 'admin'
    }
  }
})