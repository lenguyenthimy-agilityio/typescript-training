function ClassInfo(target: Function) {
  console.log("Class name:", target.name);
}

@ClassInfo
class ClassUser {}
// Logs: "Class name: User"
