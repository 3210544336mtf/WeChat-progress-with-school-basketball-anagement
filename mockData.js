// mockData.js
const teams = [
  {
    id: 1,
    name: '计算机学院',
    logo: '/images/team_logo1.png',
    cover: '/images/team_cover1.jpg',
    foundedTime: '2020-09-01',
    memberCount: 12,
    matchCount: 5,
    ownerId: 'user123',
    introduction: '计算机学院篮球队，多次获得校级比赛冠军，致力于培养学生的体育精神和团队合作能力。'
  },
  {
    id: 2,
    name: '机械学院',
    logo: '/images/team_logo2.png',
    cover: '/images/team_cover2.jpg',
    foundedTime: '2020-10-15',
    memberCount: 10,
    matchCount: 4,
    ownerId: 'user124',
    introduction: '机械学院篮球队成立于2020年，队员来自机械工程各专业，以精湛的技术和顽强的作风著称。'
  },
  {
    id: 3,
    name: '电子学院',
    logo: '/images/team_logo3.png',
    cover: '/images/team_cover3.jpg',
    foundedTime: '2021-03-05',
    memberCount: 11,
    matchCount: 6,
    ownerId: 'user125',
    introduction: '电子学院篮球队是一支充满活力的队伍，擅长快攻和三分投射，是校园联赛的一支劲旅。'
  },
  {
    id: 4,
    name: '管理学院',
    logo: '/images/team_logo4.png',
    cover: '/images/team_cover4.jpg',
    foundedTime: '2021-05-20',
    memberCount: 9,
    matchCount: 3,
    ownerId: 'user126',
    introduction: '管理学院篮球队强调团队配合和战术执行，曾获得校内联赛亚军。'
  },
  {
    id: 5,
    name: '土木学院',
    logo: '/images/team_logo5.png',
    cover: '/images/team_cover5.jpg',
    foundedTime: '2020-11-11',
    memberCount: 10,
    matchCount: 5,
    ownerId: 'user127',
    introduction: '土木学院篮球队是一支技术全面的队伍，防守严密，进攻多变。'
  },
  {
    id: 6,
    name: '经济学院',
    logo: '/images/team_logo6.png',
    cover: '/images/team_cover6.jpg',
    foundedTime: '2021-01-08',
    memberCount: 8,
    matchCount: 4,
    ownerId: 'user128',
    introduction: '经济学院篮球队以灵活多变的打法著称，球员个人技术出色。'
  }
];

const matches = [
  {
    id: 1,
    title: '2023校园篮球联赛 - 小组赛A',
    status: 'ongoing',
    statusText: '进行中',
    statusClass: 'badge-success',
    startTime: '2023-04-12 15:00:00',
    time: '2023-04-12 15:00',
    location: '体育馆主馆',
    description: '这是2023年校园篮球联赛小组赛阶段的比赛，由计算机学院对阵机械学院。',
    rules: '采用FIBA国际篮联规则，每节12分钟，共4节。比赛期间每队可以请求2次暂停。加时赛5分钟。',
    teamA: {
      id: 1,
      logo: '/images/team_logo1.png',
      name: '计算机学院',
      score: 78
    },
    teamB: {
      id: 2,
      logo: '/images/team_logo2.png',
      name: '机械学院',
      score: 72
    },
    timeline: [
      { time: '14:30', event: '开始入场' },
      { time: '15:00', event: '比赛开始' },
      { time: '16:30', event: '比赛结束' },
      { time: '16:45', event: '颁奖仪式' }
    ]
  },
  {
    id: 2,
    title: '2023校园篮球联赛 - 小组赛B',
    status: 'pending',
    statusText: '未开始',
    statusClass: 'badge-primary',
    startTime: '2023-04-15 14:30:00',
    time: '2023-04-15 14:30',
    location: '体育馆主馆',
    description: '2023年校园篮球联赛小组赛，电子学院对阵管理学院。',
    rules: '采用FIBA国际篮联规则，每节12分钟，共4节。',
    teamA: {
      id: 3,
      logo: '/images/team_logo3.png',
      name: '电子学院',
      score: 0
    },
    teamB: {
      id: 4,
      logo: '/images/team_logo4.png',
      name: '管理学院',
      score: 0
    },
    timeline: [
      { time: '14:00', event: '开始入场' },
      { time: '14:30', event: '比赛开始' },
      { time: '16:00', event: '预计结束' }
    ]
  },
  {
    id: 3,
    title: '2023校园篮球联赛 - 小组赛C',
    status: 'finished',
    statusText: '已结束',
    statusClass: 'badge-secondary',
    startTime: '2023-04-10 16:00:00',
    time: '2023-04-10 16:00',
    location: '体育馆主馆',
    description: '2023年校园篮球联赛小组赛，土木学院对阵经济学院。',
    rules: '采用FIBA国际篮联规则，每节12分钟，共4节。',
    teamA: {
      id: 5,
      logo: '/images/team_logo5.png',
      name: '土木学院',
      score: 65
    },
    teamB: {
      id: 6,
      logo: '/images/team_logo6.png',
      name: '经济学院',
      score: 70
    },
    timeline: [
      { time: '15:30', event: '开始入场' },
      { time: '16:00', event: '比赛开始' },
      { time: '17:30', event: '比赛结束' }
    ]
  }
];

