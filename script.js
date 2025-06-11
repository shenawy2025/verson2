        const studentsDatabase = {
            "441": {
                name: "محمد أحمد",
                totalGrade: "380",
                arabic: "80",
                english: "60",
                math: "60",
                science: "60",
                philosophy: "60",
                history: "60",
                secondLanguage: "40",
                religion: "40",
                vocationalEducation: "20",
                physicalEducation: "10",
                case: "1",
                caseDesc: "ناجح دور أول"
            },
            "442": {
                name: "أحمد محمود",
                totalGrade: "375",
                arabic: "75",
                english: "65",
                math: "55",
                science: "60",
                philosophy: "55",
                history: "60",
                secondLanguage: "40",
                religion: "40",
                vocationalEducation: "20",
                physicalEducation: "10",
                case: "1",
                caseDesc: "ناجح دور أول"
            },
            "443": {
                name: "علي حسن",
                totalGrade: "390",
                arabic: "85",
                english: "70",
                math: "65",
                science: "60",
                philosophy: "60",
                history: "60",
                secondLanguage: "40",
                religion: "40",
                vocationalEducation: "20",
                physicalEducation: "10",
                case: "1",
                caseDesc: "ناجح دور أول"
            },
            "444": {
                name: "محمود سعيد",
                totalGrade: "400",
                arabic: "90",
                english: "80",
                math: "70",
                science: "60",
                philosophy: "60",
                history: "60",
                secondLanguage: "40",
                religion: "40",
                vocationalEducation: "20",
                physicalEducation: "10",
                case: "1",
                caseDesc: "ناجح دور أول"
            },
            "445": {
                name: "سعيد خالد",
                totalGrade: "365",
                arabic: "75",
                english: "55",
                math: "50",
                science: "60",
                philosophy: "55",
                history: "60",
                secondLanguage: "40",
                religion: "40",
                vocationalEducation: "20",
                physicalEducation: "10",
                case: "1",
                caseDesc: "ناجح دور أول"
            },
            "446": {
                name: "خالد وليد",
                totalGrade: "350",
                arabic: "70",
                english: "50",
                math: "45",
                science: "60",
                philosophy: "50",
                history: "60",
                secondLanguage: "40",
                religion: "40",
                vocationalEducation: "20",
                physicalEducation: "10",
                case: "1",
                caseDesc: "ناجح دور أول"
            },
            "447": {
                name: "وليد عمرو",
                totalGrade: "340",
                arabic: "65",
                english: "45",
                math: "40",
                science: "60",
                philosophy: "50",
                history: "60",
                secondLanguage: "40",
                religion: "40",
                vocationalEducation: "20",
                physicalEducation: "10",
                case: "1",
                caseDesc: "ناجح دور أول"
            },
            "448": {
                name: "عمرو تامر",
                totalGrade: "320",
                arabic: "60",
                english: "40",
                math: "35",
                science: "60",
                philosophy: "45",
                history: "60",
                secondLanguage: "40",
                religion: "40",
                vocationalEducation: "20",
                physicalEducation: "10",
                case: "1",
                caseDesc: "ناجح دور أول"
            },
            "449": {
                name: "تامر كريم",
                totalGrade: "310",
                arabic: "55",
                english: "35",
                math: "30",
                science: "60",
                philosophy: "40",
                history: "60",
                secondLanguage: "40",
                religion: "40",
                vocationalEducation: "20",
                physicalEducation: "10",
                case: "1",
                caseDesc: "ناجح دور أول"
            }
        };

        const searchedNumbers = new Set();
        const chatMessages = document.getElementById('chatMessages');
        const seatNumberInput = document.getElementById('seatNumber');
        const searchBtn = document.getElementById('searchBtn');

        function animateMessage(messageElement) {
            gsap.from(messageElement, {
                opacity: 0,
                y: 20,
                duration: 0.5,
                ease: "power2.out"
            });
        }

        function addBotMessage(text, delay = 0) {
            setTimeout(() => {
                const messageDiv = document.createElement('div');
                messageDiv.className = 'ai-message ai-bot-message animate__animated animate__fadeIn';
                messageDiv.innerHTML = `
                    <div class="message-avatar">AI</div>
                    <div class="message-content">
                        ${text}
                    </div>
                `;
                chatMessages.appendChild(messageDiv);
                animateMessage(messageDiv);
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, delay);
        }

        function addUserMessage(text) {
            const messageDiv = document.createElement('div');
            messageDiv.className = 'ai-message ai-user-message animate__animated animate__fadeIn';
            messageDiv.innerHTML = `
                <div class="message-avatar">أنت</div>
                <div class="message-content">
                    ${text}
                </div>
            `;
            chatMessages.appendChild(messageDiv);
            animateMessage(messageDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function showStudentResult(seatNumber, student) {
            const resultHTML = `
                <p>تم العثور على نتيجة الطالب:</p>
                <table class="result-table">
                    <tr>
                        <th>رقم الجلوس</th>
                        <td>${seatNumber}</td>
                    </tr>
                    <tr>
                        <th>الاسم</th>
                        <td>${student.name}</td>
                    </tr>
                </table>
                
                <div style="margin-top: 20px;">
                    <div class="subject-row">
                        <span class="subject-name">اللغة العربية</span>
                        <span class="subject-grade">${student.arabic}</span>
                    </div>
                    <div class="subject-row">
                        <span class="subject-name">اللغة الإنجليزية</span>
                        <span class="subject-grade">${student.english}</span>
                    </div>
                    <div class="subject-row">
                        <span class="subject-name">الرياضيات</span>
                        <span class="subject-grade">${student.math}</span>
                    </div>
                    <div class="subject-row">
                        <span class="subject-name">العلوم المتكاملة</span>
                        <span class="subject-grade">${student.science}</span>
                    </div>
                    <div class="subject-row">
                        <span class="subject-name">الفلسفة</span>
                        <span class="subject-grade">${student.philosophy}</span>
                    </div>
                    <div class="subject-row">
                        <span class="subject-name">التاريخ</span>
                        <span class="subject-grade">${student.history}</span>
                    </div>
                    <div class="subject-row">
                        <span class="subject-name">اللغة الثانية</span>
                        <span class="subject-grade">${student.secondLanguage}</span>
                    </div>
                    <div class="subject-row">
                        <span class="subject-name">الدين</span>
                        <span class="subject-grade">${student.religion}</span>
                    </div>
                    <div class="subject-row">
                        <span class="subject-name">التربية المهنية</span>
                        <span class="subject-grade">${student.vocationalEducation}</span>
                    </div>
                    <div class="subject-row">
                        <span class="subject-name">التربية الرياضية</span>
                        <span class="subject-grade">${student.physicalEducation}</span>
                    </div>
                    
                    <div class="total-grade">المجموع الكلي: ${student.totalGrade}</div>
                </div>
                
                <p class="congrats">${student.case === "1" ? 'مبروك النجاح! 🎉' : 'حظًا أوفر في المرة القادمة!'}</p>
                <p>حالة الطالب: ${student.caseDesc}</p>
            `;
            addBotMessage(resultHTML, 1000);
        }

        function showError(message) {
            addBotMessage(`<p class="error-message">${message}</p>`, 1000);
        }

        setTimeout(() => {
            addBotMessage('<p>هل أنت مستعد للبدء؟ فقط اكتب رقم جلوسك (من 1 إلى 6 أرقام) في الحقل أدناه وسأبحث عن نتيجتك!</p>', 1500);
        }, 2000);

        function searchForResult() {
            const seatNumber = seatNumberInput.value.trim();
            
            if (!seatNumber) {
                showError('الرجاء إدخال رقم الجلوس أولاً');
                return;
            }
            
            if (!/^\d{1,6}$/.test(seatNumber)) {
                showError('رقم الجلوس يجب أن يتكون من 1 إلى 6 أرقام فقط');
                return;
            }
            
            if (searchedNumbers.has(seatNumber)) {
                showError('لقد قمت بالبحث عن هذا الرقم مسبقًا. لكل طالب محاولة واحدة فقط.');
                return;
            }
            
            addUserMessage(seatNumber);
            seatNumberInput.value = '';
            
            const typingMessage = document.createElement('div');
            typingMessage.className = 'ai-message ai-bot-message';
            typingMessage.innerHTML = `
                <div class="message-avatar">AI</div>
                <div class="message-content">
                    <div class="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            `;
            chatMessages.appendChild(typingMessage);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            
            setTimeout(() => {
                chatMessages.removeChild(typingMessage);
                
                const student = studentsDatabase[seatNumber];
                if (student) {
                    searchedNumbers.add(seatNumber);
                    showStudentResult(seatNumber, student);
                } else {
                    showError('عذرًا، لا يوجد طالب مسجل بهذا رقم الجلوس');
                }
            }, 1500);
        }

        searchBtn.addEventListener('click', searchForResult);

        seatNumberInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchForResult();
            }
        });

        seatNumberInput.addEventListener('input', function(e) {
            this.value = this.value.replace(/[^0-9]/g, '');
        });

        gsap.from(".ai-chat-container", {
            opacity: 0,
            y: 50,
            duration: 0.8,
            ease: "power2.out"
        });