import React, { useState } from 'react';

const StudentLogin = () => {
    const [studentId, setStudentId] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        try {
            // 构建 JSON 对象
            const loginData = {
                id: studentId,
                stuPassword: password,
            };

            // 使用 fetch 发送 POST 请求
            const response = await fetch('http://localhost:8080/students/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
            });

            // 检查响应状态
            if (response.ok) {
                // 登录成功的逻辑
                alert('登入成功！');
            } else {
                // 登录失败的逻辑
                setErrorMessage('ID或密碼不正確');
            }
        } catch (error) {
            console.error('登入失敗:', error);
        }
    };

    return (
        <div>
            <h2>學生登入</h2>
            <form>
                <div>
                    <label htmlFor="studentId">學生ID：</label>
                    <input
                        type="text"
                        id="studentIdInput"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">密碼：</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button type="button" onClick={handleLogin}>
                        登录
                    </button>
                </div>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </form>
        </div>
    );
};

export default StudentLogin;