const teamAPlayers = [
  { id: 1, number: 23, name: '张三', position: '后卫', points: 18, rebounds: 5, assists: 7 },
  { id: 2, number: 11, name: '李四', position: '前锋', points: 12, rebounds: 8, assists: 3 },
  { id: 3, number: 33, name: '王五', position: '中锋', points: 10, rebounds: 12, assists: 1 },
  { id: 4, number: 7, name: '赵六', position: '后卫', points: 8, rebounds: 2, assists: 5 },
  { id: 5, number: 15, name: '钱七', position: '前锋', points: 6, rebounds: 4, assists: 2 }
];

const teamBPlayers = [
  { id: 6, number: 9, name: '孙八', position: '中锋', points: 20, rebounds: 10, assists: 2 },
  { id: 7, number: 5, name: '周九', position: '前锋', points: 16, rebounds: 6, assists: 3 },
  { id: 8, number: 12, name: '吴十', position: '后卫', points: 14, rebounds: 4, assists: 8 },
  { id: 9, number: 8, name: '郑十一', position: '前锋', points: 12, rebounds: 7, assists: 1 },
  { id: 10, number: 21, name: '王十二', position: '后卫', points: 10, rebounds: 3, assists: 4 }
];

const teamStats = [
  { name: '投篮命中率', teamA: '45%', teamB: '42%' },
  { name: '三分命中率', teamA: '35%', teamB: '38%' },
  { name: '罚球命中率', teamA: '75%', teamB: '70%' },
  { name: '篮板', teamA: 35, teamB: 32 },
  { name: '助攻', teamA: 18, teamB: 15 },
  { name: '抢断', teamA: 8, teamB: 6 },
  { name: '盖帽', teamA: 3, teamB: 5 },
  { name: '失误', teamA: 12, teamB: 14 },
  { name: '犯规', teamA: 16, teamB: 18 }
];

const quarterScores = {
  quarters: ['第一节', '第二节', '第三节', '第四节'],
  teamA: [18, 24, 16, 20],
  teamB: [16, 18, 22, 16]
};

const comments = [
  {
    id: 1,
    userId: 101,
    username: '篮球爱好者',
    avatar: '/images/avatar1.png',
    content: '比赛非常精彩，两队实力相当！',
    createTime: '2023-04-12 15:30:00',
    time: '04-12 15:30'
  },
  {
    id: 2,
    userId: 102,
    username: '体育课代表',
    avatar: '/images/avatar2.png',
    content: '计算机学院的11号表现出色，三分球很准！',
    createTime: '2023-04-12 16:05:00',
    time: '04-12 16:05'
  },
  {
    id: 3,
    userId: 103,
    username: '校队成员',
    avatar: '/images/avatar3.png',
    content: '裁判判罚很公正，比赛组织得也很好。',
    createTime: '2023-04-12 16:20:00',
    time: '04-12 16:20'
  }
];

