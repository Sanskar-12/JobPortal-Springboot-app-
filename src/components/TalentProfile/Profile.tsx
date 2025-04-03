const Profile = () => {
  return (
    <div className="w-2/3">
      <div className="relative">
        <img src="/Profile/banner.jpg" alt="Banner" className="rounded-t-2xl" />
        <img
          src="/avatar.png"
          alt="Avatar"
          className="w-48 h-48 rounded-full -bottom-1/3 absolute left-3 border-mine-shaft-950 border-8"
        />
        <div className="px-3">
          <div>Sanskar Vish</div>
          <div>Software Engineer &bull; Google</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
