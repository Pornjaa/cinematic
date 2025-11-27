const CourseDetailsPage = () => {
  // Link to the user's actual Google Form
  const googleFormUrl = "https://docs.google.com/forms/d/1nD2xEis0c6qWaLORK6a0aybotKYZSPS0hs0TQcwDGcw/viewform";
  const facebookPageUrl = "https://www.facebook.com/profile.php?id=61563219540499";

  return (
    <div className="container mx-auto px-6 py-20 pt-32 animate-fade-in">
      <div className="max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-xl overflow-hidden">
        <div className="p-8 md:p-12">
          <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            รายละเอียดคอร์สและวิธีสมัครเรียน
          </h1>
          <p className="text-gray-300 text-lg mb-8">
            ปลดล็อคศักยภาพการสร้างสรรค์ของคุณสู่ระดับมืออาชีพ เรียนรู้การใช้เครื่องมือ AI ที่ล้ำสมัยที่สุดในวงการเพื่อสร้างสรรค์ผลงานภาพยนตร์และวิดีโอที่น่าทึ่ง ลดต้นทุนและเวลา แต่เพิ่มมูลค่าให้ธุรกิจและผลงานของคุณอย่างก้าวกระโดด
          </p>

          <div className="bg-gray-900 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">คอร์สเรียน</h2>
            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Generative Kling</h3>
              <div className="text-gray-300">
                <p className="mb-4">
                  เหมาะสำหรับผู้เริ่มต้น สอนตั้งแต่พื้นฐานการใช้งานเครื่องมือทั้งหมดของ Kling AI ด้วยการใช้ Chat GPT เป็นผู้ช่วยทำให้คุณควบคุมงานสร้างสรรค์ของคุณได้อย่างง่ายดายเป็นภาษาไทยง่ายๆ
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
                  <li>
                    การสร้างภาพนิ่งด้วย Kling AI
                    <ul className="list-['-_'] list-inside ml-6 mt-1 text-gray-400">
                        <li>การใช้ Text to Image และ การใช้ภาพอ้างอิงเพื่อสร้างภาพนิ่ง</li>
                    </ul>
                  </li>
                  <li>การสร้างภาพเคลื่อนไหวด้วย Text to video</li>
                  <li>การใช้ start-end frame ในงานวิดีโอ</li>
                  <li>การใช้งานฟังก์ชัน Element เพื่องานพรีเซนต์สินค้าและผลิตภัณฑ์</li>
                  <li>การใช้งานฟังก์ชัน Multi Element เพื่อปรับเปลี่ยนเฉพาะจุดในวิดีโอได้ดั่งใจ</li>
                  <li>การใช้งาน effect สำเร็จรูป</li>
                  <li>การทำ lip sync ให้ตัวละครพูดได้</li>
                  <li>การตัดต่อและออกแบบเสียงเบื้องต้น</li>
                  <li>แนวคิดและกระบวนการในการสร้างภาพเคลื่อนไหวแนวเล่าเรื่อง</li>
                </ul>
                <p className="font-bold text-yellow-400">
                  พิเศษ*** แถมคอร์สการสอนเสริมเนื้อหาและเครื่องมือตามกระแส ทั้งการใช้งาน Google veo3, Nano banana, Meta AI, Grok และ Sora2
                </p>
              </div>
            </div>

            <hr className="my-8 border-gray-700" />

            <div>
              <h3 className="text-xl font-bold text-cyan-400 mb-2">Master of Horror</h3>
              <div className="text-gray-300">
                <p className="mb-4">
                  คอร์สต่อยอดสำหรับสายสยองขวัญโดยเฉพาะ
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4 pl-4">
                  <li>องค์ประกอบการเล่าเรื่อง</li>
                  <li>องค์ประกอบสำหรับเรื่องสยองขวัญ</li>
                  <li>จังหวะการเล่า</li>
                  <li>การสร้างตัวละคร</li>
                  <li>การออกแบบฉาก</li>
                  <li>การลำดับเรื่อง</li>
                  <li>การใช้งาน photoshop พื้นฐานสำหรับการสร้างฉากสยองขวัญ</li>
                  <li>การออกแบบเสียงและตัดต่อ</li>
                </ul>
                <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-cyan-500/30">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                    <div>
                      <h4 className="font-bold text-cyan-400">รูปแบบการเรียน: ออนไลน์สอนสดเท่านั้น</h4>
                      <p>ราคา <span className="font-bold text-white text-lg">3,000</span> บาท</p>
                    </div>
                    <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="mt-3 sm:mt-0 flex-shrink-0 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-5 rounded-full transition-transform duration-300 transform hover:scale-105">
                      สมัครเรียนคอร์สนี้
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="bg-gray-900 p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">รูปแบบการเรียน (สำหรับคอร์ส Generative Kling)</h2>
            <div className="space-y-6 text-gray-300">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-gray-800/50 rounded-lg">
                <div>
                  <h3 className="font-bold text-cyan-400">เรียนออนไลน์ผ่านกลุ่มปิด facebook</h3>
                  <p>ราคาพิเศษเพียง <span className="font-bold text-white">990</span> บาท (จากราคาปกติ 1,590 บาท)</p>
                </div>
                <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="mt-3 sm:mt-0 flex-shrink-0 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-5 rounded-full transition-transform duration-300 transform hover:scale-105">สมัครเลย</a>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-gray-800/50 rounded-lg">
                <div>
                  <h3 className="font-bold text-cyan-400">เรียนออนไลน์แบบสอนสด 1:1</h3>
                  <p>ราคาเพียง <span className="font-bold text-white">2,500</span> บาท/ท่าน</p>
                </div>
                 <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="mt-3 sm:mt-0 flex-shrink-0 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-5 rounded-full transition-transform duration-300 transform hover:scale-105">สมัครเลย</a>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-gray-800/50 rounded-lg">
                <div>
                  <h3 className="font-bold text-cyan-400">เรียนออนไลน์แบบสอนสดรวมกลุ่ม 4-8 คน (ผู้เรียนรวมกลุ่มมาเอง)</h3>
                  <p>ราคาเพียง <span className="font-bold text-white">1,500</span> บาท/ท่าน</p>
                </div>
                 <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="mt-3 sm:mt-0 flex-shrink-0 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-5 rounded-full transition-transform duration-300 transform hover:scale-105">สมัครเลย</a>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-4 bg-gray-800/50 rounded-lg">
                <div>
                  <h3 className="font-bold text-cyan-400">เรียน onsite สอนถึงที่</h3>
                  <p>ผู้เรียนเลือกสถานที่และเวลาได้เอง ราคาเพียง <span className="font-bold text-white">25,000</span> บาทเท่านั้น (ผู้เรียนรวมกันได้ไม่เกิน 8 ท่าน) สอนเฉพาะในเขตกรุงเทพและกาญจนบุรี</p>
                </div>
                 <a href={googleFormUrl} target="_blank" rel="noopener noreferrer" className="mt-3 sm:mt-0 flex-shrink-0 bg-cyan-500 hover:bg-cyan-600 text-white font-bold py-2 px-5 rounded-full transition-transform duration-300 transform hover:scale-105">สมัครเลย</a>
              </div>
            </div>
            <div className="mt-8 text-center border-t border-gray-700 pt-6">
              <p className="text-gray-400 mb-4">
                สามารถสมัครโดยตรงหรือสอบถามข้อมูลเพิ่มเติมได้ที่
              </p>
              <a 
                href={facebookPageUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300 transform hover:scale-105"
              >
                สมัครตรงผ่านแชทเพจ
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-12">
            <div className="bg-gray-900 p-6 rounded-lg h-full">
              <h2 className="text-2xl font-bold text-white mb-4">ขั้นตอนการสมัครและชำระเงิน</h2>
              <ol className="list-decimal list-inside text-gray-300 space-y-3">
                <li>
                  กด "สมัครเลย" หรือ "สมัครเรียนคอร์สนี้"
                </li>
                <li>
                  กรอกข้อมูลของท่านพร้อมส่งสลิปการโอนใน google form
                </li>
                <li>
                  ยืนันการส่งสลิปด้วยการส่งข้อความแจ้งที่ <a href={facebookPageUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline hover:text-cyan-300">Facebook เพจ Cinematic AI</a>
                </li>
                <li>
                  เมื่อได้รับแจ้งเตือนทีมงานจะรีบติดต่อกลับหาท่านโดยเร็วที่สุด
                </li>
              </ol>
            </div>
            
            <div className="bg-gray-700/50 border border-cyan-500/30 p-6 rounded-lg text-center flex flex-col justify-center h-full">
              <h3 className="text-2xl font-bold text-white mb-2">โปรโมชั่นพิเศษ</h3>
              <p className="text-gray-300 mb-3">สำหรับคอร์สเรียนออนไลน์ผ่านกลุ่มปิด (Generative Kling)</p>
              <p className="text-5xl font-bold text-cyan-400 my-2">990 บาท</p>
              <p className="text-gray-400 line-through mb-4">(จากราคาเต็ม 1,590 บาท)</p>
              <p className="font-bold text-yellow-400 text-sm">*** สำหรับ 100 ท่านแรกเท่านั้น ***</p>
            </div>
          </div>

           <div className="text-center mt-12">
             <a 
                href={googleFormUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full md:w-auto bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-10 rounded-full text-lg transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
              >
                สมัครเรียนผ่าน Google Form ที่นี่
              </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailsPage;