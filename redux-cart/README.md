# Action Creator
- Chứa các hàm trả về action object
- action object: {type: 'ACTION_TYPE', payload: 'data'}
# Reducer
- Chứa các hàm xử lý action object
- Reducer nhận vào 2 tham số: state và action
- Reducer trả về state mới
- Reducer không được thay đổi state cũ
- index.js sẽ gọi hàm createStore của redux để tạo ra store và tổng hợp các reducer
# Store
- Chứa state của ứng dụng
# Type  
- Chứa các biến quy định action type    