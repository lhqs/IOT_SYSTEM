import {baseUrl, axios} from './config';


export const downloadUrl = url => {
  let iframe = document.createElement('iframe');
  iframe.style.display = 'none';
  iframe.src = url;
  iframe.onload = function () {
    document.body.removeChild(iframe)
  };
  document.body.appendChild(iframe);
};

/* 退出系统 */
// export const logout = params => { return axios.get(`${baseUrl}/user/list`, { params:params })};

/* 登录系统 */
// export const login = params => { return axios.post(`${baseUrl}/login`, params)};

/* 获取用户信息 */
// export const getUsername = params => { return axios.post(`${baseUrl}/username/getUsername`,  params)};


/*上传图片*/
export const uploadLogeUrl = params => { return axios.post(`${baseUrl}/uploadOrgLogo`,  params)};

/* 获取图表数据 */
export const getDemoData = params => { return axios.get(`${baseUrl}/getDataInfoNum`,{params:params})};

/*登陆系统*/
export const userLogin = params => { return axios.post(`${baseUrl}/user/getUserInfo`,  params)};

/*退出系统*/
export const exitSystem = params => { return axios.get(`${baseUrl}/exitSystem`,{params:params})};

/*获取系统运行环境*/
export  const runtimeStatus = params => { return axios.get(`${baseUrl}/getRuntimeStatus`, { params:params })};

/*获取系统运行环境(List)*/
export  const runtimeStatusList = params => { return axios.get(`${baseUrl}/getRuntimeStatusList`, { params:params })};

/*获取当前最新一条数据（实时数据）*/
export const realData = params => { return axios.get(`${baseUrl}/getRealData`,{params:params})};

/*获取所有的日志操作记录*/
export const operatorLog = params => { return axios.get(`${baseUrl}/getAllOperatorLog`,{params:params})};

/*移除操作日志记录*/
export const removeOperatorLog = params => {return axios.delete(`${baseUrl}/removeOperatorLog`,{params:params})};

/*获取传感器节点访问权限*/
export const sensorLimit = params => { return axios.get(`${baseUrl}/getSensorLimit`,{params:params})};

/*获取用户列表*/
export const allUserInfo = params => { return axios.get(`${baseUrl}/getAllMembership`,{params:params})};

/*添加用户信息及所属节点*/
export const addUserInfo = params => { return axios.post(`${baseUrl}/addUserInfo`,params)};

/*删除用户信息及所属节点*/
export const removeUserInfo = params => {return axios.delete(`${baseUrl}/removeUserInfo`,{params:params})};

/*编辑用户修改信息*/
export const editUserInfo = params => { return axios.put(`${baseUrl}/editUserInfo`,params)};

/*查询用户信息*/
export const searchUserList = params => { return axios.get(`${baseUrl}/searchUserList`,{params:params})};

/*获取所有的存储数据*/
export const allDataInfo = params => { return axios.get(`${baseUrl}/getAllDataInfo`,{params:params})};

/*导出数据到excel*/
export const exportDataForExcel = params => { return axios.get(`${baseUrl}/exportDataForExcel`,{params:params})};

/*获取节点一中指定数目的数据*/
export const getNodeOneDataForNum = params => { return axios.get(`${baseUrl}/nodeOneData`,{params:params})};

/*导出节点一的数据*/
export const exportExcelForHumidity = params => { return axios.get(`${baseUrl}/exportExcelForHumidity`,{params:params})};
export const exportExcelForGround = params => { return axios.get(`${baseUrl}/exportExcelForGround`,{params:params})};
export const exportExcelForTemperature = params => { return axios.get(`${baseUrl}/exportExcelForTemperature`,{params:params})};
export const exportExcelForPh = params => { return axios.get(`${baseUrl}/exportExcelForPh`,{params:params})};

/*获取节点二中指定数目的数据*/
export const getNodeTwoDataForNum = params => { return axios.get(`${baseUrl}/nodeTwoData`,{params:params})};

/*导出节点二的数据*/
export const exportExcelForHumidityTwo = params => { return axios.get(`${baseUrl}/exportExcelForHumidityTwo`,{params:params})};
export const exportExcelForGroundTwo = params => { return axios.get(`${baseUrl}/exportExcelForGroundTwo`,{params:params})};

/*获取节点三中指定数目的数据*/
export const getNodeThreeDataForNum = params => { return axios.get(`${baseUrl}/nodeThreeData`,{params:params})};

/*导出节点三的数据*/
export const exportExcelForHumidityThree = params => { return axios.get(`${baseUrl}/exportExcelForHumidityThree`,{params:params})};
export const exportExcelForGroundThree = params => { return axios.get(`${baseUrl}/exportExcelForGroundThree`,{params:params})};
export const exportExcelForTemperatureThree = params => { return axios.get(`${baseUrl}/exportExcelForTemperatureThree`,{params:params})};
export const exportExcelForPhThree = params => { return axios.get(`${baseUrl}/exportExcelForPhThree`,{params:params})};
