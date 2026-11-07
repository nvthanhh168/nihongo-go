# 🌸 NIHONGO GO! (日本語で行こう！) - ỨNG DỤNG HỌC TIẾNG NHẬT N5 TƯƠNG TÁC CAO

> **Ứng dụng học tiếng Nhật N5 chuẩn giáo trình Minna no Nihongo mới**: Tích hợp Bản đồ lộ trình 25 Bài N5, Game đoán từ vựng trắc nghiệm, Flashcard 3D, Lật thẻ trí nhớ, Bảng chữ cái Kana kèm Canvas luyện viết, và **Phòng khảo bài phát âm AI cùng Cô giáo Tanaka-sensei**.

---

## 🚀 HƯỚNG DẪN XUẤT BẢN LÊN GITHUB & VERCEL

Để xuất bản ứng dụng thành phần mềm online cho người ngoài học tập trên Máy tính, Điện thoại (iPhone/Android) và iPad:

### Bước 1: Tạo Repository trên GitHub
1. Đăng nhập vào GitHub: **https://github.com/nvthanhh168**
2. Bấm vào nút **New Repository** (hoặc truy cập: https://github.com/new)
3. Điền thông tin:
   - **Repository name**: `nihongo-go`
   - **Visibility**: Chọn **Public** (để Vercel kết nối miễn phí)
   - Bỏ tích "Add a README file" (vì project đã có sẵn README.md)
4. Bấm nút **Create repository**.

### Bước 2: Đẩy Code từ máy tính lên GitHub (Chỉ cần 1 Click)
1. Trong thư mục dự án, nhấp đúp vào file:
   👉 **`Day_Len_Github_Va_Vercel.bat`**
2. Nhấn **Y** để xác nhận đẩy nhánh `main` lên GitHub `https://github.com/nvthanhh168/nihongo-go.git`.
3. Nếu trình duyệt yêu cầu đăng nhập GitHub hoặc nhập Personal Access Token (PAT), hãy đăng nhập để xác thực.

### Bước 3: Đưa lên Vercel để xuất bản ra Web (Miễn phí 100%)
1. Đăng nhập tài khoản Vercel của bạn: **https://vercel.com/nvt1**
2. Bấm nút **Add New...** -> Chọn **Project** (hoặc truy cập https://vercel.com/new).
3. Ở cột GitHub, tìm repo **`nihongo-go`** -> Bấm **Import**.
4. Cấu hình cài đặt:
   - **Framework Preset**: Chọn **Other** (hoặc để mặc định).
   - **Root Directory**: `./` (để nguyên).
5. Bấm nút **Deploy**.
6. Chỉ sau 20 - 30 giây, Vercel sẽ cấp cho bạn đường link trực tuyến (ví dụ: `https://nihongo-go-nvt1.vercel.app`).
   - Đường link này hoạt động 24/7 trên toàn thế giới!
   - Bất kỳ ai dùng điện thoại, iPad, máy tính mở link đều có thể học tập trọn vẹn.

---

## 📱 BỐ CỤC TỐI ƯU TOÀN DIỆN CHO MÁY TÍNH, ĐIỆN THOẠI & IPAD

Ứng dụng đã được tinh chỉnh bố cục đáp ứng (Responsive Grid & Fluid Flexbox) đảm bảo:
- **Máy tính để bàn & Màn hình lớn (1440px - 2560px)**:
  - Độ rộng mở rộng lên `min(1400px, 96vw)`, bố cục cân đối 2 bên, không bị khoảng trắng thừa.
  - Cột Mascot trợ lý bên trái sticky cố định, nội dung bài học mở rộng tối đa bên phải.
- **Máy tính bảng & iPad (768px - 1024px)**:
  - Cột Mascot chuyển thành thanh đồng hành nằm ngang tinh tế, không chiếm diện tích màn hình.
  - Bộ chọn bài học (Quick Lesson Selector) tự động dàn xếp 1 cột gọn gàng.
  - Các ô trắc nghiệm và thẻ từ vựng hiển thị 2 cột thoáng đãng, dễ chạm cảm ứng.
- **Điện thoại di động (iPhone / Android 360px - 480px)**:
  - Thanh Header chia thành 2 hàng rõ ràng: Hàng trên gồm Logo + Chọn N5/N4 + Âm thanh + Tài khoản; Hàng dưới là dải ribbon Gamification HUD lướt mượt mà.
  - Thanh Tabs có 2 mũi tên cuộn `‹` và `›`, đồng thời có nút **"☰ 10 Chế Độ"** mở bảng danh mục popup đầy đủ 10 chế độ học, không lo bị che khuất hay mất thông tin.
  - Bảng vẽ Canvas cảm ứng hỗ trợ thao tác chạm vẽ mượt mà không bị trượt trang.

---

## 🏆 KHO DỮ LIỆU & CÁC CHẾ ĐỘ HỌC TẬP

1. **🗺️ Lộ Trình 25 Bài N5 (Minna no Nihongo mới)**:
   - Gồm 5 Chặng (Tokyo -> Kyoto -> Osaka -> Hokkaido -> Núi Phú Sĩ), tổng cộng **683 từ vựng N5 đầy đủ 100%**.
   - Mỗi bài học có Bảng 3 Nhiệm vụ (Flashcard -> Game đoán từ -> Khảo bài phát âm).
2. **🎮 Game Đoán Từ Vựng N5**:
   - 4 Chế độ trắc nghiệm: Mix tổng hợp, Nhìn hình đoán chữ, Nghe giọng đọc đoán nghĩa, Chuyển Kanji sang Hiragana.
3. **🎤 Test Đọc Phát Âm AI Voice**:
   - Sử dụng Microphone và Web Speech API để chấm điểm phát âm tiếng Nhật.
   - Cô giáo Tanaka-sensei phân tích chuyên sâu âm đục (Dakuten), âm ngắt (っ), trường âm và từ đồng âm.
4. **👩‍🏫 Lớp Cô Tanaka AI (Chat Dojo)**:
   - Khảo bài ngữ pháp thích ứng theo cấp độ Level bài học hiện tại của học viên.
5. **🈸 Bảng Chữ Cái & Tập Viết**:
   - Bảng chữ Hiragana & Katakana với bảng vẽ Canvas cảm ứng.
6. **🧩 Ngữ Pháp & Ghép Câu N5**:
   - 22 mẫu câu ngữ pháp trọng tâm và game ghép khối từ thành câu hoàn chỉnh.
7. **🎴 Flashcard 3D**:
   - Lật thẻ 3D tương tác hai chiều kèm âm thanh và hình vẽ minh họa SVG.
8. **🃏 Lật Thẻ Trí Nhớ**:
   - Trò chơi Memory Match tìm cặp thẻ Kanji - Hiragana - Nghĩa.
9. **📖 Sổ Tay Từ Vựng N5**:
   - Tra cứu nhanh toàn bộ 683 từ vựng theo bài học hoặc theo từ khóa.
10. **🎯 Phòng Thi Thử JLPT N5**:
    - Đề thi trắc nghiệm bấm giờ kèm Chứng chỉ cấp Triện đỏ Hanko.
