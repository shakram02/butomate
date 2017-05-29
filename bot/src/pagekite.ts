import {spawn, ChildProcess} from 'child_process';

const PageKite_Bin = 'pagekite.py';

export class PageKiteLauncher {
  private handle: string;
  private portNumber: number;
  private child: ChildProcess;
  constructor(portNumber: number, handle: string) {
    this.handle = handle;
    this.portNumber = portNumber;
  }

  start(): ChildProcess {
    this.child = spawn(
        PageKite_Bin, [this.portNumber.toString(), this.handle],
        {stdio: 'inherit'});

    return this.child;
  }

  killChild(): void {
    if (this.child) this.child.kill();
  }
}
