function Profile() {
  return (
    <div className="card profile-card">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile Avatar"
        className="avatar"
      />
      <h2>ชื่อของคุณ</h2>
      <h4 className="role">Software Developer & Gamer</h4>
      <p className="bio">
        สวัสดีครับ! ผมเป็นนักพัฒนาที่หลงใหลในการสร้างสรรค์สิ่งใหม่ๆ 
        ถนัดการสร้างแอปพลิเคชันด้วย <strong>Flutter</strong> และพัฒนาระบบหลังบ้านด้วย <strong>Django</strong> 
        นอกจากเวลาเขียนโค้ดแล้ว ผมชอบเล่นเกมและสนใจงานศิลปะแบบ Paper Quilling เป็นงานอดิเรก
      </p>
    </div>
  );
}

export default Profile;