const notifications = [
  {
    id: 1,
    type: 'system',
    title: '系统通知',
    content: '欢迎使用校园篮球赛事管理系统，请完善您的个人信息。',
    icon: '/images/system_notice.png',
    read: true,
    createTime: '2023-04-05 10:00:00',
    time: '04-05 10:00'
  },
  {
    id: 2,
    type: 'match',
    title: '比赛即将开始',
    content: '您参与的比赛"2023校园篮球联赛 - 小组赛B"将于明天下午2:30开始，请做好准备。',
    icon: '/images/match_notice.png',
    read: false,
    matchId: 2,
    createTime: '2023-04-14 10:00:00',
    time: '04-14 10:00'
  },
  {
    id: 3,
    type: 'team',
    title: '队员申请通知',
    content: '有新队员申请加入您的球队"计算机学院"，请及时处理。',
    icon: '/images/team_notice.png',
    read: false,
    teamId: 1,
    createTime: '2023-04-14 14:30:00',
    time: '04-14 14:30'
  }
];

const personalStats = {
  matchCount: 8,
  avgPoints: 12.5,
  avgRebounds: 6.2,
  avgAssists: 3.8,
  fgPercentage: 45,
  threePointPercentage: 33,
  ftPercentage: 75,
  recentMatches: [
    {
      id: 1,
      date: '2023-04-10',
      teamA: '计算机学院',
      teamB: '机械学院',
      points: 15,
      rebounds: 8,
      assists: 4
    },
    {
      id: 2,
      date: '2023-04-05',
      teamA: '计算机学院',
      teamB: '电子学院',
      points: 12,
      rebounds: 5,
      assists: 6
    },
    {
      id: 3,
      date: '2023-03-28',
      teamA: '计算机学院',
      teamB: '管理学院',
      points: 10,
      rebounds: 7,
      assists: 3
    }
  ]
};

const teamStatsData = {
  matchCount: 10,
  winCount: 7,
  winRate: 70,
  avgPoints: 75.8,
  scoreDistribution: {
    twoPoints: 42,
    threePoints: 27,
    freeThrows: 12
  },
  playerStats: [
    {
      id: 1,
      name: '张三',
      matchCount: 10,
      avgPoints: 15.2,
      avgRebounds: 6.8,
      avgAssists: 4.5
    },
    {
      id: 2,
      name: '李四',
      matchCount: 9,
      avgPoints: 12.8,
      avgRebounds: 8.2,
      avgAssists: 2.7
    },
    {
      id: 3,
      name: '王五',
      matchCount: 10,
      avgPoints: 10.5,
      avgRebounds: 5.9,
      avgAssists: 5.2
    },
    {
      id: 4,
      name: '赵六',
      matchCount: 8,
      avgPoints: 8.7,
      avgRebounds: 4.3,
      avgAssists: 3.1
    }
  ]
};

const userData = {
  matchCount: 8,
  teamCount: 1,
  points: 92
};

// 添加到 mockData.js
const students = [
  {
    id: '2023001',
    name: '张三',
    teamId: 1,
    matchCount: 8,
    teamCount: 1,
    points: 92,
    matches: [1, 2]
  },
  {
    id: '2023002',
    name: '李四',
    teamId: 1,
    matchCount: 6,
    teamCount: 1,
    points: 78,
    matches: [1, 3]
  },
  {
    id: '2023003',
    name: '王五',
    teamId: 2,
    matchCount: 7,
    teamCount: 1,
    points: 85,
    matches: [2, 3]
  }
];

// 导出时添加 students
module.exports = {
  teams,
  matches,
  teamAPlayers,
  teamBPlayers,
  teamStats,
  quarterScores,
  comments,
  notifications,
  personalStats,
  teamStatsData,
  userData,
  students // 添加学生数据
};

module.exports = {
  teams,
  matches,
  teamAPlayers,
  teamBPlayers,
  teamStats,
  quarterScores,
  comments,
  notifications,
  personalStats,
  teamStatsData,
  userData
};
