import Array "mo:base/Array";
import Database "./database";
import Option "mo:base/Option";
import Principal "mo:base/Principal";
import Types "./types";

module {
  type NewProfile = Types.NewProfile;
  type Profile = Types.Profile;
  type Project = Types.Project;
  type UserId = Types.UserId;

  // Profiles
  public func getProfile(directory: Database.Directory, userId: UserId): Profile {
    let existing = directory.findOne(userId);
    switch (existing) {
      case (?existing) { existing };
      case (null) {
        {
          id = userId;
          firstName = "";
          lastName = "";
          imgUrl = "";
          projects = [];
        }
      };
    };
  };

  // Connections

  public func includes(x: UserId, xs: [UserId]): Bool {
    func isX(y: UserId): Bool { x == y };
    switch (Array.find<UserId>(xs, isX)) {
      case (null) { false };
      case (_) { true };
    };
  };

  // Authorization

  let adminIds: [UserId] = [];//Principal.fromText("rwvfd-5wxx6-yeevy-xe4wu-rnywu-nrkxe-vxnup-yg3uz-5rgmo-hvtbd-sqe")];

  public func isAdmin(userId: UserId): Bool {
    func identity(x: UserId): Bool { x == userId };
    Option.isSome(Array.find<UserId>(adminIds,identity))
  };

  public func hasAccess(userId: UserId, profile: Profile): Bool {
    userId == profile.id or isAdmin(userId)
  };

  public func hasProjectAccess(userId: UserId, project: Project): Bool {
    userId == project.owner or isAdmin(userId)
  };
};
