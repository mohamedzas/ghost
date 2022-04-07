! function() {
    "use strict";
    class t {
        constructor(t, e) {
            this._callback = null, this._this = null, this._callback = t, this._this = e
        }
        notify(...t) {
            this._callback.call(this._this, ...t)
        }
        compar(t) {
            return this._this == t
        }
        notifyReturn(...t) {
            return this._callback.call(this._this, ...t)
        }
    }
    class e {
        constructor() {
            this._isUp = !1, this._UpList = {}
        }
        static get instance() {
            return this._ins && null != this._ins || (this._ins = new e), this._ins
        }
        AddUPEvent(e, i, s) {
            this._UpList[e] && (this._UpList[e] = null), this._UpList[e] = new t(i, s)
        }
        removeListEvent(t) {
            this._UpList[t] && delete this._UpList[t]
        }
        removeAllListEvent() {
            for (let t in this._UpList) delete this._UpList[t]
        }
        HandleUPEvent() {
            if (this._isUp)
                for (let t in this._UpList) {
                    let e = this._UpList[t];
                    e && e.notify()
                }
        }
        StartGame() {
            this._isUp = !0
        }
        GameOver() {
            this._isUp = !1
        }
    }
    class i {
        constructor() {
            this._newBuildData = {
                at: [
                    ["Turret I", 8, 0, 4, 4, ""],
                    ["Turret II", 16, 0, 8, 4.5, ""],
                    ["Turret III", 32, 0, 16, 5, ""],
                    ["Water gun I", 64, 0, 32, 5.5, ""],
                    ["Water gun II", 256, 0, 64, 6, "game_1"],
                    ["Bubble Machine I", 512, 0, 128, 6.5, ""],
                    ["Bubble Machine II", 1024, 32, 256, 7, "game_2"],
                    ["Bubble Machine III", 2048, 64, 512, 7.5, ""],
                    ["Laser tower I", 4096, 128, 1024, 8, "game_3"],
                    ["Laser tower II", 8192, 256, 2048, 8.5, "game_4"],
                    ["Laser tower III", 16384, 512, 4096, 9, "game_5"],
                    ["Laser tower IV", 32768, 1024, 8192, 9.5, "game_6"],
                    ["Fort of Light", 65536, 2048, 16384, 10, ""]
                ],
                bed: [
                    ["Cot I", 0, 0, 1, 0, ""],
                    ["Cot II", 25, 0, 2, 0, ""],
                    ["Cot III", 50, 0, 4, 0, "door_2"],
                    ["Cot IV", 100, 0, 8, 0, ""],
                    ["Standard Bed I", 200, 0, 16, 0, "door_5"],
                    ["Standard Bed II", 400, 0, 32, 0, ""],
                    ["Hardcover Bed", 800, 16, 64, 0, "door_8"],
                    ["Standard Queen", 1600, 32, 128, 0, "door_10"],
                    ["Deluxe Queen", 3200, 64, 256, 0, "door_11"],
                    ["Presidential Bed", 6400, 128, 512, 0, "door_12"]
                ],
                door: [
                    ["Iron gate I", 0, 0, 50, 0, ""],
                    ["Iron gate II", 16, 0, 80, 0, ""],
                    ["Iron gate III", 32, 0, 160, 0, ""],
                    ["Iron gate IV", 64, 0, 200, 0, ""],
                    ["Iron gate V", 128, 0, 250, 0, ""],
                    ["Steel Door I", 256, 0, 320, 0, ""],
                    ["Steel Door II", 512, 16, 640, 0, ""],
                    ["Steel Door III", 1024, 32, 1280, 0, ""],
                    ["Steel Door IV", 2048, 64, 2560, 0, ""],
                    ["Steel Door V", 4096, 128, 5120, 0, ""],
                    ["Alloy Door I", 8192, 256, 10240, 0, ""],
                    ["Alloy Door II", 16384, 512, 20480, 0, ""],
                    ["Alloy Door III", 32768, 1024, 40960, 0, ""]
                ],
                game: [
                    ["Game console I", 200, 0, 1, 0, ""],
                    ["Game console II", 400, 0, 2, 0, ""],
                    ["Game console III", 800, 0, 4, 0, ""],
                    ["Game console IV", 1600, 0, 6, 0, ""],
                    ["Game console V", 3200, 0, 8, 0, ""],
                    ["Game console VI", 6400, 0, 10, 0, ""],
                    ["Game console VII", 12800, 0, 15, 0, ""],
                    ["Game console VIII", 25600, 0, 20, 0, ""],
                    ["Game console IX", 51200, 0, 25, 0, ""],
                    ["Game console X", 102400, 0, 30, 0, ""]
                ],
                mine: [
                    ["Copper ore", 0, 128, 8, 0, ""],
                    ["Silver mine", 0, 1024, 32, 0, ""],
                    ["Gold Mine", 0, 2048, 128, 0, ""],
                    ["Diamond Mine", 0, 4096, 512, 0, ""]
                ]
            }, this._newBuildData1 = {
                spell: ["Spell Catapult", 0, 64, 0, 0, ""],
                ice: ["Fridge", 0, 256, 0, 0, ""],
                entrapment: ["Trapping", 0, 512, 0, 0, ""],
                barb: ["Barbs", 0, 512, 0, 0, ""],
                guillotine: ["Guillotine", 0, 2048, 0, 0, ""],
                repair: ["Repair machine", 0, 64, 0, 0, ""],
                energyhood: ["Energy hood", 0, 64, 0, 0, ""],
                smoney: ["ATM", 0, 128, 0, 0, ""],
                longrange: ["Sentry tower", 0, 256, 0, 0, ""],
                particlea: ["Accelerator", 0, 2048, 0, 0, ""],
                solenoid: ["Solenoid", 0, 2048, 0, 0, ""]
            }, this._introduce = {
                at: [
                    ["ATK:  4\nSCOPE：4"],
                    ["ATK:  8\nSCOPE：4.5"],
                    ["ATK:  16\nSCOPE：5"],
                    ["ATK:  32\nSCOPE：5.5"],
                    ["ATK:  64\nSCOPE：6\nNeed：Game console I"],
                    ["ATK:  128\nSCOPE：6.5"],
                    ["ATK:  256\nSCOPE：7\nNeed：Game console II"],
                    ["ATK:  512\nSCOPE：7.5"],
                    ["ATK:  1024\nSCOPE：8\nNeed：Game console III"],
                    ["ATK:  2048\nSCOPE：8.5\nNeed：Game console IV"],
                    ["ATK:  4096\nSCOPE：9\nNeed：Game console V"],
                    ["ATK:  8192\nSCOPE：9.5\nNeed：Game console VI"],
                    ["ATK:  16384\nSCOPE：10"]
                ],
                bed: [
                    ["Produce：  1/s"],
                    ["Produce：  2/s"],
                    ["Produce：  4/s\nNeed：Iron gate II"],
                    ["Produce：  8/s"],
                    ["Produce：  16/s\nNeed：Iron gate V"],
                    ["Produce：  32/s"],
                    ["Produce：  64/s\nNeed：Steel Door III"],
                    ["Produce：  128/s\nNeed：Steel Door V"],
                    ["Produce：  256/s\nNeed：Alloy Door I"],
                    ["Produce：  512/s\nNeed：Alloy Door II"]
                ],
                door: [
                    ["HP：   50HP"],
                    ["HP：   70HP"],
                    ["HP：   140HP"],
                    ["HP：   200HP"],
                    ["HP：   250HP"],
                    ["HP：   320HP"],
                    ["HP：   640HP"],
                    ["HP：   1280HP"],
                    ["HP：   2560HP"],
                    ["HP：   5120HP"],
                    ["HP：   10240HP"],
                    ["HP：   20480HP"],
                    ["HP：   40960HP"]
                ],
                game: [
                    ["Produce：  1/2s"],
                    ["Produce：  2/s"],
                    ["Produce：  4/s"],
                    ["Produce：  6/s"],
                    ["Produce：  8/s"],
                    ["Produce：  10/s"],
                    ["Produce：  15/s"],
                    ["Produce：  20/s"],
                    ["Produce：  25/s"],
                    ["Produce：  30/s"]
                ],
                mine: [
                    ["Produce：  8/s"],
                    ["Produce：  32/s"],
                    ["Produce：  128/s"],
                    ["Produce：  512/s"]
                ]
            }, this._introduce1 = {
                spell: "Effect：   30% chance, control for 3s",
                ice: "Effect：   Slow down ghost attack speed by 20%",
                entrapment: "Effect：   Shoots a net at the fleeing ghost for 2s",
                barb: "Effect：   The door is attacked, reflecting 1% damage",
                guillotine: "Effect：   HP<20%, deal 10% extra damage",
                repair: "Effect：   Restores 2% of the door's HP per second",
                energyhood: "Effect：   Door HP < 30%, generates a 3s shield",
                smoney: "Effect：   Gives turrets the ability to steal money",
                longrange: "Effect：   Increases turret attack range by 20%",
                particlea: "Effect：   Increases turret attack speed by 50%",
                solenoid: "Effect：   The closer the enemy is, the faster the attack speed"
            }, this._basicBuildData = [
                ["at_1", "game_1", "repair_1"],
                ["mine_1", "mine_2", "mine_3", "mine_4"],
                ["spell_1", "energyhood_1", "smoney_1", "ice_1"],
                ["entrapment_1", "barb_1", "guillotine_1"],
                ["longrange_1", "particlea_1", "solenoid_1"]
            ], this._ShopBuildData = [
                ["spell_1", "energyhood_1", "smoney_1", "ice_1"],
                ["entrapment_1", "barb_1", "guillotine_2", "repair_1"],
                ["longrange_1", "particlea_1", "solenoid_2"]
            ], this._skin = {
                spell: "map/spellimg_0.png",
                energyhood: "map/energyhood_2.png",
                smoney: "map/money.png",
                entrapment: "map/entramentImage_1.png",
                guillotine: "map/guillotine_3.png",
                particlea: "map/particleaImg.png",
                solenoid: "map/solenoidimg_1.png"
            }, this._ShopBuildMoney = {
                repair: ["Repair machine", 10],
                spell: ["Spell Catapult", 20],
                smoney: ["ATM", 20],
                ice: ["Fridge", 30],
                entrapment: ["Entrap", 30],
                barb: ["Barb", 50],
                energyhood: ["Shield", 50],
                guillotine: ["Guillotine", 999],
                longrange: ["Sentry tower", 30],
                particlea: ["Accelerator", 100],
                solenoid: ["Solenoid", 999]
            }, this._AIPos = [
                [21, 22],
                [21, 23],
                [22, 22],
                [22, 23],
                [23, 22],
                [23, 23]
            ], this._trollPos = [
                [22, 1],
                [41, 23],
                [21, 35],
                [1, 23]
            ], this.AtBasePower = [1, 2, 4, 6, 14, 22.5, 40, 75], this.bulletBuff = {
                1: [0, 0, .01, .02, .03, .04, .05, .08],
                2: [0, 0, 0, 0, 0, .5, .7, 1],
                3: [0, 0, 1, 2, 3, 4, 5, 8]
            }, this.AtBuffEff = [
                [0, 0, 0, 0, 0, .01, .02, .04],
                [0, 0, 0, 0, 0, .01, .02, .04],
                [0, 0, 0, 0, 0, .01, .02, .04]
            ]
        }
        GetSubSkin(t) {
            let e = this._skin[t];
            return e || null
        }
        GetBuildData(t, e) {
            let i = this._newBuildData[t];
            return null == i ? (i = this._newBuildData1[t], 1 == e && null != i ? i : void 0) : i[e - 1]
        }
        getbasicBuildData(t) {
            return t >= this._basicBuildData.length && (t = 0), this._basicBuildData[t]
        }
        GetBulidBuff(t, e) {
            var i = this.bulletBuff[t.toString()];
            return null != i ? i[e] : 0
        }
        GetAtBuffEff(t, e) {
            return this.AtBuffEff[t - 1][e]
        }
        GetAtPower(t) {
            return t >= 0 && t < 8 ? this.AtBasePower[t] : null
        }
        GetAIPos(t) {
            return this._AIPos[t]
        }
        GetTrollPos() {
            let t = Math.floor(Math.random() * this._trollPos.length);
            return this._trollPos[t]
        }
        GetIntroduce(t, e) {
            let i = this._introduce[t];
            return null == i ? (i = this._introduce1[t], 1 == e && null != i ? i : void 0) : i[e - 1]
        }
        GetShopData(t) {
            return this._ShopBuildData[t]
        }
        GetShopBuildMoney(t) {
            return this._ShopBuildMoney[t]
        }
    }
    class s {
        constructor() {
            this._cdn = {
                taskOpenCount: 3,
                animSelectOpenCount: 1,
                shopOpenCount: 1,
                diff: {
                    diffCount: [5],
                    diff: [
                        [0, 1],
                        [1, 2]
                    ]
                },
                treasureChestOpenCount: 2,
                treasureChestShow: 2,
                treasureChestFirstShow: 2,
                treasureChestLoopShow: [3, 0, 1, 2],
                treasureChestArr: [
                    ["repair_1", "repair_1", "repair_1", "spell_1", "spell_1", "ice_1"],
                    ["repair_1", "repair_1", "repair_1", "ice_1", "barb_1"],
                    ["repair_1", "repair_1", "smoney_1", "ice_1", "entrapment_1", "energyhood_1"],
                    ["repair_1", "repair_1", "repair_1", "repair_1", "ice_1", "entrapment_1", "longrange_1", "longrange_1", "particlea_1"]
                ],
                doorADVOpneCount: 2
            }, this.tcArr = null
        }
        get cdn() {
            return this._cdn
        }
    }
    class _ {
        constructor() {
            this.PR = {}, this._startGame = !1, this._winOrLoser = !1, this._isMvp = !1, this._mvpIndex = -1, this._playerArr = new Array, this._lpPath = null
        }
        GetRoomPR(t) {
            let e = this.PR[t];
            return null == e ? null : e
        }
        SetRoomPR(t) {
            let e = this.PR[t];
            return null == e && (e = {
                gold1: 0,
                gold2: 0,
                gold1_Count: 0,
                gold2_Count: 0
            }, this.PR[t] = e), e
        }
        ClearPR() {
            this.PR = {}
        }
        SetPR(t, e, i) {
            let s = this.PR[t];
            s || (s = this.SetRoomPR(t)), s.gold1 += e, s.gold2 += i, s.gold1_Count += e, s.gold2_Count += i
        }
        GameOver() {
            this.PR = {}, this._playerArr = [], this._lpPath = null, this._startGame = !1
        }
        StartGame() {
            this._startGame = !0
        }
        set isWin(t) {
            this._winOrLoser = t
        }
        get isWin() {
            return this._winOrLoser
        }
        set playerArr(t) {
            this._playerArr.push(t)
        }
        GetPlayerArr(t) {
            return this._playerArr[t]
        }
        get trollName() {
            return this._trollName
        }
        set trollName(t) {
            this._trollName = t
        }
        get playerInfo() {
            return this._playerInfo
        }
        sortPlayer(t) {
            if (this.InitPlayerInfo(t), this._playerInfo.length > 0)
                for (let t = 0; t < this._playerInfo.length - 1; t++) {
                    let e = this._playerInfo[t];
                    for (let i = t; i < this._playerInfo.length; i++) {
                        let s = this._playerInfo[i];
                        if (e.time < s.time) this._playerInfo[t] = s, this._playerInfo[i] = e, e = s;
                        else if (e.time == s.time) {
                            .3 * e.gold1 + .7 * e.gold2 < .3 * s.gold1 + .7 * s.gold2 && (this._playerInfo[t] = s, this._playerInfo[i] = e, e = s)
                        }
                    }
                }
        }
        InitPlayerInfo(t) {
            let e = t;
            if (e.length > 0) {
                let t = [];
                for (let i = 0; i < e.length; i++) {
                    let s = e[i],
                        _ = this.GetRoomPR(s.roomIndex);
                    _ || (_ = {
                        gold1_Count: 0,
                        gold2_Count: 0
                    });
                    let n = s.win,
                        a = s.lose,
                        l = {
                            roomindex: s.roomIndex,
                            name: s.name,
                            time: s.dieTime,
                            gold1: _.gold1_Count,
                            gold2: _.gold2_Count,
                            win: n,
                            lose: a
                        };
                    t.push(l)
                }
                this._playerInfo = t
            }
        }
        get isMvp() {
            return this._isMvp
        }
        set isMvp(t) {
            this._isMvp = t
        }
        set lpPath(t) {
            this._lpPath = t
        }
        get lpPath() {
            return this._lpPath
        }
        get isStart() {
            return this._startGame
        }
        get mvpIndex() {
            return this._mvpIndex
        }
        set mvpIndex(t) {
            this._mvpIndex = t
        }
    }
    class n {
        constructor() {
            this._key = "PlayerData", this._trollIndex = 0, this.countI = 3, this.skinMaxNum = 6, this.skin = [0, 6, 2, 3, 4, 5], this._data = {
                _playerSelectIndex: 0,
                _playerSkin: [0],
                _win: 0,
                _lose: 0,
                _mvp: 0,
                _gold: 0,
                _task: 0,
                _taskOk: !1,
                _ysOK: !1,
                _blueprint: {
                    spell: 1,
                    ice: 1,
                    entrapment: 1,
                    barb: 1,
                    guillotine: 1,
                    repair: 10,
                    energyhood: 1,
                    smoney: 1,
                    longrange: 1,
                    particlea: 1,
                    solenoid: 1
                }
            }, this._goldTextArr = [], this.Read()
        }
        get key() {
            return this._key
        }
        get trollIndex() {
            let t = Math.floor(this.DZCount / this.countI),
                e = Math.floor(t % this.skinMaxNum);
            return this._trollIndex = e, this.skin[this._trollIndex]
        }
        get PlayerSkin() {
            return this._data._playerSkin
        }
        set PlayerSkin(t) {
            this.InspectplayerSkin(t[0]) || (this._data._playerSkin.push(t[0]), this.Write())
        }
        InspectplayerSkin(t) {
            for (let e = 0; e < this._data._playerSkin.length; e++) {
                if (this._data._playerSkin[e] == t) return !0
            }
            return !1
        }
        get playerSelectIndex() {
            return this._data._playerSelectIndex
        }
        set playerSelectIndex(t) {
            this._data._playerSelectIndex = t
        }
        Read() {
            try {
                let t = Laya.LocalStorage.getJSON(this.key);
                if (null != t) {
                    let e = JSON.parse(t);
                    this._data._playerSelectIndex = e._playerSelectIndex ? e._playerSelectIndex : this._data._playerSelectIndex, this._data._playerSkin = e._playerSkin ? e._playerSkin : this._data._playerSkin, this._data._win = e._win ? e._win : this._data._win, this._data._lose = e._lose ? e._lose : this._data._lose, this._data._mvp = e._mvp ? e._mvp : this._data._mvp, this._data._gold = e._gold ? e._gold : this._data._gold, this._data._task = e._task ? e._task : this._data._task, this._data._taskOk = e._taskOk ? e._taskOk : this._data._taskOk, this._data._ysOK = e._ysOK ? e._ysOK : this._data._ysOK, this._data._blueprint = e._blueprint ? e._blueprint : this._data._blueprint
                }
            } catch (t) {
                this.Write()
            }
        }
        Write() {
            try {
                let t = JSON.stringify(this._data);
                Laya.LocalStorage.setJSON(this.key, t)
            } catch (t) {}
        }
        get win() {
            return this._data._win
        }
        get lose() {
            return this._data._lose
        }
        get mvp() {
            return this._data._mvp
        }
        set win(t) {
            this._data._win = t, this.Write()
        }
        set lose(t) {
            this._data._lose = t, this.Write()
        }
        set mvp(t) {
            this._data._mvp = t, this.Write()
        }
        GetBuileprintNum(t) {
            let e = this._data._blueprint[t];
            return null != e ? e : null
        }
        ModifiedBuileprintQuantity(t, e) {
            null != this._data._blueprint[t] && (this._data._blueprint[t] += e, this._data._blueprint[t] < 0 && (this._data._blueprint[t] = 0), this.Write())
        }
        set goldText(t) {
            this._goldTextArr.push(t)
        }
        get gold() {
            return this._data._gold
        }
        get taskIndex() {
            return this._data._task
        }
        set taskIndex(t) {
            this._data._task = t, this.Write()
        }
        set gold(t) {
            if (this._data._gold = t, this._data._gold < 0 && (this._data._gold = 0), this._goldTextArr.length > 0)
                for (let t = 0; t < this._goldTextArr.length; t++) {
                    this._goldTextArr[t].text = this._data._gold.toString()
                }
            this.Write()
        }
        get DZCount() {
            return this._data._win + this._data._lose
        }
        get taskOk() {
            return this._data._taskOk
        }
        set taskOk(t) {
            this._data._taskOk = t, this.Write()
        }
        set ysOK(t) {
            this._data._ysOK = t, this.Write()
        }
        get ysOK() {
            return this._data._ysOK
        }
        get skinMax() {
            return 6 == this._data._playerSkin.length ? (console.log("皮肤数量 Max"), !0) : (console.log("皮肤数量 ", this._data._playerSkin.length), !1)
        }
    }
    class a {
        constructor() {
            this.taskTextArr = ["1.Go into an empty room and go to bed", "2.upgrade bed", "3.Upgrade Iron Gate 2", "4.upgrade bed", "5.upgrade bed",
                "6.Build two broom turrets", "7.upgrade bed", "8.Build two moldy consoles", "9.upgrade bed", "10.Have a high pressure water gun", "11.build copper mine"
            ]
        }
        GetTaskText(t) {
            return t < 0 && t >= this.taskTextArr.length ? null : this.taskTextArr[t]
        }
    }
    class l {
        constructor() {
            this.powers = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768, 65536, 131072], this.hps = [300, 400, 800, 1600, 3200, 6400, 12800, 12800, 51200, 51200, 204800, 204800, 819200, 819200, 3276800, 3276800, 13107200], this.upData = [30, 50, 60, 60, 60, 65, 70, 75, 80, 85, 90, 95], this._difficulty = 0, this._eHpPro = [.3, .3, .3], this._attackPro = [0, 0, -.1], this._eTimePro = [.55, .5, .3]
        }
        get eHpPro() {
            return this._eHpPro[this._difficulty]
        }
        get attackPro() {
            return this._attackPro[this._difficulty]
        }
        get eTimePro() {
            return this._eTimePro[this._difficulty]
        }
        set difficulty(t) {
            (t < 0 || t >= this._eHpPro.length) && (t = 0), this._difficulty = t
        }
        get diffCount() {
            return this._eHpPro.length
        }
    }
    class h {
        static get instance() {
            return this._ins && null != this._ins || (this._ins = new h), this._ins
        }
        get build() {
            return this._buildData && null != this._buildData || (this._buildData = new i), this._buildData
        }
        get game() {
            return this._gameData && null != this._gameData || (this._gameData = new _), this._gameData
        }
        get player() {
            return this._playerData && null != this._playerData || (this._playerData = new n), this._playerData
        }
        get troll() {
            return this._trollData && null != this._trollData || (this._trollData = new l), this._trollData
        }
        get cdn() {
            return this._cdnData && null != this._cdnData || (this._cdnData = new s), this._cdnData
        }
        get task() {
            return this._taskData && null != this._taskData || (this._taskData = new a), this._taskData
        }
        GameOver() {
            this._gameData.GameOver()
        }
        StartGame() {
            this._gameData.StartGame()
        }
    }
    class o {
        constructor() {
            this.CLICK_MAP = "ClickMap", this.CLICK_BUILD = "ClickBuild", this.COLLECTIVE_BUILD = "CollectiveBuild", this.SET_POS_MENU = "SetBuildMenuPos", this.SHOW_MENU = "ShowMenu", this.HIDE_MENU = "HideMenu", this.OFF_SHOW_MENU = "OffShowMenu", this.OFF_HIDE_MENU = "OffHideMenu", this.BUILD_BUILDORUP = "BuildOrUp", this.BUILD_BUILDORUP_ADV = "BuildOrUpADV", this.BUILD_CLICKBLICK_INIT = "ClickBlockInit", this.BUILD_UPBUILD = "BuildUpBuild", this.BUILD_NEW = "build", this.BUILD_BUILD_DISMANTLE = "BuildBuildDismantle", this.BUILD_HANDLEROOMBUFF = "BuildHandleRoomBuff", this.BUILD_FINDDOOR = "BuildFindDoor", this.BUILD_FINDBEDANDDOOR = "BuildFindBedAndDoor", this.BUILD_FINDROOM = "BuildFindRoom", this.BUILD_GOTOBED = "BuildGoToBed", this.BUILD_GET_ROOMALLBLOCK = "BuildGetRoomAllBlock", this.BUILD_FINDBLOCKPOS = "BuildFindBlockPos", this.BUILD_PARALYSIS_ON = "BuildParalysis_on", this.BUILD_SKILLEVENT = "BuildSkillEvent", this.BUILD_SETTWINKSKin = "BuildSetTWinkSkin", this.BUILD_SET_ROOM_DIE = "BuildSetRoomDie", this.BUILD_GET_AT_BUILDCOUNT = "BuildGetBuildAtCount", this.BUILD_GET_GAME_BUILDCOUNT = "BuildGetGameCount", this.BUILD_REACHC = "BuildReachConditions", this.MAP_BUILD_NEW = "NewBuild", this.MAP_UPBUILD = "MapUpBuild", this.MAP_BUILD_DISMANTLE = "MapBuildDismantle", this.MAP_DISTANCE = "MapReturnDistance", this.MAP_ADD_ACTIVITY = "MapAddActivity", this.MAP_GET_ACTIVITYMAP = "MapGetActivityMap", this.MAP_MAPMOVE = "MapMapMove", this.MAP_DEMOLISH = "MAPDemolish", this.MGM_START_END_PATH = "MGMGetStartPos_EndPos_Path", this.MGM_PROTAGONIST_MOVE = "MGMProtagonistMove", this.MGM_AIORTROLLIS_MOVE = "MGMAIOrTrollIsMove", this.MGM_FIND_AROUND_BUILD = "MGMFindTheTarget", this.MGM_GET_ROOMCOUNT = "MGMGetRoomCount", this.MGM_GET_BLOCKFINDROOM = "MGMGetBlockIsRoom", this.MGM_SET_BLOCKWALKABLE = "MGMSetBlockWalkable", this.MGM_SET_BLOCKDYNWALKABLE = "MGMSetBlockDynWalkable", this.MGM_GET_OPENSPACE = "MGMGetOpenSpace", this.MGM_MONTIORPLAYERAROUND = "MGMMonitorPlayerAround", this.MGM_FINDPOSBLOCK = "MGMFindPosBLock", this.MGM_BUILDDIE = "MGMBuildDie", this.MGM_GET_DATAPOSTMAPPOS = "MGMGetDataPosTMapPos", this.MGM_GET_MAPPOSTSCENEPOS = "MGMGetMapPosTScenePos", this.MGM_GET_BLOCKPOSS = "MGMGetBlockPosS", this.MGM_GET_POSAROUND = "MGMGetPosAroundBuild", this.MGM_IS_SCREENRANGE = "MGMIsScreenRange", this.MGM_ROOMBLACK = "MGMRoomBlack", this.MGM_LOOKPOS = "MGMLookPos", this.TL_GET_AROUNDPLAYER = "TLGetAroundPlayer", this.TL_MOVESELECT_HANDLE = "TLMoveSelectHandle", this.TL_MOVEOVER_HANDLE = "TLMoveOverHandle", this.TL_STARTATTACK = "TLStartAttack", this.TL_TROLLHIT = "TLTrollHit", this.TL_MOVESPEED_REDUCTION = "TLMoveSpeedReduction", this.TL_VERTIGO_REDUCTION = "TLVertigoReduction", this.PAIL_FILTERDIEAI = "PAILFilterDieAI", this.PAIL_KILLPLAYER = "PAILKillPlayer", this.PAIL_SET_ATTACKEDAI = "PAILSetAtackedAI", this.OINPUT_Event_RS_ON = "OInPutEvent_RS_on", this.OINPUT_Event_ON = "OInPutEvent_on", this.PLOGIC_OFFEVENTHANDLE = "PLogicOffEventHandle", this.PLOGIC_TESTAROUNDBLOCK = "PLogicTestAroundBlock", this.GM_STARTGAME = "GMStartGame", this.GM_GAMEOVER = "GMGameOver", this.UIGM_SHOW = "UIGMshow", this.UIGM_HIDE = "UIGMhide", this.UIGM_TIPS = "UIGMTips", this.UIGM_SHOWSKILL = "UIGMShowSkill", this.UIGM_HIDESKILL = "UIGMHideSkill", this.UIGM_PLAYERHIT = "UIGMPlayerHit", this.UIGM_PLAYERHITEFFECT = "UIGMplayerHitEffect", this.SKILL_ADDUPEVENT = "SkillAddEvent", this.BATTLEUI_TASKCOMPLETE = "BattleUITaskComplete", this.MAINLG_TROLLUPDATA = "MainLgTrollUpData"
        }
    }
    class r extends o {
        constructor() {
            super(...arguments), this.listEvent = {}
        }
        static get instance() {
            return this._ins && null != this._ins || (this._ins = new r), this._ins
        }
        AddListEvent(e, i, s) {
            this.listEvent[e] && (this.listEvent[e] = null), this.listEvent[e] = new t(i, s)
        }
        removeListEvent(t, e) {
            this.listEvent[t] && delete this.listEvent[t]
        }
        Fire(t, ...e) {
            let i = this.listEvent[t];
            i && i.notify(...e)
        }
        FireReturn(t, ...e) {
            let i = this.listEvent[t];
            return i ? i.notifyReturn(...e) : null
        }
    }
    class d {
        constructor() {
            this.path = "res/effect/", this.effectStr = {
                bulletEffect: "bulletEffect",
                trollAttackEffect: "trollAttackEffect",
                trollBaoqiEffect: "trollBaoqiEffect",
                trollZH: "trollZH",
                buildDownEffect: "buildDownEffect",
                build_vertigo: "build_vertigo"
            }, this.loadeffect = {
                bulletEffect: !1,
                trollAttackEffect: !1,
                trollBaoqiEffect: !1,
                trollZH: !1,
                buildDownEffect: !1,
                build_vertigo: !1
            }, this.bulletArr = [], this.playEffectPos = [], this.AddUpData()
        }
        static get instance() {
            return this._ins || null != this._ins || (this._ins = new d), this._ins
        }
        AddUpData() {
            e.instance.AddUPEvent("EffectPlayUp", this.PlayEffectUp, this)
        }
        getEffect(t, e, i, s, _) {
            if (this.bulletArr.length > 0)
                for (let e = 0; e < this.bulletArr.length; e++) {
                    let i = this.bulletArr[e];
                    if (null != i.anim && i.effectName == t) {
                        let t = i.anim;
                        return i.anim = null, t
                    }
                }
            if (this.loadeffect[t]) {
                let e = new Laya.Animation;
                e.loadAtlas(this.path + t + ".atlas"), e.play(0, !1);
                let i = e.getGraphicBounds(!0);
                return e.pivot(i.width / 2, i.height / 2), e
            }
            Laya.loader.load(this.path + t + ".atlas", Laya.Handler.create(this, () => {
                let n = new Laya.Animation;
                n.loadAtlas(this.path + t + ".atlas"), n.play(0, !1);
                let a = n.getGraphicBounds(!0);
                n.pivot(a.width / 2, a.height / 2), this.loadeffect[t] = !0, this.PlayAnim(n, e, i, t, s, _)
            }))
        }
        PlayEffectUp() {
            if (this.playEffectPos.length > 0) {
                let t = this.playEffectPos.shift(),
                    e = this.getEffect(t.effectName, t.pos.x, t.pos.y, t.iszOeder, t.loop);
                null != e && this.PlayAnim(e, t.pos.x, t.pos.y, t.effectName, t.iszOeder, t.loop)
            }
        }
        AddBulletArr(t, e) {
            for (let i = 0; i < this.bulletArr.length; i++) {
                let s = this.bulletArr[i];
                if (s.effectName == t && null == s.anim) return void(s.anim = e)
            }
            let i = {
                effectName: t,
                anim: e
            };
            this.bulletArr.push(i)
        }
        AddEffect(t, e, i, s = !1, _ = 0) {
            this.playEffectPos.push({
                effectName: t,
                pos: {
                    x: e,
                    y: i
                },
                iszOeder: s,
                loop: _
            })
        }
        PlayAnim(t, e, i, s, _, n) {
            this.panel.addChild(t), t.zOrder = _ ? Number.MAX_VALUE : i, t.pos(e, i), 0 == n ? (t.play(0, !1), t.on(Laya.Event.COMPLETE, this, () => {
                this.AddBulletArr(s, t), this.panel.removeChild(t), t.offAll()
            })) : (t.play(0, !0), Laya.timer.once(n, this, () => {
                this.AddBulletArr(s, t), this.panel.removeChild(t), t.stop()
            }))
        }
        get panel() {
            return (this._panel || null == this._panel) && (this._panel = r.instance.FireReturn(r.instance.MAP_GET_ACTIVITYMAP)), this._panel
        }
        GameOver() {
            this.playEffectPos = []
        }
    }
    class c {
        constructor() {
            this._listOnce = {}, this._listLoop = {}, this._gameTime = 0, e.instance.AddUPEvent("TimeManager", this.UpTime, this), e.instance.AddUPEvent("HandleOnceEvent", this.HandleOnceEvent, this), e.instance.AddUPEvent("HandleLoopEven", this.HandleLoopEven, this)
        }
        static get instance() {
            return this._ins && null != this._ins || (this._ins = new c), this._ins
        }
        get gameTime() {
            return this._gameTime / 1e3
        }
        set gameTime(t) {
            this._gameTime = t
        }
        UpTime() {
            let t = Laya.timer.delta;
            this._gameTime += t
        }
        StartGame() {
            this._gameTime = 0
        }
        AfterAPeriodOfTime_Bool(t, e) {
            return this.gameTime - t >= e
        }
        AfterAPeriodOfTime_Proportion(t, e) {
            let i = this.gameTime - t;
            return i /= e, i *= 1e3, i = Math.floor(i), i /= 1e3, i = Math.min(1, i)
        }
        AddTimeOnceEvent(e, i, s, _) {
            this._listOnce[e] && (this._listOnce[e] = null), this._listOnce[e] = {
                observer: new t(i, s),
                time: _,
                timeInterval: this.gameTime
            }
        }
        RemoveListOnceEvent(t) {
            this._listOnce[t] && delete this._listOnce[t]
        }
        AddTimeLoopEvent(e, i, s, _) {
            this._listLoop[e] && (this._listLoop[e] = null), this._listLoop[e] = {
                observer: new t(i, s),
                time: _,
                timeInterval: this.gameTime
            }
        }
        RemoveListLoopEvent(t) {
            this._listLoop[t] && delete this._listLoop[t]
        }
        HandleOnceEvent() {
            for (let t in this._listOnce) {
                let e = this._listOnce[t];
                e && (this.AfterAPeriodOfTime_Bool(e.timeInterval, e.time) && (e.observer.notify(), this.RemoveListOnceEvent(t)))
            }
        }
        HandleLoopEven() {
            for (let t in this._listLoop) {
                let e = this._listLoop[t];
                e && (this.AfterAPeriodOfTime_Bool(e.timeInterval, e.time) && (e.observer.notify(), e.timeInterval = this.gameTime))
            }
        }
        GameOver() {
            this._listLoop = {}, this._listOnce = {}
        }
    }
    class u {
        constructor() {
            this.soundManager = Laya.SoundManager, this._room = null, this.ppTime = 0, this._ppTimeInterval = 3, this.BG_music = {
                gameBGM: "bgm.mp3",
                gs: "gs.mp3"
            }, this.TB_sound = {
                troll_Wll: "troll_Wall.mp3",
                troll_attack: "troll_attack.mp3",
                troll_up: "troll_up.mp3",
                troll_rage: "troll_rage.mp3",
                build_at_attack: "at_attack.mp3",
                build_build: "build_build.mp3",
                build_up: "build_up.mp3",
                build_die: "build_die.mp3",
                build_PP: "build_PP.mp3"
            }, this.Other_sound = {
                btn_gameStart: "btn_gameStart.mp3",
                ermt_0: "ermt_0.mp3",
                timer: "timer.mp3",
                game_fail: "game_fail.mp3",
                CC: "cc.mp3",
                MP: "maopao.mp3",
                weixiu: "weixiu.mp3",
                tcOpen: "TCOpen.mp3",
                Btn_Down: "BtnDown.mp3",
                Btn_Up: "BtnUp.mp3"
            }, this.ermt = [], this.path = "res/sound/"
        }
        static get instance() {
            return (this._ins || null == this._ins) && (this._ins = new u), this._ins
        }
        playMusic(t) {
            let e = this.GetPath(t);
            this.soundManager.playMusic(e)
        }
        PlaySound(t, e = 1, i = null, s = null) {
            let _ = this.GetPath(t);
            if (null == i) this.soundManager.playSound(_, e);
            else {
                r.instance.FireReturn(r.instance.MGM_IS_SCREENRANGE, i, s) && this.soundManager.playSound(_, e)
            }
        }
        StopSound(t) {
            let e = this.GetPath(t);
            this.soundManager.stopSound(e)
        }
        StopMusic() {
            this.soundManager.stopMusic()
        }
        StopAll() {
            this.soundManager.stopAll()
        }
        StopAllSound() {
            this.soundManager.stopAllSound()
        }
        CloaseSound() {
            this.soundManager.stopAllSound()
        }
        GetPath(t) {
            return this.path + t
        }
        AddUpSound(t) {
            this._room = t, c.instance.AddTimeLoopEvent("Sound_UpSound", this.UpSound, this, .1)
        }
        GameOver() {
            this._room = null, this.ppTime = 0
        }
        UpSound() {}
    }
    class p {
        constructor() {
            this.PRArr = new Array, this.closeArr = new Array
        }
        static get instance() {
            return this._ins && null != this._ins || (this._ins = new p), this._ins
        }
        Shake(t, e) {
            t && null != t && null != t && (t.scaleX = 1, t.scaleY = 1, Laya.Tween.to(t, {
                scaleX: 1 + e,
                scaleY: 1 + e
            }, 50, null, Laya.Handler.create(this, function() {
                Laya.Tween.to(t, {
                    scaleX: 1 - 2 * e,
                    scaleY: 1 - 2 * e
                }, 50, null, Laya.Handler.create(this, function() {
                    Laya.Tween.to(t, {
                        scaleX: 1,
                        scaleY: 1
                    }, 50, null, null, 0, !0)
                }), 0, !0)
            }), 0, !0))
        }
        ShakeHide(t, e) {
            t && null != t && null != t && (t.scaleX = 1, t.scaleY = 1, Laya.Tween.to(t, {
                scaleX: 0,
                scaleY: 0
            }, 50, null, Laya.Handler.create(this, function() {
                e && e()
            }), 0, !0))
        }
        GetPR() {
            let t = null;
            if (this.PRArr.length > 0) t = this.PRArr.shift();
            else {
                t = new Laya.View;
                let e = Laya.loader.getRes("Prefabs/RF.json");
                t.createView(e)
            }
            return t
        }
        RFEffect(t, e, i) {
            var s = this.GetPR();
            if (null == s) return;
            i.parent.addChild(s);
            let _ = this.closeArr.length;
            this.closeArr.push({
                index: _,
                view: s
            }), s.getChildAt(0).skin = t, s.getChildAt(1).text = "+" + e, s.alpha = 0, s.scaleY = 0, s.scaleX = 0, s.pos(i.x, i.y), Laya.Tween.to(s, {
                alpha: 1,
                scaleX: 1,
                scaleY: 1,
                y: s.y - 15
            }, 500, null, Laya.Handler.create(this, function() {
                Laya.Tween.to(s, {
                    y: s.y - 45
                }, 1e3, null, Laya.Handler.create(this, function() {
                    Laya.Tween.to(s, {
                        y: s.y - 45,
                        alpha: 0,
                        scaleX: 0,
                        scaleY: 0
                    }, 1e3, null, Laya.Handler.create(this, function() {
                        this.PRArr.push(s), null != s.parent && s.parent.removeChild(s), this.RemoveCloseArr(s)
                    }), 0, !0)
                }), 0, !0)
            }), 0, !0)
        }
        RemoveCloseArr(t) {
            if (this.closeArr.length > 0)
                for (let e = this.closeArr.length - 1; e >= 0; e--) {
                    if (this.closeArr[e].view == t) return void this.closeArr.splice(e, 1)
                }
        }
        GameOver() {
            if (this.closeArr.length > 0) {
                for (let t = 0; t < this.closeArr.length; t++) {
                    let e = this.closeArr[t];
                    null != e.view.parent && (e.view.parent.removeChild(e.view), this.PRArr.push(e.view))
                }
                this.closeArr.length = 0
            }
        }
        Hide(t) {
            t && null != t && null != t && Laya.Tween.to(t, {
                scaleX: 0,
                scaleY: 0
            }, 200, null, Laya.Handler.create(this, () => {
                t.visible = !1
            }), 0, !0)
        }
        Show(t) {
            t && null != t && null != t && (t.visible = !0, Laya.Tween.to(t, {
                scaleX: 1,
                scaleY: 1
            }, 200, null, null, 0, !0))
        }
        Alpha(t, e = 1, i = 1) {
            t && null != t && null != t && Laya.Tween.to(t, {
                alpha: i
            }, 1e3 * e, null, null, 0, !0)
        }
        ClickDown(t) {
            Laya.Tween.to(t, {
                scaleX: .9,
                scaleY: .9
            }, 50, null, null, 0, !0), u.instance.PlaySound(u.instance.Other_sound.Btn_Down)
        }
        ClickUp(t) {
            Laya.Tween.to(t, {
                scaleX: 1,
                scaleY: 1
            }, 50, null, null, 0, !0), u.instance.PlaySound(u.instance.Other_sound.Btn_Up)
        }
        MoveOut(t) {
            Laya.Tween.to(t, {
                scaleX: 1,
                scaleY: 1
            }, 50, null, null, 0, !0), u.instance.PlaySound(u.instance.Other_sound.Btn_Up)
        }
        AddBtnEvent(t) {
            if (t.length > 0)
                for (let e = 0; e < t.length; e++) {
                    let i = t[e];
                    i.on(Laya.Event.MOUSE_DOWN, this, this.ClickDown, [i]), i.on(Laya.Event.MOUSE_UP, this, this.ClickUp, [i]), i.on(Laya.Event.MOUSE_OUT, this, this.MoveOut, [i])
                }
        }
        RemoveBtnEvent(t) {
            if (t.length > 0)
                for (let e = 0; e < t.length; e++) {
                    let i = t[e];
                    i.off(Laya.Event.MOUSE_DOWN, this, this.ClickDown), i.off(Laya.Event.MOUSE_UP, this, this.ClickUp), i.off(Laya.Event.MOUSE_OUT, this, this.MoveOut)
                }
        }
        Breathing(t, e, i, s = 1) {
            t && null != t && null != t && e != i && (e++, Laya.Tween.to(t, {
                alpha: s
            }, 200, null, Laya.Handler.create(this, () => {
                s = 0 == s ? 1 : 0, this.Breathing(t, e, i, s)
            }), 0, !0))
        }
        ShakeHead(t, e, i, s = -1) {
            t && null != t && null != t && e != i && (e++, Laya.Tween.to(t, {
                x: t.x + 2 * s
            }, 50, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(t, {
                    x: t.x + 2 * s * -1
                }, 50, null, Laya.Handler.create(this, () => {
                    s = -1 == s ? 1 : -1, this.ShakeHead(t, e, i, s)
                }), 0, !0)
            }), 0, !0))
        }
        RotEffect(t, e, i, s = -1, _ = !1) {
            t && null != t && null != t && (e != i ? (e++, Laya.Tween.to(t, {
                rotation: t.rotation + 10 * s
            }, 50, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(t, {
                    rotation: t.rotation + 10 * s * -1
                }, 50, null, Laya.Handler.create(this, () => {
                    s = -1 == s ? 1 : -1, this.RotEffect(t, e, i, s, _)
                }), 0, !0)
            }), 0, !0)) : _ && Laya.timer.once(1e3, this, () => {
                t.visible && this.RotEffect(t, 0, i, -1, !0)
            }, null, !0))
        }
        ScaleEffect(t, e, i, s = -1, _ = !1) {
            t && null != t && null != t && (e != i ? (e++, Laya.Tween.to(t, {
                scaleX: t.scaleX + .1 * s,
                scaleY: t.scaleY + .1 * s
            }, 50, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(t, {
                    scaleX: t.scaleX + .1 * s * -1,
                    scaleY: t.scaleY + .1 * s * -1
                }, 50, null, Laya.Handler.create(this, () => {
                    s = -1 == s ? 1 : -1, this.ScaleEffect(t, e, i, s, _)
                }), 0, !0)
            }), 0, !0)) : _ && Laya.timer.once(1e3, this, () => {
                0 != t.visible && this.ScaleEffect(t, 0, i, -1, !0)
            }, null, !0))
        }
        ADVEffect(t, e = 0) {
            t && null != t && null != t && t.visible && (0 == e ? Laya.timer.once(2e3, this, () => {
                this.RotEffect(t, 0, 5), this.ADVEffect(t, 1)
            }, null, !0) : Laya.timer.once(2e3, this, () => {
                this.ScaleEffect(t, 0, 5), this.ADVEffect(t, 0)
            }, null, !0))
        }
        RotEffect_360(t, e) {
            t && null != t && null != t && t.visible && Laya.Tween.to(t, {
                rotation: t.rotation + e
            }, 1e3, null, Laya.Handler.create(this, () => {
                this.RotEffect_360(t, e)
            }), 0, !0)
        }
        Gold3Effwct(t) {
            if (!t) return;
            let e = t.y;
            t.visible = !0, t.scale(0, 0), Laya.Tween.to(t, {
                scaleX: 1,
                scaleY: 1,
                y: t.y - 10
            }, 200, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(t, {
                    y: t.y - 30
                }, 500, null, Laya.Handler.create(this, () => {
                    Laya.Tween.to(t, {
                        scaleX: 0,
                        scaleY: 0,
                        y: t.y - 20
                    }, 500, null, Laya.Handler.create(this, () => {
                        t.y = e, t.visible = !1
                    }, null, !0))
                }, null, !0))
            }, null, !0))
        }
    }
    class m {
        constructor() {
            this.uid = -1, this.name = null, this._roomIndex = -1, this._curRoom = -1, this._playerType = -1, this._skPath = "res/Skeleton/player/player_0.sk", this._animIndex = -1, this._speed = 3, this._bed = null, this._isBed = !1, this._isRoom = !1, this._isGod = !1, this._isDie = !1, this._buildAdvantage = 0, this._advantage = 0, this._HP = 1, this._dieTime = null
        }
        get animNum() {
            return 5
        }
        set playerType(t) {
            this._playerType = t
        }
        get playerType() {
            return this._playerType
        }
        get roomIndex() {
            return this._roomIndex
        }
        set roomIndex(t) {
            this._roomIndex = t
        }
        get curRoom() {
            return this._curRoom
        }
        set curRoom(t) {
            this._curRoom = t
        }
        LoadAnim() {
            this._animFactory = new Laya.Templet, this._animFactory.on(Laya.Event.COMPLETE, this, this.parseComplete), this._animFactory.loadAni(this.skin)
        }
        parseComplete() {
            null != this._player && this._player.destroy(), this._player = this._animFactory.buildArmature(0), this._player.visible = !0, this._player.play(1, !0), this._player.pivotY = -20;
            let t = h.instance.build.GetAIPos(this._playerType);
            this.SetPlayerPos(t[0], t[1]), this._player.zOrder = this._player.y
        }
        SetPlayerPos(t, e) {
            r.instance.Fire(r.instance.MAP_ADD_ACTIVITY, this.player, t, e)
        }
        get player() {
            return this._player ? this._player : null
        }
        get x() {
            return this.player.x
        }
        get y() {
            return this.player.y
        }
        set x(t) {
            this.player.x = t
        }
        set y(t) {
            this.player.y = t
        }
        get speed() {
            return this._speed
        }
        set speed(t) {
            this._speed = t
        }
        set isbed(t) {
            this._isBed = t
        }
        get isbed() {
            return this._isBed
        }
        get isRoom() {
            return this._isRoom
        }
        set isRoom(t) {
            this._isRoom = t
        }
        set buildAdvantage(t) {
            this._buildAdvantage += t
        }
        get advantage() {
            return this.isRoom && (this._advantage += 20), this.isbed && (this._advantage += 10), this._advantage += this._buildAdvantage, this._advantage
        }
        Hit(t) {
            return this._HP -= t, this._HP <= 0 && r.instance.Fire(r.instance.UIGM_PLAYERHIT, this.uid), this._HP > 0
        }
        get isGod() {
            return this._isGod
        }
        set isGod(t) {
            this._isGod = t
        }
        get isDie() {
            return this._isDie = this._HP > 0, this._isDie || (this.player.visible = !1, this._dieTime = c.instance.gameTime), this._isDie
        }
        set direction(t) {
            this.player.scaleX = t
        }
        set bed(t) {
            this._bed = t
        }
        get bed() {
            return this._bed
        }
        GameOver() {
            this._HP = 1, this._isBed = !1, this._isRoom = !1, this._isGod = !1, this._roomIndex = -1, this._curRoom = -1, this._playerType = -1, this._isDie = !1, this.player.visible = !1, this._buildAdvantage = 0, this.player.parent.removeChild(this.player), this.bed = null, this.name = null, this._dieTime = null
        }
        set id(t) {
            this._id = t
        }
        get id() {
            return this._id + 1
        }
        get skin() {
            return this._id > 5 ? this._skPath : this._skPath = "res/Skeleton/player/player_" + this._id + ".sk"
        }
        get dieTime() {
            return null == this._dieTime ? c.instance.gameTime : this._dieTime
        }
        get win() {
            return this.isGod ? h.instance.player.win : Math.floor(100 * Math.random())
        }
        get lose() {
            return this.isGod ? h.instance.player.lose : Math.floor(100 * Math.random())
        }
    }
    class g extends m {}
    class y {
        constructor() {
            y._ins = this, this._diePlayer = [], this._players = []
        }
        static get instance() {
            return this._ins && null != this._ins ? this._ins : null
        }
        gettroll() {}
        StartGame(t) {
            this.CreateAllPlayer(t)
        }
        CreateAllPlayer(t = 1) {
            for (let e = 0; e < t; e++) this.CreatePlayer(e);
            this._player = this._players[0], this._player.isGod = !0, this._player.name = "Me "
        }
        CreatePlayer(t = 0) {
            let e = this.GetDiePlayer();
            if (this._players.push(e), e.playerType = t, e.isGod = !1, 0 == t) e.id = this.selectIndex;
            else {
                let i = h.instance.game.GetPlayerArr(t - 1);
                e.id = i.index, e.name = i.name
            }
            e.uid = t, e.LoadAnim()
        }
        GetDiePlayer() {
            if (this._diePlayer.length > 0) return this._diePlayer.shift();
            return new g
        }
        get playerSorts() {
            if (this._players.length > 3)
                for (let t = 0; t < this._players.length; t++) {
                    let e = this._players[t];
                    for (let t = 1; t < this._players.length; t++) {
                        let i = this._players[t];
                        if (i.advantage < e.advantage) {
                            let t = e;
                            e = i, i = t
                        }
                    }
                }
            return this._players
        }
        get players() {
            let t = [];
            for (let e = 0; e < this._players.length; e++) {
                let i = this._players[e];
                i.isGod || t.push(i)
            }
            return t
        }
        get player() {
            return this._player
        }
        get playerArr() {
            return this._players
        }
        GameOver() {
            if (this._players.length > 0) {
                for (let t = 0; t < this._players.length; t++) {
                    let e = this._players[t];
                    e.GameOver(), this._diePlayer.push(e)
                }
                this._players.length = 0
            }
            this._player = void 0
        }
        get selectIndex() {
            return h.instance.player.playerSelectIndex
        }
        GetPlayerName(t) {
            for (let e = 0; e < this._players.length; e++) {
                let i = this._players[e];
                if (i.roomIndex == t) return i.name
            }
            return null
        }
        GetPlayerSkinId(t) {
            for (let e = 0; e < this._players.length; e++) {
                let i = this._players[e];
                if (i.roomIndex == t) return i.id
            }
            return 0
        }
        get head() {
            if (this._players.length > 0) {
                let t = [];
                for (let e = 1; e < this._players.length; e++) {
                    let i = this._players[e];
                    t.push(i.id - 1)
                }
                return t
            }
            return null
        }
        LookPos(t) {
            if (-1 != this._player.roomIndex)
                if (t + 1 < this._players.length) {
                    let e = this._players[t + 1];
                    e && r.instance.Fire(r.instance.MGM_LOOKPOS, e.x, e.y)
                } else t + 1 == this._players.length && r.instance.Fire(r.instance.MGM_LOOKPOS, this._player.x, this._player.y)
        }
    }
    class f {
        constructor() {
            this.Init(), this.AddUPEvent()
        }
        static get instance() {
            return this._ins && null != this._ins || (this._ins = new f), this._ins
        }
        AddUPEvent() {
            e.instance.AddUPEvent("UpHandleEvent", this.UpHandleEvent, this)
        }
        removeUpEvent() {
            e.instance.removeListEvent("UpHandleEvent")
        }
        Init() {
            this._moveArr = new Array, this._rotArr = new Array, this._trackMoveArr = new Array, this._scaleArr = new Array
        }
        Move(t) {
            let e = t.speed / 60;
            if (t.pos.length > 0) {
                let s = t.pos[0],
                    _ = t.node.x - s[0],
                    n = t.node.y - s[1];
                var i = Math.abs(_) + Math.abs(n);
                return _ > 0 ? t.node.x -= e * (Math.abs(_) / i) : _ < 0 && (t.node.x += e * (Math.abs(_) / i)), n > 0 ? t.node.y -= e * (Math.abs(n) / i) : n < 0 && (t.node.y += e * (Math.abs(n) / i)), Math.abs(_) < e && (t.node.x = s[0]), Math.abs(n) < e && (t.node.y = s[1]), t.node.x == s[0] && t.node.y == s[1] && (1 == t.pos.length ? (this.RemoveArr(t.node, this._moveArr), !0) : (t.pos.shift(), !1))
            }
        }
        TrackMove(t) {
            let e = t.moveSpeed / 60,
                i = t.rotSpeed / 60,
                s = t.node.x,
                _ = t.node.y,
                n = s - t.tar.x,
                a = _ - t.tar.y;
            var l = Math.abs(n) + Math.abs(a);
            let h, o = this.AircraftAngle(t.node, t.tar),
                r = t.node.rotation - o;
            h = r > 0 ? t.node.rotation - 360 - o : t.node.rotation + 360 - o, Math.abs(r) > Math.abs(h) && (r = h), Math.abs(r) < i ? t.node.rotation = o : r > 0 ? t.node.rotation -= i : t.node.rotation += i, n > 0 ? t.node.x -= e * (Math.abs(n) / l) : n < 0 && (t.node.x += e * (Math.abs(n) / l)), a > 0 ? t.node.y -= e * (Math.abs(a) / l) : a < 0 && (t.node.y += e * (Math.abs(a) / l)), Math.abs(n) < 5 && Math.abs(a) < 5 && (this.RemoveArr(t.node, this._trackMoveArr), t.node.visible = !1)
        }
        Rot(t) {
            let e, i = t.rotSpeed / 60,
                s = t.node.rotation - t.angle;
            e = s > 0 ? t.node.rotation - 360 - t.angle : t.node.rotation + 360 - t.angle, Math.abs(s) > Math.abs(e) && (s = e), Math.abs(s) < 10 ? (t.node.rotation = t.angle, this.RemoveArr(t.node, this._rotArr), t.func && t.func()) : s > 0 ? t.node.rotation -= i : t.node.rotation += i
        }
        AircraftAngle(t, e) {
            var i = t.localToGlobal(new Laya.Point(t.pivotX, t.pivotY)),
                s = e.localToGlobal(new Laya.Point(e.pivotX, e.pivotY)),
                _ = [0, 1],
                n = [i.x, i.y],
                a = [s.x, s.y],
                l = [n[0] - a[0], n[1] - a[1]],
                h = (_[0] * l[1] - _[1] * l[0]) / (Math.sqrt(Math.pow(_[0], 2) + Math.pow(_[1], 2)) * Math.sqrt(Math.pow(l[0], 2) + Math.pow(l[1], 2))),
                o = Math.asin(h) / Math.PI * 180;
            return l[1] <= 0 && (o = 180 - o), o %= 360
        }
        RemoveArr(t, e) {
            for (let i = 0; i < e.length; i++)
                if (t == e[i].node) {
                    e.splice(i, 1);
                    break
                }
        }
        SetRot(t, e) {
            t.rotation = this.AircraftAngle(t, e)
        }
        Scale(t) {
            t.node.scaleX += t.off, t.node.scaleY += t.off, t.node.scaleX >= t.x && t.node.scaleY >= t.y && (t.node.scaleX = t.x, t.node.scaleY = t.y, this.RemoveArr(t.node, this._scaleArr))
        }
        AddMove(t, e, i) {
            this._moveArr.forEach(s => {
                if (s.node == t) return s.pos = e, void(s.speed = i)
            });
            let s = {
                node: t,
                pos: e,
                speed: i
            };
            this._moveArr.push(s)
        }
        AddTMoveMent(t, e, i, s) {
            this._trackMoveArr.forEach(_ => {
                if (_.node == t) return _.tar = e, _.rotSpeed = i, void(_.moveSpeed = s)
            });
            let _ = {
                node: t,
                tar: e,
                rotSpeed: i,
                moveSpeed: s
            };
            this._trackMoveArr.push(_)
        }
        AddRotation(t, e, i, s) {
            let _ = this.AircraftAngle(t, e);
            this._rotArr.forEach(n => {
                if (n.node == t) return n.angle = _, n.rotSpeed = i, n.tar = e, void(n.func = s)
            });
            let n = {
                node: t,
                tar: e,
                angle: _,
                rotSpeed: i,
                func: s
            };
            this._rotArr.push(n)
        }
        AddScale(t, e, i, s) {
            this._scaleArr.forEach(_ => {
                if (_.node == t) return _.x = e, _.y = i, void(_.off = s)
            });
            let _ = {
                node: t,
                x: e,
                y: i,
                off: s
            };
            this._scaleArr.push(_)
        }
        HandelMoveEvent_Update() {
            if (this._moveArr.length > 0)
                for (let t = this._moveArr.length - 1; t >= 0; t--) {
                    let e = this._moveArr[t];
                    this.Move(e)
                }
        }
        HandelRotEvent_Update() {
            if (this._rotArr.length > 0)
                for (let t = this._rotArr.length - 1; t >= 0; t--) {
                    let e = this._rotArr[t];
                    this.Rot(e)
                }
        }
        HandelTrackMoveMentEvent_Update() {
            if (this._trackMoveArr.length > 0)
                for (let t = this._trackMoveArr.length - 1; t >= 0; t--) {
                    let e = this._trackMoveArr[t];
                    this.TrackMove(e)
                }
        }
        HandleScaleEvent_Update() {
            if (this._scaleArr.length > 0)
                for (let t = 0; t < this._scaleArr.length; t++) {
                    let e = this._scaleArr[t];
                    this.Scale(e)
                }
        }
        UpHandleEvent() {
            this.HandelRotEvent_Update(), this.HandelMoveEvent_Update(), this.HandelTrackMoveMentEvent_Update(), this.HandleScaleEvent_Update()
        }
        OperationMovement(t, e, i) {
            t.x += e, t.y += i
        }
        GameOver() {
            this._moveArr.length = 0, this._rotArr.length = 0, this._trackMoveArr.length = 0
        }
    }
    class I {
        constructor() {
            this._isUse = !1, this._isOpen = !0, this._build = null, this._name = null, this._level = -1, this._pos = {
                x: null,
                y: null
            }, this._invincible = !1, this._HPStrip = null, this._battleBB = null, this._promptUpImg = null, this.isPromptUp = !1, this._x = null, this._y = null
        }
        Hit(t) {
            if (this.invincible) return !0;
            this.hpCur -= t, this.hp <= 0 && (this.isUse = !1, this.hpCur = 0), this.hpStrip = this.hp, this._HPStrip.visible || (this._HPStrip.visible = !0);
            let e = this.hpCur > 0;
            return p.instance.Shake(this.build, (1 - this.hp) / 5 + .05), e || (this.room.Die(this), this.build.visible = !1, u.instance.PlaySound(u.instance.TB_sound.build_die, 1, this.x, this.y), r.instance.Fire(r.instance.BUILD_SETTWINKSKin, this.x, this.y), r.instance.Fire(r.instance.MGM_BUILDDIE, this.x, this.y, this.build), this.GameOver()), e
        }
        set hpMax(t) {
            t < 0 || (this._hpMax = t)
        }
        get hpMax() {
            return this._hpMax
        }
        set hpCur(t) {
            t < 0 && (t = 0), t > this._hpMax && (t = this._hpMax), this._hpCur = t, this.hpStripView = this.hp
        }
        get hpCur() {
            return this._hpCur
        }
        get hp() {
            return this.hpCur / this.hpMax
        }
        set battleBB(t) {
            this._battleBB = t
        }
        get battleBB() {
            return this._battleBB
        }
        get isOpen() {
            return this._isOpen
        }
        set isOpen(t) {
            this._isOpen = t
        }
        set build(t) {
            if (this._build = t, null == this._build ? (this._x = null, this._y = null) : (this._x = this.build.x, this._y = this.build.y), null == t) this.level = -1;
            else {
                let e = parseInt(t.name.split("_")[1]);
                this._level = e
            }
        }
        get build() {
            return this._build
        }
        set level(t) {
            t >= this._level && (this._level = t)
        }
        get level() {
            return Math.max(0, this._level)
        }
        set time(t) {
            this._time = t < 0 ? 0 : t
        }
        get time() {
            return this._time
        }
        set timeInterval(t) {
            this._timeInterval = t < 0 ? 0 : t
        }
        get timeInterval() {
            return this._timeInterval
        }
        get name() {
            return null == this._name && null != this._build && (this._name = this._build.name.split("_")[0]), this._name
        }
        get buildName() {
            return this.name + "_" + this.level
        }
        get isUse() {
            return this._isUse
        }
        set isUse(t) {
            this._isUse = t
        }
        set hpStripView(t) {
            null != this._HPStrip && (this.hpStrip = t)
        }
        set hpStrip(t) {
            if (null == this._HPStrip) {
                let t = Laya.loader.getRes("Prefabs/BuildBloodStrip.json");
                this._HPStrip = new Laya.View, this._HPStrip.createView(t), this._build.addChild(this._HPStrip);
                let e = this.build.rotation / 90;
                0 == e ? this._HPStrip.pos(45, 10) : 1 == e ? this._HPStrip.pos(10, 45) : 2 == e ? this._HPStrip.pos(45, 80) : 3 == e && this._HPStrip.pos(80, 45), this._HPStrip.zOrder = 3, this._HPStrip.rotation = -this._build.rotation
            } else if (this._HPStrip.parent != this._build) {
                this._build.addChild(this._HPStrip);
                let t = this.build.rotation / 90;
                0 == t ? this._HPStrip.pos(45, 10) : 1 == t ? this._HPStrip.pos(10, 45) : 2 == t ? this._HPStrip.pos(45, 80) : 3 == t && this._HPStrip.pos(80, 45), this._HPStrip.rotation = -this._build.rotation
            }
            t >= 0 && t <= 1 && (this._HPStrip.getChildAt(1).scaleX = t)
        }
        get x() {
            return this._x
        }
        get y() {
            return this._y
        }
        GameOver() {
            this.HidePromptUp(), this._GameOver(), null != this._HPStrip && this._build && null != this._build && this._HPStrip.parent == this._build && (this._build.removeChild(this._HPStrip), this._HPStrip.visible = !1), this.isUse = !1, this.build = null, this.isOpen = !0, this.invincible = !1, this.room = null, this._name = null
        }
        _GameOver() {
            r.instance.Fire(r.instance.MAP_DEMOLISH, this.build, null)
        }
        get pos() {
            return this._pos
        }
        set pos(t) {
            this._pos = t
        }
        set room(t) {
            this._room = t
        }
        get room() {
            return this._room
        }
        set invincible(t) {
            this._invincible = t
        }
        get invincible() {
            return this._invincible
        }
        get roomIndex() {
            return this.room.roomIndex
        }
        ShowPromptUp() {
            this._promptUpImg || (this._promptUpImg = new Laya.Image, this._promptUpImg.width = 42, this._promptUpImg.height = 42, this._promptUpImg.pivot(21, 21), this._promptUpImg.skin = "UI/Up.png", this._promptUpImg.zOrder = Number.MAX_VALUE), this._build && (this._build.parent.addChild(this._promptUpImg), this._promptUpImg.visible = !0, this._promptUpImg.pos(this.x, this.y), p.instance.Shake(this._promptUpImg, .1), this.UpDownTween(this._promptUpImg))
        }
        UpDownTween(t, e = 1) {
            Laya.Tween.to(t, {
                y: t.y + 10 * e
            }, 200, null, Laya.Handler.create(this, () => {
                this.UpDownTween(t, -1 * e)
            }), 0, !0)
        }
        HidePromptUp() {
            this._promptUpImg && (Laya.Tween.clearAll(this._promptUpImg), this._promptUpImg.removeSelf(), this._promptUpImg.visible = !1), null != this._build && r.instance.Fire(r.instance.BUILD_SETTWINKSKin, this.x, this.y)
        }
    }
    class v extends I {
        constructor() {
            super(...arguments), this._subObj = null, this._rSpeed = 0, this._isAttack = !1, this._paralysis = !1
        }
        get subObj() {
            if (null == this._subObj && null != this.build) {
                if (!(this.build.numChildren > 0)) return null;
                this._subObj = this.build.getChildAt(0)
            }
            return this._subObj
        }
        get attackPos() {
            return this._attackPos = this.subObj.localToGlobal(v._forwardPos, !0), this._attackPos
        }
        set power(t) {
            t < 0 && (t = this._power), this._power = t
        }
        get power() {
            return this._power
        }
        set attackSpeed(t) {
            t < 0 || (this._attackSpeed = t)
        }
        get attackSpeed() {
            return 1 / (this._attackSpeed + this.room.atSpeed + this._rSpeed)
        }
        set rSpeed(t) {
            this._rSpeed = t
        }
        set attackRadius(t) {
            t <= 0 && (t = 4), this._attackRadius = t
        }
        get attackRadius() {
            return 8100 * this._attackRadius * this._attackRadius * this.room.atRange
        }
        set isAttack(t) {
            this._isAttack = t
        }
        get isAttack() {
            return this._isAttack
        }
        set paralysis(t) {
            this._paralysis = t
        }
        get paralysis() {
            return this._paralysis
        }
        _GameOver() {
            null != this.build && null != this.subObj && this.build.removeChild(this.subObj), r.instance.Fire(r.instance.MAP_DEMOLISH, this.build, this.subObj), this._subObj = null
        }
    }
    v._forwardPos = new Laya.Point(45, 0);
    class b {
        constructor() {
            this._blockInfos = new Array, this.Constructor()
        }
        Constructor() {}
        UpData() {
            if (this._blockInfos.length > 0)
                for (let t = 0; t < this._blockInfos.length; t++) {
                    let e = this._blockInfos[t];
                    e.isUse && c.instance.AfterAPeriodOfTime_Bool(e.time, e.timeInterval) && (e.time = c.instance.gameTime, this.Handel_UpData(e))
                }
        }
        FindBlockInfo_Pos(t) {
            if (this._blockInfos.length > 0)
                for (let e = 0; e < this._blockInfos.length; e++) {
                    if (!this._blockInfos[e].isUse) continue;
                    let i = this.StrTPos(t);
                    if (i.x == this._blockInfos[e].pos.x && i.y == this._blockInfos[e].pos.y) return this._blockInfos[e]
                }
            return null
        }
        FindBlockInfo_RoomIndex(t) {
            if (this._blockInfos.length > 0)
                for (let e = 0; e < this._blockInfos.length; e++)
                    if (this._blockInfos[e].isUse && t == this._blockInfos[e].room.roomIndex) return this._blockInfos[e];
            return null
        }
        FindBlockInfo_RoomIndex_count(t) {
            let e = 0;
            if (this._blockInfos.length > 0)
                for (let i = 0; i < this._blockInfos.length; i++) this._blockInfos[i].isUse && t == this._blockInfos[i].room.roomIndex && e++;
            return e
        }
        GetRoomAllBlock(t) {
            let e = [];
            if (this._blockInfos.length > 0)
                for (let i = 0; i < this._blockInfos.length; i++) this._blockInfos[i].isUse && t == this._blockInfos[i].room.roomIndex && e.push(this._blockInfos[i]);
            return e.length > 0 ? e : null
        }
        GetBlockInfo() {
            if (this._blockInfos.length > 0)
                for (let t = this._blockInfos.length - 1; t >= 0; t--)
                    if (!this._blockInfos[t].isUse) {
                        let e = this._blockInfos[t];
                        return this._blockInfos.splice(t, 1), e
                    }
            return new I
        }
        Build(t, e, i) {
            let s = this.GetBlockInfo();
            return s.build = e, s.room = i, s.isUse = !0, s.isOpen = !1, s.hpMax = 1, s.hpCur = s.hpMax, s.time = c.instance.gameTime, s.timeInterval = 1, s.pos = this.StrTPos(t), this._blockInfos.push(s), this.SetBlockInfo(s), s.hpStripView = s.hp, this._build(s), r.instance.Fire(r.instance.MGM_SET_BLOCKDYNWALKABLE, s.x, s.y, s.isOpen), s
        }
        _build(t) {}
        BuildUp(t, e = null) {
            null == e && (e = this.FindBlockInfo_Pos(t)), e.level++, this.SetBlockInfo(e)
        }
        SetBlockInfo(t) {
            let e = h.instance.build.GetBuildData(t.name, t.level);
            this.BlockInfo(t, e)
        }
        BlockInfo(t, e) {}
        Handel_UpData(t) {}
        ReachConditions(t, e) {
            if (this._blockInfos.length > 0)
                for (let i = 0; i < this._blockInfos.length; i++) {
                    let s = this._blockInfos[i];
                    if (s.isUse && s.room.roomIndex == e && s.level >= t) return !0
                }
            return !1
        }
        GameOver() {
            if (this._blockInfos.length > 0)
                for (let t = 0; t < this._blockInfos.length; t++) {
                    this._blockInfos[t].GameOver()
                }
            this._GameOver()
        }
        _GameOver() {}
        StrTPos(t) {
            let e = t.split("_");
            return {
                x: parseInt(e[0]),
                y: parseInt(e[1])
            }
        }
    }
    var S, B, A, k;
    ! function(t) {
        t[t.move = 0] = "move", t[t.wait = 1] = "wait", t[t.attack = 2] = "attack", t[t.vertigo = 3] = "vertigo", t[t.escape = 4] = "escape", t[t.ide = 5] = "ide"
    }(S || (S = {})),
    function(t) {
        t[t.ide = 0] = "ide", t[t.attack = 1] = "attack", t[t.move = 2] = "move"
    }(B || (B = {}));
    class M {
        constructor() {
            this._hpMax = 270, this._hpCur = 270, this._power = 10, this._speed = 4.5, this._r = 4, this._atSpeed = 1, this._atR = 1.5, this._lastAtTime = 0, this._speedScale = 1, this._powerScale = 1, this._atSpeedScale = 1, this._rScale = 1, this._state = S.attack, this._animindex = B.ide, this._moveSpeedTime = 0, this._vertigoTime = 0, this._startVertiogTime = 0, this._abilityPoint = 0, this._attackUpCount = 0, this.attackUpCur = 0, this._attackPro = 0, this.isGuillotine = !1
        }
        Init() {
            this._powers = h.instance.troll.powers, this._hps = h.instance.troll.hps, this._upData = h.instance.troll.upData, this._attackPro = h.instance.troll.attackPro, this._speed = 4.5, this._level = 1, this._power = this._powers[this._level - 1], this._hpMax = this._hps[this.level - 1], this._hpCur = this._hpMax, null != this._hpStrip && (this.hpStrip = this.hp), this._r = 4, this._atSpeed = 1, this._atR = 1.5, this._lastAtTime = 0, this._speedScale = 1, this._powerScale = 1, this._atSpeedScale = 1, this._rScale = 1, this._state = S.ide, this._animindex = B.ide, this._moveSpeedTime = 0, this._vertigoTime = 0, this._abilityPoint = 0, this._attackUpCount = this._upData[this._level - 1], this.attackUpCur = 0
        }
        set hpMax(t) {
            this._hpMax = t
        }
        get hpMax() {
            return this._hpMax
        }
        set hpCur(t) {
            this._hpCur = t, this.hpCur > this.hpMax && (this._hpCur = this.hpMax), this.hpStrip = this.hp
        }
        get hpCur() {
            return this._hpCur
        }
        set power(t) {
            this._power = t
        }
        get power() {
            return this._power * this._powerScale
        }
        set atSpeed(t) {
            this._atSpeed = t > .2 ? t : .2
        }
        get atSpeed() {
            return this._atSpeed * this._atSpeedScale < .2 ? .2 : this._atSpeed * this._atSpeedScale
        }
        set powerScale(t) {
            this._powerScale = t
        }
        get powerScale() {
            return this._powerScale
        }
        set speedScale(t) {
            t < 0 && (t = .1), this._speedScale = t
        }
        get speedScale() {
            return this._speedScale
        }
        set rScale(t) {
            this._rScale = t
        }
        get rScale() {
            return this._rScale
        }
        set atSpeedScale(t) {
            this._atSpeedScale = t
        }
        get atSpeedScale() {
            return this._atSpeedScale
        }
        get r() {
            return this._r * this._rScale * this._r * this._rScale * 8100
        }
        set speed(t) {
            this._speed > 13.5 ? this._speed = 13.5 : this._speed = t
        }
        get speed() {
            return this._speed * this._speedScale
        }
        get hp() {
            return this._hpCur / this._hpMax
        }
        get troll() {
            return this._troll ? this._troll : null
        }
        StartGame() {
            this.LoadAnim()
        }
        LoadAnim() {
            this._trollFactory = new Laya.Templet, this._trollFactory.on(Laya.Event.COMPLETE, this, this.parseComplete), this._trollFactory.loadAni(this.skin)
        }
        parseComplete() {
            null != this._troll && this._troll.destroy(), this._troll = this._trollFactory.buildArmature(0);
            let t = h.instance.build.GetTrollPos();
            r.instance.Fire(r.instance.MAP_ADD_ACTIVITY, this.troll, t[0], t[1]), this.setplay(B.move, !0), this._troll.play(0, !0), this._troll.zOrder = this._troll.y, this.Init()
        }
        get x() {
            return this.troll.x
        }
        get y() {
            return this.troll.y
        }
        set x(t) {
            this.troll.x = t
        }
        set y(t) {
            this.troll.y = t
        }
        set range(t) {
            this._range = t, this._r = 8100 * this.range * this.range
        }
        get range() {
            return this._range
        }
        hit(t) {
            this.hpCur -= t, this._abilityPoint += .01, this.hpStrip = this.hp, 0 == this.hp && this.BeDoomed(), this.hp <= .3 && !this.isGuillotine && (this.isGuillotine = !0, r.instance.Fire(r.instance.BUILD_HANDLEROOMBUFF, this._attackRoom, 4))
        }
        BeDoomed() {}
        set lastAtTime(t) {
            this._lastAtTime = t
        }
        get lastAtTime() {
            return this._lastAtTime
        }
        get atR() {
            return this._atR * this._atR * 8100
        }
        StateDetection(t) {
            return this._state == t
        }
        set state(t) {
            this._state = t
        }
        get state() {
            return this._state
        }
        setplay(t, e) {
            this.troll.play(t, e), this._animindex = t
        }
        IsPlayIndex(t) {
            return this._animindex == t
        }
        set animIndex(t) {
            this._animindex = t
        }
        set moveSpeedTime(t) {
            this._moveSpeedTime = t
        }
        get moveSpeedTime() {
            return this._moveSpeedTime
        }
        get vertigoTime() {
            return this._vertigoTime
        }
        get startVertiogTime() {
            return this._startVertiogTime
        }
        set vertigoTime(t) {
            0 == t ? (this._vertigoTime = 0, this._startVertiogTime = 0, this.state = this.upstate) : (0 != this._startVertiogTime ? this._vertigoTime += t : (this._startVertiogTime = c.instance.gameTime, this._vertigoTime = t), this.StateDetection(S.vertigo) || (this.upstate = this.state, this.state = S.vertigo))
        }
        gethpStrip() {
            return this._hpStrip ? this._hpStrip : null
        }
        set hpStrip(t) {
            if (null == this._hpStrip) {
                this._hpStrip = new Laya.View;
                let t = Laya.loader.getRes("Prefabs/TrollBloodStrip.json");
                this._hpStrip.createView(t), this._troll.addChild(this._hpStrip), this._hpStrip.pos(this._troll.pivotX, -this._troll.getBounds().height), this._levelText = this._hpStrip.getChildByName("level")
            } else this._hpStrip.parent != this._troll && (this._troll.addChild(this._hpStrip), this._hpStrip.pos(this._troll.pivotX, -this._troll.getBounds().height), this._hpStrip.visible = !0);
            t >= 0 && t <= 1 && (this._hpStrip.getChildAt(1).scaleX = t, this._levelText.text = "LV." + this._level, this._hpStrip.scaleX = this._troll.scaleX)
        }
        Attack() {
            this._animindex != B.attack && (this._animindex = B.attack), this._troll.play(this._animindex, !1), this._abilityPoint++, this._attack()
        }
        _attack() {}
        set abilityPoint(t) {
            this._abilityPoint = t
        }
        UpAdilityPoint() {
            let t = .5 * Math.random(),
                e = .3 * Math.random(),
                i = .1 * Math.random(),
                s = .1 * Math.random();
            this.hpMax += t * this._abilityPoint * this.hpMax * .02, this.hpCur += t * this._abilityPoint * this.hpMax * .02, this.power += e * this._abilityPoint * this.power * .03, this.atSpeed -= i * this._abilityPoint * .05, this.speed += s * this._abilityPoint * .1, this.abilityPoint = 0
        }
        EscapeUp() {
            this.atSpeedScale = 1, this.speedScale = 1, this.powerScale = 1, this.isGuillotine = !1, this.level++, this.power = this._powers[this._level];
            let t = this._hps[this.level];
            t -= this.hpMax, this.hpMax = this._hps[this.level], this.hpCur += t, this._attackUpCount = this._upData[this._level - 1], this.attackUpCur = 0, u.instance.PlaySound(u.instance.TB_sound.troll_up), r.instance.Fire(r.instance.UIGM_TIPS, "Ghost upgrade：LV." + this._level)
        }
        get level() {
            return this._level
        }
        set level(t) {
            t <= 13 && (t >= this._powers.length && (t = this._powers.length - 1), this._level = t, this._levelText && (this._levelText.text = "Lv." + this._level))
        }
        get skin() {
            return "res/Skeleton/mg/mg_" + h.instance.player.trollIndex + ".sk"
        }
        TrollSkill() {
            this.OnTrollSkill(), c.instance.AddTimeOnceEvent("OffTrollSkill", this.OffTrollSkill, this, 5)
        }
        OnTrollSkill() {}
        OffTrollSkill() {}
        AttackEvent(...t) {}
        StartAttack(t) {}
        Escape() {}
        GameOver() {
            this._hpStrip && (this._hpStrip.removeSelf(), this._hpStrip.visible = !1)
        }
        get attackUpCount() {
            return this._attackUpCount + this._attackUpCount * this._attackPro
        }
    }
    class E extends M {
        constructor() {
            super(...arguments), this._paralysis = !1, this._attackTime = 0, this._rageTime = 20, this._isRage = !1
        }
        _attack() {
            this.atSpeedScale > .5 ? this.atSpeedScale -= .05 : this._isRage ? this.atSpeedScale = this.atSpeed1 : this.atSpeedScale = 1, this.attackUpCur++, this.attackUpCur > this.attackUpCount && this.EscapeUp(), this.Rage()
        }
        OnTrollSkill() {
            this.atSpeedScale -= .3, this.powerScale = 1.25
        }
        OffTrollSkill() {
            this.atSpeedScale = 1, this.powerScale = 1
        }
        AttackEvent(...t) {
            this.Paralysis(t[0])
        }
        Paralysis(t) {
            if (!this._paralysis && "door" == t.name && t.isUse && t.hp <= .2) {
                if (Math.random() <= .3) {
                    d.instance.AddEffect(d.instance.effectStr.trollZH, this.x - 80, this.y - 135, !0);
                    let t = r.instance.FireReturn(r.instance.MGM_GET_POSAROUND, this.x, this.y, "at", 4);
                    r.instance.Fire(r.instance.BUILD_PARALYSIS_ON, t), r.instance.Fire(r.instance.UIGM_TIPS, "Ghostly shock")
                }
                this._paralysis = !0
            }
        }
        StartAttack(t) {
            null != t && (this._attackRoom = t.room.roomIndex, t.room.isEnerguhood = !1, r.instance.Fire(r.instance.BUILD_HANDLEROOMBUFF, this._attackRoom, 3)), this._attackTime = c.instance.gameTime, this._paralysis = !1
        }
        Rage() {
            c.instance.AfterAPeriodOfTime_Bool(this._attackTime, this._rageTime) && this.Rage_on()
        }
        Rage_on() {
            Math.random() <= 1 && (u.instance.PlaySound(u.instance.TB_sound.troll_rage), r.instance.Fire(r.instance.UIGM_TIPS, "Ghost's stat boost"), this._isRage = !0, this.atSpeed1 = this.atSpeedScale, this.atSpeedScale -= .3, c.instance.AddTimeOnceEvent("rang_off", this.Rage_off, this, 8), null != this._attackRoom && r.instance.Fire(r.instance.BUILD_HANDLEROOMBUFF, this._attackRoom, 0), d.instance.AddEffect(d.instance.effectStr.trollBaoqiEffect, this.x, this.y - 60, !0)), this._attackTime = c.instance.gameTime
        }
        Rage_off() {
            this._isRage = !1, this.atSpeedScale = this.atSpeed1
        }
        Escape() {
            r.instance.Fire(r.instance.BUILD_HANDLEROOMBUFF, this._attackRoom, 3), r.instance.Fire(r.instance.UIGM_TIPS, "The ghost escaped")
        }
    }
    class L {
        constructor() {
            L._ins = this, this._troll = new E
        }
        static get instance() {
            return this._ins && null != this._ins ? this._ins : null
        }
        get troll() {
            return this._troll.troll
        }
        get trollSprict() {
            return this._troll
        }
        StartGame() {
            this._troll.StartGame()
        }
        GameOver() {
            this._troll.GameOver()
        }
    }
    class C {
        constructor() {
            this.Init(), e.instance.AddUPEvent("BulletMoveUp", this.MoveUP, this)
        }
        get troll() {
            return L.instance.troll
        }
        Init() {
            this.BulletImgArr = new Array, this.bulletSprite = r.instance.FireReturn(r.instance.MAP_GET_ACTIVITYMAP)
        }
        TrackMoveMent(t, e) {
            f.instance.SetRot(t, this.troll), f.instance.AddTMoveMent(t, this.troll, 180, e), f.instance.AddScale(t, 1, 1, .35)
        }
        attack(t, e, i, s) {
            var _ = this.GetBuild();
            this.InitBuild(_, t, s);
            var n = _.bullet.parent.globalToLocal(e);
            _.bullet.pos(n.x, n.y), _.bullet.skin = "bullet/" + i + "_Bullet.png", this.TrackMoveMent(_.bullet, _.movespeed)
        }
        InitBuild(t, e, i) {
            t.bullet.width = 90, t.bullet.height = 90, t.movespeed = 1e3, t.bullet.pivotX = 45, t.bullet.pivotY = 45, t.bullet.rotation = 0, t.bullet.scaleX = .2, t.bullet.scaleY = .2, t.power = e, t.bullet.visible = !0, t.roomIndex = i, this.bulletSprite.addChild(t.bullet)
        }
        GetBuild() {
            if (this.BulletImgArr.length > 0)
                for (var t = 0; t < this.BulletImgArr.length; t++) {
                    if (!(i = this.BulletImgArr[t]).isUse) return i.isUse = !0, i
                }
            var e = new Laya.Image;
            e.visible = !0;
            var i = {
                bullet: e,
                isUse: !0,
                power: 0,
                movespeed: 0,
                roomIndex: -1
            };
            return this.BulletImgArr.push(i), i
        }
        MoveUP() {
            this.HandleMoveOver()
        }
        HandleMoveOver() {
            if (this.BulletImgArr.length > 0)
                for (var t = this.BulletImgArr.length - 1; t >= 0; t--) {
                    var e = this.BulletImgArr[t];
                    if (null != e && e.isUse) {
                        var i = e.bullet.localToGlobal(new Laya.Point(e.bullet.pivotX, e.bullet.pivotY)),
                            s = this.troll.localToGlobal(new Laya.Point(this.troll.pivotX, this.troll.pivotY));
                        if (this.Distance(i, s) < 400) {
                            let t = e;
                            d.instance.AddEffect(d.instance.effectStr.bulletEffect, t.bullet.x - 20, t.bullet.y - 20, !0), this.Attack(t.bullet, t.power, t.roomIndex), t.isUse = !1
                        }
                    }
                }
        }
        Attack(t, e, i) {
            r.instance.Fire(r.instance.TL_TROLLHIT, e, i), t.visible = !1, this.bulletSprite.removeChild(t)
        }
        Distance(t, e) {
            var i = t.x - e.x,
                s = t.y - e.y;
            return i * i + s * s
        }
        GameOver() {
            this.BulletImgArr.length > 0 && this.BulletImgArr.forEach(t => {
                t.bullet.removeSelf(), t.bullet.visible = !1
            })
        }
    }
    class T extends b {
        UpData() {
            if (this._blockInfos.length > 0 && null != this._bulletManager.troll)
                for (let t = 0; t < this._blockInfos.length; t++) {
                    let e = this._blockInfos[t];
                    if (e.isUse) {
                        if (e.paralysis) return;
                        if (c.instance.AfterAPeriodOfTime_Bool(e.time, e.attackSpeed)) {
                            let t = r.instance.FireReturn(r.instance.MAP_DISTANCE, e.build, this._bulletManager.troll);
                            if (t <= e.attackRadius) {
                                let i = e.room;
                                i.BuffSwitch(i.buffTypeStr.solenoid) ? e.rSpeed = (1 - t / e.attackRadius) * i.solenoidMax : e.rSpeed = 0, i.BuffSwitch(i.buffTypeStr.smoney) && i.SmoneyEvent(e.level), e.time = c.instance.gameTime, this.Handel_UpData(e)
                            }
                        }
                    }
                }
        }
        Constructor() {
            this._bulletManager = new C, this._bullet_effet_Arr = [], this._use_bullet_effet_arr = []
        }
        Handel_UpData(t) {
            this.ShootSkill(t)
        }
        ShootSkill(t) {
            let e = this;
            f.instance.AddRotation(t.subObj, this._bulletManager.troll, 720, () => {
                if (p.instance.Shake(t.subObj, .2), !t.isUse) return;
                let i = e.img;
                e.Effect(i, t), e.Attack(t)
            })
        }
        Attack(t) {
            u.instance.PlaySound(u.instance.TB_sound.build_at_attack, 1, t.x, t.y), this._bulletManager.attack(t.power, t.attackPos, t.buildName, t.roomIndex), t.time = c.instance.gameTime
        }
        BlockInfo(t, e) {
            t.power = e[3], t.attackRadius = e[4], t.attackSpeed = 1, t.rSpeed = 0, t.paralysis = !1
        }
        UpGradeAttackSpeed(t, e) {
            .2 != t.attackSpeed && (t.attackSpeed -= e, t.attackSpeed <= .2 && (t.attackSpeed = .2))
        }
        _GameOver() {
            this._bulletManager.GameOver(), this.ClearBulletEffectAll()
        }
        GetBlockInfo() {
            if (this._blockInfos.length > 0)
                for (let t = this._blockInfos.length - 1; t >= 0; t--)
                    if (!this._blockInfos[t].isUse) {
                        let e = this._blockInfos[t];
                        return this._blockInfos.splice(t, 1), e
                    }
            return new v
        }
        get img() {
            let t;
            return this._bullet_effet_Arr.length > 0 ? t = this._bullet_effet_Arr.shift() : ((t = new Laya.Image).width = 59, t.height = 95, t.pivot(30, 81), t.skin = "UI/bullet_effect.png"), t.alpha = 0, t.visible = !0, this._use_bullet_effet_arr.push(t), t
        }
        ClearBulletEffectAll() {
            if (this._use_bullet_effet_arr.length > 0) {
                for (let t = this._use_bullet_effet_arr.length - 1; t >= 0; t--) {
                    let e = this._use_bullet_effet_arr[t];
                    this.ClearBulletEffect(e)
                }
                this._use_bullet_effet_arr = []
            }
        }
        ClearBulletEffect(t) {
            Laya.Tween.clearAll(t), t.removeSelf(), t.visible = !1, this._bullet_effet_Arr.push(t)
        }
        Effect(t, e) {
            e.isUse && (e.subObj.addChild(t), t.pos(45, 0), Laya.Tween.to(t, {
                alpha: 1
            }, 20, null, Laya.Handler.create(this, () => {
                Laya.Tween.to(t, {
                    alpha: 0
                }, 20, null, Laya.Handler.create(this, () => {
                    this.ClearBulletEffect(t)
                }), 0, !0)
            }), 0, !0))
        }
    }
    class P extends I {
        get pREffect() {
            return this.build.visible
        }
        get pR() {
            return this._pR
        }
        set pR(t) {
            this._pR = t
        }
    }
    class x extends P {
        set head(t) {
            this._head || (this._head = new Laya.Image, this._head.width = 90, this._head.height = 90, this._head.pivot(45, 45)), this.build.addChild(this._head), this._head.visible = !0, this._head.pos(45, 45), this._head.skin = "bullet/head_" + t + ".png"
        }
        _GameOver() {
            this._head && (this._head.removeSelf(), this._head.visible = !1), r.instance.Fire(r.instance.MAP_DEMOLISH, this.build, null)
        }
    }
    class w extends b {
        Handel_UpData(t) {
            this.IncreasePR(t)
        }
        BlockInfo(t, e) {
            t.pR = e[3], t.room.bed = t
        }
        IncreasePR(t) {
            let e = t.pR * t.room.prLevel * t.room.doubleGold1;
            if (h.instance.game.SetPR(t.room.roomIndex, e, 0), t.isOpen) {
                let e = .01 * t.level;
                t.pREffect && (p.instance.Shake(t.build, e), p.instance.RFEffect("UI/gold1.png", t.pR, t.build))
            }
        }
        GetBlockInfo() {
            if (this._blockInfos.length > 0)
                for (let t = this._blockInfos.length - 1; t >= 0; t--)
                    if (!this._blockInfos[t].isUse) {
                        let e = this._blockInfos[t];
                        return this._blockInfos.splice(t, 1), e
                    }
            return new x
        }
    }
    class U extends I {
        constructor() {
            super(...arguments), this.adv = !1
        }
        OpenDoor() {
            this.isOpen || (this.jt.visible = !0, this.build.parent.addChild(this.jt), this.jt.rotation = this.build.rotation, this.jt.pos(this.x, this.y), this.jtShow(), this.moveMod ? Laya.Tween.to(this.build, {
                x: this.build.x + 90
            }, 500, null, null, 0, !0) : Laya.Tween.to(this.build, {
                y: this.build.y + 90
            }, 500, null, null, 0, !0), this.isOpen = !0)
        }
        CloseDoor() {
            this.isOpen && (this.moveMod ? Laya.Tween.to(this.build, {
                x: this.build.x - 90
            }, 500, null, Laya.Handler.create(this, () => {
                u.instance.PlaySound(u.instance.TB_sound.build_build, 1, this.x, this.y)
            }), 0, !0) : Laya.Tween.to(this.build, {
                y: this.build.y - 90
            }, 500, null, Laya.Handler.create(this, () => {
                u.instance.PlaySound(u.instance.TB_sound.build_build, 1, this.x, this.y)
            }), 0, !0), this.jt.visible = !1, this.jt.removeSelf(), this.isOpen = !1)
        }
        get moveMod() {
            let t = Math.abs(this.build.rotation);
            return 0 == t || 180 == t
        }
        get jt() {
            if (null == this._jt) {
                let t = new Laya.Image;
                t.width = 46, t.height = 46, t.pivot(23, 23), t.skin = "UI/jt.png", this._jt = t
            }
            return this._jt
        }
        jtShow(t = 0) {
            Laya.Tween.to(this.jt, {
                alpha: t
            }, 1e3, null, Laya.Handler.create(this, () => {
                null != this.jt && this.jt.visible && (1 == t ? this.jtShow() : this.jtShow(1))
            }), 0, !0)
        }
        _GameOver() {
            this.adv = !1, this.jt.visible = !1, this.jt.removeSelf(), r.instance.Fire(r.instance.MAP_DEMOLISH, this.build, null)
        }
    }
    class O extends b {
        BlockInfo(t, e) {
            t.hpMax = e[3], t.hpCur = e[3], t.battleBB = .01 * t.level, t.room.door = t
        }
        _build(t) {
            t.OpenDoor()
        }
        BloodReturn(t) {
            1 != t.hp && (t.hpCur += t.hpMax * t.battleBB, t.hpStrip = t.hp)
        }
        Handel_UpData(t) {
            this.BloodReturn(t)
        }
        GetBlockInfo() {
            if (this._blockInfos.length > 0)
                for (let t = this._blockInfos.length - 1; t >= 0; t--)
                    if (!this._blockInfos[t].isUse) {
                        let e = this._blockInfos[t];
                        return this._blockInfos.splice(t, 1), e
                    }
            return new U
        }
    }
    class D extends b {
        Handel_UpData(t) {
            t.room.die || this.IncreasePR(t)
        }
        BlockInfo(t, e) {
            t.pR = e[3], 1 == t.level ? t.timeInterval = 2 : t.timeInterval = 1
        }
        IncreasePR(t) {
            let e = t.pR * t.room.doubleGold2;
            h.instance.game.SetPR(t.room.roomIndex, 0, e);
            let i = .01 * t.level;
            p.instance.Shake(t.build, i), p.instance.RFEffect("UI/gold2.png", e, t.build)
        }
    }
    class R {
        constructor() {
            this._screenWidth = 0, this._screenHeight = 0, this._ppH = .328125, this._ppL = .15625, this._gg = Laya.Browser.window.qg, this._voide = null, this._voideID = "438381", this._boxBanner = null, this._boxBannerID = "438385", this._custom = null, this._customIDL = "439084", this._banner = null, this._bannerID = "438310", this._gameDrawerAd = null, this._gameDrawerID = "438386", this._advFunc = {
                success: null,
                fail: null
            }
            // this.GetScreenInfo(), this.CreateADV(), this.CreateGameBannerAd(), this.CreateGameDrawerAd(), this.CreateCustomAdShow()
        }
        CreateADV() {
            this._voide = this._gg.createRewardedVideoAd({
                adUnitId: this._voideID
            }), this._voide.onLoad(() => {
                this._voide.show()
            }), this._voide.onError(t => {
                console.log("视频加载错误:", "1.错误信息——", t.errMsg, "2.错误码——", t.errCode), r.instance.Fire(r.instance.UIGM_TIPS, "视频加载失败，请稍后再试")
            }), this._voide.onClose(t => {
                t.isEnded ? null != this._advFunc.success && this._advFunc.success() : null != this._advFunc.fail && this._advFunc.fail()
            })
        }
        ShowAdv(t) {
            this._advFunc = t, this._advFunc.success()
        }
        CreateGameBannerAd() {
            this._gg.createGameBannerAd && (this._boxBanner = this._gg.createGameBannerAd({
                adUnitId: this._boxBannerID
            }), this._boxBanner.onLoad(() => {
                console.log("加载成功 横幅盒子广告")
            }))
        }
        BoxBannerShow() {
            console.log("横幅格子", this._boxBanner), this._boxBanner && this._boxBanner.show().then(function() {
                console.log("show success BoxBanner")
            }).catch(function(t) {
                console.log("show fail with BoxBanner:" + t.errCode + "," + t.errMsg)
            })
        }
        BoxBannerHide() {
            this._boxBanner && this._boxBanner.hide().then(function() {
                console.log("hide success BoxBanner")
            }).catch(function(t) {
                console.log("hide fail with BoxBanner:" + t.errCode + "," + t.errMsg)
            })
        }
        CreateCustomAdShow() {
            this._gg.createCustomAd && (this._custom = this._gg.createCustomAd({
                adUnitId: this._customIDL,
                style: {}
            }), this._custom.onLoad(function() {
                console.log("原生模块加载成功")
            }), this._custom.onError(function(t) {
                console.log("原生模块加载失败", t)
            }), this._custom.onShow(function() {
                console.log("原生模块 显示成功")
            }), this._custom.onHide(function() {
                console.log("原生模块 关闭成功")
            }))
        }
        CustomAdShow(t) {
            if (this._custom) {
                switch (this.HandlePP(t)) {
                    case -1:
                        return;
                    case 1:
                        this._custom.show()
                }
            }
        }
        HandlePP(t) {
            let e = -1;
            return t >= this._ppL && (e = 1), e
        }
        CustomAdHide() {
            this._custom && this._custom.hide()
        }
        GetScreenInfo() {
            let t = this._gg.getSystemInfoSync();
            this._screenWidth = t.screenWidth, this._screenHeight = t.screenHeight, console.log("screen", t)
        }
        GameExit() {
            this._gg.exitApplication({
                data: "",
                success: () => {
                    console.log("退出成功")
                },
                fail: () => {
                    console.log("退出失败")
                },
                complete: () => {
                    console.log("调用结束")
                }
            })
        }
        CreateGameDrawerAd() {
            this._gg.getSystemInfoSync().platformVersionCode >= 1090 ? this._gameDrawerAd = this._gg.createGameDrawerAd({
                adUnitId: this._gameDrawerID,
                style: {
                    top: .4 * this._screenHeight
                }
            }) : console.log("快应用平台版本号低于1090，暂不支持互推盒子相关 API")
        }
        GameDrawerShow() {
            this._gameDrawerAd && this._gameDrawerAd.show().then(function() {
                console.log("show success")
            }).catch(function(t) {
                console.log("show fail with:" + t.errCode + "," + t.errMsg)
            })
        }
        GameDrawerHide() {
            this._gameDrawerAd && this._gameDrawerAd.hide().then(function() {
                console.log("hide success")
            }).catch(function(t) {
                console.log("hide fail with:" + t.errCode + "," + t.errMsg)
            })
        }
    }
    class G {
        constructor() {
            this._browserOn = !0, this._browserOn && (this._gg = new R)
        }
        static get instance() {
            return this._instance
        }
        ShowADV(t) {
            showVideoAd((res) => {
                if (res) {
                    t.success && t.success()
                }
            })
        }
        BoxBannerShow() {
            this._browserOn && this._gg.BoxBannerShow()
        }
        BoxBannerHied() {
            this._browserOn && this._gg.BoxBannerHide()
        }
        GameDrawerShow() {
            console.log("111"), this._browserOn && this._gg.GameDrawerShow()
        }
        GameDrawerHide() {
            this._browserOn && this._gg.GameDrawerHide()
        }
        GameExit() {
            this._browserOn && this._gg.GameExit()
        }
        CustomAdShow(t) {
            this._browserOn && this._gg.CustomAdShow(t)
        }
        CustomAdHide() {
            this._browserOn && this._gg.CustomAdHide()
        }
    }
    G._instance = new G;
    class N extends I {}
    class H {
        constructor() {
            this.bulletSprite = r.instance.FireReturn(r.instance.MAP_GET_ACTIVITYMAP), this.imgs = new Array, this.imgUse = new Array
        }
        static get instence() {
            return this._ins && null != this._ins || (this._ins = new H), this._ins
        }
        get troll() {
            return (this._troll || null == this._troll) && (this._troll = L.instance.trollSprict), this._troll
        }
        TriggerEvent(t, e) {
            if (e.isUse) switch (t) {
                case 0:
                    this.SpellEvent(e);
                    break;
                case 1:
                    this.EntrapmentEvent(e);
                    break;
                case 2:
                    this.GuillotineEvent(e);
                    break;
                case 3:
                    return this.EnergyhoodEvent(e)
            }
        }
        get spellImage() {
            return this._spellImage && null != this._spellImage || (this._spellImage = this.Img, this._spellImage.skin = "map/spellimg_0.png"), this._spellImage
        }
        SpellEvent(t) {
            if (!t.isUse) return;
            Math.random() <= .3 && (this.bulletSprite.addChild(this.spellImage), this.spellImage.x = t.x, this.spellImage.y = t.y, this.spellImage.visible = !0, this.spellImage.alpha = 1, f.instance.SetRot(this.spellImage, this.troll.troll), Laya.Tween.to(this.spellImage, {
                x: this.troll.x,
                y: this.troll.y - 100
            }, 400, null, Laya.Handler.create(this, function() {
                this.troll.troll.addChild(this.spellImage), this.spellImage.pos(this.troll.troll.pivotX, this.troll.troll.pivotY - 100), Laya.Tween.to(this.spellImage, {
                    alpha: 0
                }, 3e3, null, Laya.Handler.create(this, function() {
                    this.spellImage.visible = !1, this.spellImage.removeSelf()
                }), 0, !0), r.instance.Fire(r.instance.TL_VERTIGO_REDUCTION, 3)
            }), 0, !0))
        }
        get entramentImage() {
            return this._entrapmentImage && null != this._entrapmentImage || (this._entrapmentImage = this.Img, this._entrapmentImage.skin = "map/entramentImage_1.png"), this._entrapmentImage
        }
        EntrapmentEvent(t) {
            t.isUse && (this.bulletSprite.addChild(this.entramentImage), this.entramentImage.pos(t.x, t.y), this.entramentImage.visible = !0, this.entramentImage.alpha = 1, this.entramentImage.scale(2, 2), f.instance.SetRot(this.entramentImage, this.troll.troll), Laya.Tween.to(this.entramentImage, {
                x: this.troll.x,
                y: this.troll.y,
                scaleX: 1,
                scaleY: 1
            }, 400, null, Laya.Handler.create(this, function() {
                this.troll.troll.addChild(this.entramentImage), this.entramentImage.pos(this.troll.troll.pivotX, this.troll.troll.pivotY), this._entrapmentImage.skin = "map/entramentImage_2.png", Laya.Tween.to(this.entramentImage, {
                    alpha: 0
                }, 2e3, null, Laya.Handler.create(this, function() {
                    this.entramentImage.visible = !1, this.entramentImage.removeSelf()
                }), 0, !0), r.instance.Fire(r.instance.TL_VERTIGO_REDUCTION, 2)
            }), 0, !0))
        }
        get guillotineImg() {
            return this._guillotineImg && null != this._guillotineImg || (this._guillotineImg = this.Img, this._guillotineImg.skin = "map/guillotineImg.png"), this._guillotineImg
        }
        GuillotineEvent(t) {
            if (!t.isUse) return;
            let e = .1 * this.troll.hpMax;
            this.bulletSprite.addChild(this.guillotineImg), this.guillotineImg.pos(t.x, t.y), f.instance.SetRot(this.guillotineImg, this.troll.troll), Laya.Tween.to(this.guillotineImg, {
                x: this.troll.x,
                y: this.troll.y,
                scaleX: 1,
                scaleY: 1,
                rotation: this.guillotineImg.rotation - 720
            }, 400, null, Laya.Handler.create(this, function() {
                r.instance.Fire(r.instance.TL_TROLLHIT, e, t.room.roomIndex), this.guillotineImg.removeSelf(), this.guillotineImg.visible = !1
            }), 0, !0)
        }
        get energuhoodImg() {
            return this._energuhoodImg && null != this._energuhoodImg || (this._energuhoodImg = this.Img, this._energuhoodImg.skin = "map/energuhoodImg.png"), this._energuhoodImg
        }
        EnergyhoodEvent(t) {
            if (t.isUse) return this.energuhoodImg.scale(0, 0), null != t.build && (t.build.addChild(this.energuhoodImg), this.energuhoodImg.pos(45, 45), this.energuhoodImg.alpha = 0), this.energuhoodImg
        }
        IceEvent(t) {
            if (!t.isUse) return;
            let e = this.Img;
            return e.zOrder = 1, e.skin = "map/Ice_ice.png", e.alpha = 0, e.scale(0, 0), e.pos(45, 45), t.build.addChild(e), Laya.Tween.to(e, {
                scaleX: 1,
                scaleY: 1,
                alpha: 1
            }, 1500, null, null, 0, !0), e
        }
        BarbEvent(t) {
            if (!t.isUse) return;
            let e = this.Img;
            return e.zOrder = 2, e.skin = "map/Barb_barb.png", e.alpha = 0, e.scale(0, 0), e.pos(45, 45), t.build.addChild(e), Laya.Tween.to(e, {
                scaleX: 1,
                scaleY: 1,
                alpha: 1
            }, 1500, null, null, 0, !0), e
        }
        get Img() {
            let t = null;
            return (t = this.imgs.length > 0 ? this.imgs.shift() : new Laya.Image).width = 90, t.height = 90, t.pivot(45, 45), t.rotation = 0, t.name = "event", t.visible = !0, t.zOrder = 0, this.imgUse.push(t), t
        }
        repairEvent(t) {
            if (!t.isUse) return;
            let e = this.Img;
            return e.skin = "map/wrench.png", t.build.addChild(e), e.pivot(41, 36), e.pos(45, 45), e
        }
        GameOver() {
            for (let t = this.imgUse.length - 1; t >= 0; t--) {
                let e = this.imgUse[t];
                e.removeSelf(), e.visible = !1, e.pivot(45, 45), this.imgs.push(e)
            }
            this.imgUse.length = 0, this._energuhoodImg = null, this._spellImage = null, this._guillotineImg = null, this._entrapmentImage = null
        }
        TrollIceEvent() {
            this.troll.atSpeedScale -= .3
        }
        TrollBarbEvent(t) {
            let e = .01 * this.troll.hpMax;
            r.instance.Fire(r.instance.TL_TROLLHIT, e, t)
        }
    }
    class F {
        constructor(t) {
            this.isuse = !1, this._die = !1, this._roomIndex = null, this._attacked = !1, this.prLevel = 1, this.doubleGold1 = 1, this.doubleGold2 = 1, this._buffType = {
                ice: 0,
                barb: 0,
                repair: 0,
                particlea: 0,
                spell: 1,
                entrapment: 1,
                guillotine: 1,
                energyhood: 1,
                smoney: 2,
                longrange: 2,
                solenoid: 2
            }, this.buildBuff = {
                ice: null,
                barb: null,
                repair: null,
                particlea: null,
                spell: null,
                entrapment: null,
                guillotine: null,
                energyhood: null,
                smoney: null,
                longrange: null,
                solenoid: null
            }, this.buff_immediately = {
                ice: {
                    addFunc: null,
                    removeFunc: null,
                    isUse: !1
                },
                barb: {
                    addFunc: null,
                    removeFunc: null,
                    isUse: !1
                },
                repair: {
                    addFunc: null,
                    removeFunc: null,
                    isUse: !1
                },
                particlea: {
                    addFunc: null,
                    removeFunc: null,
                    isUse: !1
                }
            }, this.buff_event = {
                spell: {
                    addFunc: null,
                    removeFunc: null,
                    isUse: !1
                },
                entrapment: {
                    addFunc: null,
                    removeFunc: null,
                    isUse: !1
                },
                guillotine: {
                    addFunc: null,
                    removeFunc: null,
                    isUse: !1
                },
                energyhood: {
                    addFunc: null,
                    removeFunc: null,
                    isUse: !1
                }
            }, this.buff_other = {
                smoney: {
                    addFunc: null,
                    removeFunc: null,
                    isUse: !1
                },
                longrange: {
                    addFunc: null,
                    removeFunc: null,
                    isUse: !1
                },
                solenoid: {
                    addFunc: null,
                    removeFunc: null,
                    isUse: !1
                }
            }, this.repairNum = 0, this.repairTime = 0, this.pr = 0, this.energuhoodImg = null, this.isEnerguhood = !1, this.isBarb = !1, this.barbTime = 0, this.repairSkillImg = null, this.repairIndex = 0, this.AddFunc(), this.StartGame(), this.roomIndex = t, this._blocks = new Array
        }
        BuildBuff(t) {
            let e = this.buildBuff[t];
            e && e.call(this)
        }
        AddBuff_immediately(t) {
            let e = this.buff_immediately[t];
            e.isUse = !0, null != e.addFunc && e.addFunc.call(this)
        }
        RemoveBuff_immediately(t) {
            let e = this.buff_immediately[t];
            e.isUse = !1, null != e.removeFunc && e.removeFunc.call(this)
        }
        AddBuff_event(t) {
            this.buff_event[t].isUse = !0
        }
        RemoveBuff_event(t) {
            let e = this.buff_event[t];
            e.isUse = !1, null != e.removeFunc && e.removeFunc.call(this)
        }
        AddbBuff_other(t) {
            this.buff_other[t].isUse = !0
        }
        RemoveBuff_other(t) {
            let e = this.buff_other[t];
            e.isUse = !1, null != e.removeFunc && e.removeFunc.call(this)
        }
        AddBuff(t) {
            switch (this._buffType[t]) {
                case 0:
                    this.AddBuff_immediately(t);
                    break;
                case 1:
                    this.AddBuff_event(t);
                    break;
                case 2:
                    this.AddbBuff_other(t)
            }
            this.BuildBuff(t)
        }
        RemoveBuff(t) {
            switch (this._buffType[t]) {
                case 0:
                    this.RemoveBuff_immediately(t);
                    break;
                case 1:
                    this.RemoveBuff_event(t);
                    break;
                case 2:
                    this.RemoveBuff_other(t)
            }
        }
        AddFunc() {
            this.buff_immediately.ice.addFunc = this.IceEvent, this.buff_immediately.barb.addFunc = this.BarbEvent, this.buff_immediately.particlea.addFunc = this.ParticleaEvent, this.buff_immediately.repair.addFunc = this.RepairEvent, this.buff_immediately.ice.removeFunc = this.RemoveIceEvent, this.buff_immediately.barb.removeFunc = this.RemoveBarbEvent, this.buff_immediately.repair.removeFunc = this.RemoveRepairEvent, this.buff_event.spell.removeFunc = this.RemoveSpellEvent, this.buff_event.guillotine.removeFunc = this.RemoveGuillotineEvent, this.buff_event.entrapment.removeFunc = this.RemoveEntarpmentEvent, this.buff_other.solenoid.removeFunc = this.RemoveSoleniodEvent, this.buff_other.smoney.removeFunc = this.RemoveSmoneyEvent, this.buff_immediately.particlea.removeFunc = this.RemoveParticleaEvent, this.buff_event.energyhood.removeFunc = this.RemoveEnergyhoodEvent, this.buff_other.longrange.removeFunc = this.RemoveLongrangEvent, this.buildBuff.spell = this.SpellBuild, this.buildBuff.guillotine = this.GuillotneBuild, this.buildBuff.entrapment = this.EntrapmentBuild, this.buildBuff.solenoid = this.SoleniodBuild, this.buildBuff.smoney = this.SmoneyBuild, this.buildBuff.particlea = this.ParticleaBuild, this.buildBuff.ice = this.IceBuild, this.buildBuff.barb = this.BarbBuild, this.buildBuff.energyhood = this.EnergyhoodBuild, this.buildBuff.longrange = this.LongrangeBuild
        }
        Init() {}
        StartGame() {
            this.roomBuild = {
                spell: [],
                ice: [],
                entrapment: [],
                barb: [],
                guillotine: [],
                repair: [],
                energyhood: [],
                smoney: [],
                longrange: [],
                particlea: [],
                solenoid: []
            }, this.buff_immediately.barb.isUse = !1, this.buff_immediately.ice.isUse = !1, this.buff_immediately.particlea.isUse = !1, this.buff_immediately.repair.isUse = !1, this.buff_other.longrange.isUse = !1, this.buff_other.smoney.isUse = !1, this.buff_other.solenoid.isUse = !1, this.buff_event.energyhood.isUse = !1, this.buff_event.entrapment.isUse = !1, this.buff_event.guillotine.isUse = !1, this.buff_event.spell.isUse = !1
        }
        get roomIndex() {
            return this._roomIndex
        }
        set roomIndex(t) {
            this._roomIndex = t
        }
        get atRange() {
            return this.BuffSwitch(F.buffTypeStr.longrange) ? F._atrange : 1
        }
        get atSpeed() {
            return this.BuffSwitch(F.buffTypeStr.particlea) ? F._atSpeed : 0
        }
        Build(t, e) {
            let i = e.name.split("_")[0],
                s = !1;
            if (this.IsAllowArchitecture(i)) {
                let _ = this.block;
                _.build = e, _.pos = this.PosTxy(t), _.room = this, _.isUse = !0, _.isOpen = !1, _.hpMax = 10, _.hpCur = 10, _.level = 1, s = !0, this._blocks.push(_), this.roomBuild[i].push(_), this.AddBuff(i), r.instance.Fire(r.instance.MGM_SET_BLOCKDYNWALKABLE, _.x, _.y, _.isOpen)
            }
            return s
        }
        IsAllowArchitecture(t) {
            let e = this.roomBuild[t],
                i = F.roomBuildCount[t];
            return null != e && e.length < i
        }
        getBlock(t, e) {
            let i = this.roomBuild[t];
            if (!(i.length > 1)) return i[0];
            for (let t = 0; t < i.length; t++) {
                let s = i[t];
                if (s.pos.x == e.x && s.pos.y == e.y) return s
            }
        }
        BuildDismantle(t) {
            let e = t.name,
                i = this.roomBuild[e];
            if (i.length > 1)
                for (let e = i.length - 1; e >= 0; e--) {
                    if (t == i[e]) return void i.splice(e, 1)
                } else this.roomBuild[e].length = 0
        }
        PosTxy(t) {
            let e = t.split("_");
            return {
                x: parseInt(e[0]),
                y: parseInt(e[1])
            }
        }
        get block() {
            return new N
        }
        BuffSwitch(t) {
            let e = !1;
            switch (this._buffType[t]) {
                case 0:
                    e = this.getBuffSwitch(this.buff_immediately, t);
                    break;
                case 1:
                    e = this.getBuffSwitch(this.buff_event, t);
                    break;
                case 2:
                    e = this.getBuffSwitch(this.buff_other, t)
            }
            return e
        }
        getBuffSwitch(t, e) {
            let i = t[e];
            return null != i && i.isUse
        }
        UpHandle() {
            this.die || (this.RepairUp(), this.EnergyhoodUp(), this.BarbUp())
        }
        IceEvent() {
            this.iceImg = H.instence.IceEvent(this.door)
        }
        IceBuild() {
            this.roomBuild.ice[0] && this.IceSkinExchange(1)
        }
        IceSkinExchange(t) {
            let e = this.roomBuild.ice[0];
            e && e.isUse && (e.build.skin = "build/ice_" + t + ".png", 3 == ++t && (t = 1), Laya.timer.once(1e3, this, this.IceSkinExchange, [t], !0))
        }
        RemoveIceEvent() {
            this.RemoveImg(this.iceImg), Laya.timer.clear(this, this.IceSkinExchange)
        }
        BarbEvent() {
            this.barbImg = H.instence.BarbEvent(this.door)
        }
        RemoveBarbEvent() {
            this.RemoveImg(this.barbImg), this.isBarb = !1, this.barb_2.visible = !1, this.barb_2.removeSelf(), this.barb_2 = void 0
        }
        RemoveImg(t) {
            t && Laya.Tween.to(t, {
                alpha: 0
            }, 500, null, Laya.Handler.create(this, function() {
                t.visible = !1, t.alpha = 1, t.removeSelf(), t = null
            }))
        }
        BarbBuild() {
            let t = this.roomBuild.barb[0];
            if (t) {
                if (!this.barb_2) {
                    let e = this.img;
                    e.pos(45, 45), e.skin = "map/barb_2.png", e.alpha = 0, t.build.addChild(e), this.barb_2 = e
                }
                this.BarbSkinExchange(1)
            }
        }
        BarbSkinExchange(t) {
            this.barb_2 && Laya.Tween.to(this.barb_2, {
                alpha: t
            }, 700, null, Laya.Handler.create(this, function() {
                t = 1 == t ? 0 : 1, this.BarbSkinExchange(t)
            }), 0, !0)
        }
        RepairEvent() {
            this.repairImg && null != this.repairImg || this.door.isUse && (this.repairImg = H.instence.repairEvent(this.door)), this.repairNum++
        }
        RemoveRepairEvent() {
            this.roomBuild.repair.length <= 1 ? this.RemoveImg(this.repairImg) : this.buff_immediately.repair.isUse = !0
        }
        RepairUp() {
            this.BuffSwitch(F.buffTypeStr.repair) && (1 != this.door.hp ? c.instance.AfterAPeriodOfTime_Bool(this.repairTime, 1) && (this.repairTime = c.instance.gameTime, this.Repatir_Tween_show(this.repairImg)) : this.repairImg.visible && this.Repatir_Tween_hide())
        }
        Repatir_Tween_show(t, e = !1) {
            if (null == t) return;
            t.visible = !0;
            let i = 0;
            i = e ? .1 * this.door.hpMax / 4 : .02 * this.door.hpMax * this.repairNum / 4, t.rotation = 0, Laya.Tween.to(t, {
                rotation: t.rotation - 30,
                alpha: 1
            }, 250, null, Laya.Handler.create(this, () => {
                this.door.hpCur += i, this.door.isUse && u.instance.PlaySound(u.instance.Other_sound.weixiu, 1, this.door.x, this.door.y), Laya.Tween.to(t, {
                    rotation: t.rotation + 30
                }, 250, null, Laya.Handler.create(this, () => {
                    this.door.hpCur += i, Laya.Tween.to(t, {
                        rotation: t.rotation + 30
                    }, 250, null, Laya.Handler.create(this, () => {
                        this.door.hpCur += i, this.door.isUse && u.instance.PlaySound(u.instance.Other_sound.weixiu, 1, this.door.x, this.door.y), Laya.Tween.to(t, {
                            rotation: t.rotation - 30
                        }, 250, null, Laya.Handler.create(this, () => {
                            this.door.hpCur += i
                        }), 0, !0)
                    }), 0, !0)
                }), 0, !0)
            }), 0, !0)
        }
        Repatir_Tween_hide() {
            this.repairImg.visible = !1
        }
        SoleniodEvent() {}
        SoleniodBuild() {
            let t = this.roomBuild.solenoid[0];
            if (t) {
                let e = this.img;
                t.build.addChild(e), e.pos(45, 45), this.soneliodImg = e, this.SoleniodSkinExchange(0)
            }
        }
        SoleniodSkinExchange(t) {
            this.soneliodImg.skin = "map/solenoidimg_" + t + ".png", 3 == ++t && (t = 0), Laya.timer.once(40, this, this.SoleniodSkinExchange, [t], !0)
        }
        RemoveSoleniodEvent() {
            this.soneliodImg.visible = !1, this.soneliodImg.removeSelf(), this.soneliodImg = void 0, Laya.timer.clear(this, this.SoleniodSkinExchange)
        }
        get solenoidMax() {
            return F._solenoidMax
        }
        SmoneyEvent(t) {
            let e = this.bed.pR / 200 * t;
            e = Math.ceil(e), this.pr += e
        }
        SmoneyBuild() {
            let t = this.roomBuild.smoney[0];
            if (t) {
                let e = this.img;
                t.build.addChild(e), e.pos(45, 45), e.skin = "map/money.png", e.alpha = 0, this.smoneyImg = e, this.SmoneySkinTwinkle(1), c.instance.AddTimeLoopEvent("UpATMPR" + this.roomIndex, this.UpATMPR, this, 1)
            }
        }
        SmoneySkinTwinkle(t) {
            this.smoneyImg && Laya.Tween.to(this.smoneyImg, {
                alpha: t
            }, 500, null, Laya.Handler.create(this, function() {
                t = 1 == t ? 0 : 1, this.SmoneySkinTwinkle(t)
            }), 0, !0)
        }
        UpATMPR() {
            if (!this.roomBuild.smoney[0] || !this.roomBuild.smoney[0].isUse) return c.instance.RemoveListLoopEvent("UpATMPR" + this.roomIndex), void(this.pr = 0);
            let t = this.roomBuild.smoney[0];
            if (0 == this.pr) return;
            let e = this.pr;
            this.pr = 0, h.instance.game.SetPR(this.roomIndex, e, 0), p.instance.Shake(t.build, .2), p.instance.RFEffect("UI/gold1.png", e, t.build)
        }
        RemoveSmoneyEvent() {
            Laya.Tween.clearAll(this.smoneyImg), this.smoneyImg.visible = !1, this.smoneyImg.removeSelf(), this.smoneyImg = void 0, c.instance.RemoveListLoopEvent("UpATMPR" + this.roomIndex), this.pr = 0
        }
        ParticleaEvent() {}
        ParticleaBuild() {
            let t = this.roomBuild.particlea[0];
            if (t) {
                let e = this.img;
                t.build.addChild(e), e.skin = "map/particleaImg.png", e.pos(45, 45), this.particleaImg = e, this.ParticleaSkinRotation()
            }
        }
        ParticleaSkinRotation() {
            this.particleaImg && Laya.Tween.to(this.particleaImg, {
                rotation: 360
            }, 1e3, null, Laya.Handler.create(this, function() {
                this.particleaImg.rotation = 0, this.ParticleaSkinRotation()
            }), 0, !0)
        }
        RemoveParticleaEvent() {
            Laya.Tween.clearAll(this.particleaImg), this.particleaImg.visible = !1, this.particleaImg.removeSelf(), this.particleaImg = void 0
        }
        LongrangeEvent() {}
        LongrangeBuild() {
            let t = this.roomBuild.longrange[0];
            if (t) {
                let e = this.img;
                e.pos(45, 45), e.skin = "map/longrange_2.png", t.build.addChild(e), this.longrange_2 = e, this.longrange_2.alpha = 0, this.LongrangSkinTwinkle(1)
            }
        }
        LongrangSkinTwinkle(t) {
            this.longrange_2 && Laya.Tween.to(this.longrange_2, {
                alpha: t
            }, 500, null, Laya.Handler.create(this, function() {
                t = 1 == t ? 0 : 1, this.LongrangSkinTwinkle(t)
            }), 0, !0)
        }
        RemoveLongrangEvent() {
            this.longrange_2.visible = !1, this.longrange_2.removeSelf(), this.longrange_2 = void 0
        }
        SpellEvent() {
            if (this.BuffSwitch(F.buffTypeStr.spell)) {
                let t = this.roomBuild.spell[0];
                H.instence.TriggerEvent(0, t)
            }
        }
        SpellBuild() {
            let t = this.roomBuild.spell[0];
            if (t) {
                let e = this.img;
                e.skin = "map/spellimg_0.png", t.build.addChild(e), e.pos(45, 45), this.spellImg = e, this.SpellSkinExchange(0)
            }
        }
        SpellSkinExchange(t) {
            this.spellImg.skin = "map/spellimg_" + t + ".png", 3 == ++t && (t = 0), Laya.timer.once(100, this, this.SpellSkinExchange, [t], !0)
        }
        RemoveSpellEvent() {
            Laya.timer.clear(this, this.SpellSkinExchange), this.spellImg.visible = !1, this.spellImg.removeSelf(), this.spellImg = void 0
        }
        EntrapmentEvent() {
            if (this.BuffSwitch(F.buffTypeStr.entrapment)) {
                let t = this.roomBuild.entrapment[0];
                H.instence.TriggerEvent(1, t)
            }
        }
        EntrapmentBuild() {
            let t = this.roomBuild.entrapment[0];
            if (t) {
                let e = this.img;
                e.skin = "map/entramentImage_1.png", e.pos(45, 45), t.build.addChild(e), this.entrapmentImg = e
            }
        }
        RemoveEntarpmentEvent() {
            this.entrapmentImg.visible = !1, this.entrapmentImg.removeSelf(), this.entrapmentImg = void 0
        }
        GuillotineEvent() {
            if (this.BuffSwitch(F.buffTypeStr.guillotine)) {
                let t = this.roomBuild.guillotine[0];
                H.instence.TriggerEvent(2, t)
            }
        }
        GuillotneBuild() {
            let t = this.roomBuild.guillotine[0];
            if (t) {
                let e = this.img;
                t.build.addChild(e), e.pos(45, 45), e.skin = "map/guillotine_3.png", this.guillotneImg = e, this.GuillotneExchange(1)
            }
        }
        GuillotneExchange(t) {
            let e = this.roomBuild.guillotine[0];
            e && (e.build.skin = "build/guillotine_" + t + ".png", 3 == ++t && (t = 1), Laya.timer.once(500, this, this.GuillotneExchange, [t], !0))
        }
        RemoveGuillotineEvent() {
            this.guillotneImg.visible = !1, this.guillotneImg.removeSelf(), Laya.timer.clear(this, this.GuillotneExchange)
        }
        EnergyhoodEvent() {
            this.BuffSwitch(F.buffTypeStr.energyhood) && (this.energuhoodImg = H.instence.TriggerEvent(3, this.door))
        }
        EnergyhoodBuild() {
            let t = this.roomBuild.energyhood[0];
            if (t) {
                let e = this.img;
                t.build.addChild(e), e.skin = "map/energyhood_2.png", e.pos(45, 38), e.pivot(45, 38), this.energyhood_2 = e, this.EnergyhoodSkinRotation()
            }
        }
        EnergyhoodSkinRotation() {
            this.energyhood_2 && Laya.Tween.to(this.energyhood_2, {
                rotation: 360
            }, 500, null, Laya.Handler.create(this, () => {
                this.energyhood_2 && (this.energyhood_2.rotation = 0, this.EnergyhoodSkinRotation())
            }), 0, !0)
        }
        RemoveEnergyhoodEvent() {
            if (!this.BuffSwitch(F.buffTypeStr.energyhood)) {
                let t = this.roomBuild.energyhood[0];
                t.invincible && (this.energuhoodImg.removeSelf(), t.invincible = !1, Laya.Tween.clearAll(this.energuhoodImg), this.energuhoodImg.visible = !1, this.energuhoodImg = null), this.energyhood_2.visible = !1, this.energyhood_2.removeSelf(), this.energyhood_2 = void 0, Laya.Tween.clearAll(this.energyhood_2)
            }
        }
        DoorHit() {
            null == this.energuhoodImg && this.EnergyhoodEvent(), this.AttackHitEffect(this.energuhoodImg, () => {
                this.door.invincible = !0, c.instance.AddTimeOnceEvent("DoorInvincible" + this.roomIndex, function() {
                    this.door.invincible = !1, this.energuhoodImg && Laya.Tween.to(this.energuhoodImg, {
                        alpha: 0
                    }, 300, null, Laya.Handler.create(this, function() {
                        this.energuhoodImg.removeSelf(), this.energuhoodImg = null
                    }), 0, !0)
                }, this, 3)
            })
        }
        EnergyhoodUp() {
            this.BuffSwitch(F.buffTypeStr.energyhood) && this.door.hp <= .3 && !this.isEnerguhood && (this.isEnerguhood = !0, this.DoorHit())
        }
        AttackHitEffect(t, e) {
            t && null != t && (t.visible = !0, Laya.Tween.to(t, {
                scaleX: 1.1,
                scaleY: 1.1,
                alpha: 1
            }, 350, null, Laya.Handler.create(this, function() {
                Laya.Tween.to(t, {
                    scaleX: 1,
                    scaleY: 1
                }, 200, null, Laya.Handler.create(this, function() {
                    e && e()
                }), 0, !0)
            }), 0, !0))
        }
        get buffTypeStr() {
            return F.buffTypeStr
        }
        HandleRoomBuff(t) {
            switch (t) {
                case 0:
                    this.SpellEvent();
                    break;
                case 1:
                    this.EntrapmentEvent();
                    break;
                case 2:
                    this.HandleIceEvent();
                    break;
                case 3:
                    this.HandleBarbEvent();
                    break;
                case 4:
                    this.GuillotineEvent()
            }
        }
        HandleIceEvent() {
            this.BuffSwitch(this.buffTypeStr.ice) && H.instence.TrollIceEvent()
        }
        HandleBarbEvent() {
            this.BuffSwitch(this.buffTypeStr.barb) && (this.isBarb = !this.isBarb, this.barbTime = c.instance.gameTime)
        }
        BarbUp() {
            this.isBarb && c.instance.AfterAPeriodOfTime_Bool(this.barbTime, 1) && (H.instence.TrollBarbEvent(this.roomIndex), this.barbTime = c.instance.gameTime)
        }
        get img() {
            let t = null;
            if (F.imgs.length > 0)
                for (let e = 0; e < F.imgs.length; e++) {
                    let i = F.imgs[e];
                    if (!i.visible) {
                        i.visible = !0, t = i;
                        break
                    }
                }
            return null == t && (t = new Laya.Image, F.imgs.push(t)), t.width = 90, t.height = 90, t.pivot(45, 45), t.rotation = 0, t.name = "room", t.visible = !0, t
        }
        GameOver() {
            if (this._blocks.length > 0)
                for (let t = 0; t < this._blocks.length; t++) {
                    this._blocks[t].GameOver()
                }
            this.spellImg = void 0, this.guillotneImg = void 0, this.entrapmentImg = void 0, this.repairSkillImg = void 0, this.isuse = !1, this.die = !1, this.prLevel = 1, Laya.timer.clearAll(this)
        }
        static GameOver() {
            for (let t = 0; t < this.imgs.length; t++) {
                let e = this.imgs[t];
                e.visible && (e.visible = !1, e.removeSelf(), Laya.Tween.clearAll(e))
            }
        }
        SkillEvent(t) {
            switch (t) {
                case 0:
                    this.RepairSkillEvent()
            }
        }
        RepairSkillEvent() {
            this.door.isUse ? (this.repairSkillImg || (this.repairSkillImg = H.instence.repairEvent(this.door)), this.RepairSkill(), c.instance.AddTimeLoopEvent("RepairSkill" + this.roomIndex, this.RepairSkill, this, 1)) : r.instance.Fire(r.instance.UIGM_TIPS, "The door has been destroyed! ! !")
        }
        RepairSkill() {
            5 == this.repairIndex ? (this.repairSkillImg.visible = !1, c.instance.RemoveListLoopEvent("RepairSkill" + this.roomIndex), this.repairIndex = 0) : (this.Repatir_Tween_show(this.repairSkillImg, !0), this.repairIndex++)
        }
        PosFindBlock(t) {
            let e = t.split("_"),
                i = parseInt(e[0]),
                s = parseInt(e[1]);
            if (this._blocks.length > 0) {
                for (let t = 0; t < this._blocks.length; t++) {
                    let e = this._blocks[t];
                    if (e.isUse && e.pos.x == i && e.pos.y == s) return e
                }
                return null
            }
        }
        set die(t) {
            this._die = t
        }
        get die() {
            return this._die
        }
        Die(t) {
            this.door.isUse || (this.repairImg && (this.repairImg.removeSelf(), this.repairImg.visible = !1, this.repairImg = null), this.iceImg && (this.iceImg.removeSelf(), this.iceImg.visible = !1, this.iceImg = null), this.barbImg && (this.barbImg.removeSelf(), this.barbImg.visible = !1, this.barbImg = null), this.energuhoodImg && (this.energuhoodImg.removeSelf(), Laya.Tween.clearAll(this.energuhoodImg), this.energuhoodImg.visible = !1, this.energuhoodImg = null)), this.RemoveBuff(t.name)
        }
        GetBuildNum(t) {
            let e = this.roomBuild[t];
            return e ? e.length : null
        }
    }
    F._atrange = 1.3, F._atSpeed = 1, F.imgs = new Array, F._solenoidMax = 2, F.roomBuildCount = {
        spell: 1,
        ice: 1,
        entrapment: 1,
        barb: 1,
        guillotine: 1,
        repair: 4,
        energyhood: 1,
        smoney: 1,
        longrange: 1,
        particlea: 1,
        solenoid: 1
    }, F.buffTypeStr = {
        spell: "spell",
        ice: "ice",
        entrapment: "entrapment",
        barb: "barb",
        guillotine: "guillotine",
        repair: "repair",
        energyhood: "energyhood",
        smoney: "smoney",
        longrange: "longrange",
        particlea: "particlea",
        solenoid: "solenoid"
    };
    class Y {
        constructor() {
            this._bgHeight = 150, this._buttonHeight = 140, this._selectIndex = 0, this.buildCount = F.roomBuildCount, this._menus = new Array, this._btnarr = new Array, this._dashedBox = [], this._boxArr = [], this._panel = r.instance.FireReturn(r.instance.MAP_GET_ACTIVITYMAP), this.AddEvent(), this.LoadMenu()
        }
        AddEvent() {
            r.instance.AddListEvent(r.instance.SHOW_MENU, this.MenuShow, this), r.instance.AddListEvent(r.instance.HIDE_MENU, this.MenuHide, this), r.instance.AddListEvent(r.instance.OFF_SHOW_MENU, this.ShowOff, this), r.instance.AddListEvent(r.instance.OFF_HIDE_MENU, this.HideOff, this)
        }
        LoadMenu() {
            let t = Laya.loader.getRes("Prefabs/menu.json");
            this._sceen = Laya.stage.getChildAt(0).getChildAt(0), this._menu = new Laya.View, this._menu.createView(t), this.InitMenu()
        }
        InitMenu() {
            this._buildLoad = Laya.loader.getRes("Prefabs/buildMenu.json"), this._head = this._menu.getChildByName("head"), this._head.skin = "UI/Solidline.png", this._head.removeSelf(), this._menuBg = this._menu.getChildByName("BG"), this._select = this._menu.getChildByName("select"), this._upText = this._menu.getChildByName("UpText");
            for (let t = 0; t < this._select.numChildren; t++) {
                let e = t,
                    i = this._select.getChildAt(t);
                i.on(Laya.Event.CLICK, this, this.SelectBtnEvent, [e, i])
            }
            this._build = this._menu.getChildByName("build");
            let t = Laya.loader.getRes("Prefabs/off.json");
            this._off = new Laya.View, this._off.createView(t), Laya.stage.getChildAt(0).getChildAt(0).addChild(this._off), this._off.visible = !1, this._off.zOrder = 20, this._off.on(Laya.Event.CLICK, this, function() {
                r.instance.Fire(r.instance.PLOGIC_OFFEVENTHANDLE)
            })
        }
        SelectBtnEvent(t, e) {
            if (t != this._selectIndex) {
                let i = this._select.getChildAt(this._selectIndex),
                    s = i.skin;
                i.skin = e.skin, e.skin = s, this._selectIndex = t, this.BuildMenu(), this.MenuShow()
            }
            e.skin = "pipei/select_0.png"
        }
        getmenu() {
            let t = null;
            if (this._menus.length > 0 && ((t = this._menus.shift()).visible = !0), null == t) {
                (t = new Laya.View).createView(this._buildLoad);
                let e = t.getChildByName("btn");
                p.instance.AddBtnEvent([e])
            }
            return t
        }
        BuildMenu() {
            this.ClearMenu();
            var t = h.instance.build.getbasicBuildData(this._selectIndex);
            for (let e = 0; e < t.length; e++) this.SubOption(t[e]);
            this._select.visible = !0, this._build.y = 139, this._upText.text = "Building", this._upText.fontSize = 45
        }
        BuildUpMenu(t, e = !0) {
            this.ClearMenu();
            let i = t.buildName,
                s = this.getUpBuildName(i);
            e && this.SubOption(s.str), "bed" != t.name && "door" != t.name ? this.Dismantle(t.buildName) : "door" != t.name || t.adv || h.instance.player.DZCount >= h.instance.cdn.cdn.doorADVOpneCount && this.KingADV(s.str), this._select.visible = !1, this._build.y = 72
        }
        getUpBuildName(t) {
            let e = t.split("_"),
                i = parseInt(e[1]) + 1;
            return {
                name: e[0],
                level: i,
                str: e[0] + "_" + i
            }
        }
        ClearMenu() {
            if (this._build.numChildren > 0)
                for (let t = this._build.numChildren - 1; t >= 0; t--) {
                    let e = this._build.getChildAt(t);
                    e.visible = !1, this._menus.push(e), this._build.removeChild(e);
                    let i = e.getChildByName("btn");
                    i.off(Laya.Event.CLICK, this, this.DismantleClickEvent), i.off(Laya.Event.CLICK, this, this.MenuClickEvent), i.off(Laya.Event.CLICK, this, this.MenuClickEvent_ADV)
                }
            this._btnarr.length = 0
        }
        KingADV(t) {
            let e = t.split("_"),
                i = h.instance.build.GetBuildData(e[0], parseInt(e[1]));
            if (!i) return;
            let s = h.instance.build.GetIntroduce(e[0], parseInt(e[1])),
                _ = this.getmenu(),
                n = _.getChildByName("buildImg"),
                a = _.getChildByName("subBuildImg"),
                l = _.getChildByName("name"),
                o = _.getChildByName("introduce");
            _.getChildByName("count").getChildByName("counttext").parent.visible = !1;
            let r = _.getChildByName("btn"),
                d = r.getChildByName("goldText1"),
                c = r.getChildByName("goldText2"),
                u = r.getChildByName("mod1"),
                p = r.getChildByName("mod2"),
                m = r.getChildByName("mod3"),
                g = r.getChildByName("mod4");
            if (u.visible = !1, p.visible = !1, m.visible = !1, g.visible = !0, d.visible = !1, c.visible = !1, "at" == e[0]) n.skin = "Atower/" + t + ".png", a.skin = "Atower/" + t + "_B.png", a.visible = !0;
            else {
                n.skin = "build/" + t + ".png";
                let i = h.instance.build.GetSubSkin(e[0]);
                null == i ? a.visible = !1 : (a.visible = !0, a.skin = i)
            }
            this._build.addChild(_), o.text = s + "\nTips：Only one chance to use!!!", l.text = i[0], r.skin = "load/doorAdvBtn.png", r.on(Laya.Event.CLICK, this, this.MenuClickEvent_ADV, [t])
        }
        Dismantle(t) {
            let e = t.split("_"),
                i = h.instance.build.GetBuildData(e[0], parseInt(e[1])),
                s = this.getmenu(),
                _ = s.getChildByName("buildImg"),
                n = s.getChildByName("subBuildImg"),
                a = s.getChildByName("btn"),
                l = a.getChildByName("goldText1"),
                o = a.getChildByName("goldText2"),
                r = a.getChildByName("mod1"),
                d = a.getChildByName("mod2"),
                c = a.getChildByName("mod3"),
                u = a.getChildByName("mod4");
            r.visible = !1, d.visible = !1, c.visible = !1, u.visible = !1;
            let p = s.getChildByName("name"),
                m = s.getChildByName("introduce");
            s.getChildByName("count").getChildByName("counttext").parent.visible = !1, n.visible = !1, p.text = "Demolish", m.text = "Destroy the current building and return certain resources.", l.visible = !1, o.visible = !1, 0 != i[1] && 0 != i[2] ? (l.visible = !0, o.visible = !0, l.text = "+ " + (i[1] / 2).toString(), o.text = "+ " + (i[2] / 2).toString(), l.y = 26, o.y = 68) : 0 != i[1] ? (l.text = "+ " + (i[1] / 2).toString(), l.visible = !0, l.y = 50.625) : 0 != i[2] && (o.text = "+ " + (i[2] / 2).toString(), o.visible = !0, o.y = 50.625), _.skin = "build/TearDown.png", a.skin = "load/chBtn.png", this._build.addChild(s), a.on(Laya.Event.CLICK, this, this.DismantleClickEvent)
        }
        SubOption(t) {
            if (!this._room) return;
            let e = t.split("_"),
                i = h.instance.build.GetBuildData(e[0], parseInt(e[1]));
            if (null == i) {
                let t = h.instance.build.GetBuildData(e[0], parseInt(e[1]) - 1),
                    i = h.instance.build.GetIntroduce(e[0], parseInt(e[1]) - 1);
                return this._upText.text = t[0] + "\n" + i, void(this._upText.fontSize = 21)
            }
            this._upText.text = "Upgrade", this._upText.fontSize = 45;
            let s = h.instance.build.GetIntroduce(e[0], parseInt(e[1])),
                _ = t.split("_"),
                n = this.getmenu(),
                a = n.getChildByName("buildImg"),
                l = n.getChildByName("subBuildImg"),
                o = n.getChildByName("btn"),
                r = o.getChildByName("goldText1"),
                d = o.getChildByName("goldText2"),
                c = o.getChildByName("mod1"),
                u = o.getChildByName("mod2"),
                p = o.getChildByName("mod3"),
                m = o.getChildByName("mod4");
            c.visible = !1, u.visible = !1, p.visible = !1, m.visible = !1, r.visible = !1, d.visible = !1;
            let g = n.getChildByName("name"),
                y = n.getChildByName("introduce"),
                f = n.getChildByName("count").getChildByName("counttext"),
                I = h.instance.player.GetBuileprintNum(e[0]),
                v = this._room.GetBuildNum(e[0]),
                b = this.buildCount[e[0]];
            if (y.text = s, g.text = i[0], this._build.addChild(n), o.on(Laya.Event.CLICK, this, this.MenuClickEvent, [t]), "at" == _[0]) a.skin = "Atower/" + t + ".png", l.skin = "Atower/" + t + "_B.png", l.visible = !0;
            else {
                a.skin = "build/" + t + ".png";
                let e = h.instance.build.GetSubSkin(_[0]);
                null == e ? l.visible = !1 : (l.visible = !0, l.skin = e)
            }
            if (null != v) {
                if (null == I || 0 == I) return f.parent.visible = !1, c.visible = !0, o.skin = "load/menuBtnNo.png", void o.on(Laya.Event.CLICK, this, this.MenuClickEvent, [t]);
                if (f.parent.visible = !0, f.text = I.toString(), v == b) {
                    return p.visible = !0, p.getChildByName("textUp").text = v + "/" + b, o.skin = "load/menuBtnNo.png", void o.on(Laya.Event.CLICK, this, this.MenuClickEvent, [t])
                }
                u.visible = !0, u.getChildByName("text").text = "build " + v + "/" + b
            } else f.parent.visible = !1;
            0 != i[1] && 0 != i[2] ? (r.visible = !0, d.visible = !0, r.text = i[1], d.text = i[2], r.y = 26, d.y = 68) : 0 != i[1] ? (r.text = i[1], r.visible = !0, r.y = 50.625) : 0 != i[2] && (d.text = i[2], d.visible = !0, d.y = 50.625);
            let S = h.instance.game.GetRoomPR(this._room.roomIndex);
            S.gold1 >= i[1] && S.gold2 >= i[2] ? o.skin = "load/menuBtn.png" : (o.skin = "load/menuBtnNo.png", this._btnarr.push({
                gold1: i[1],
                gold2: i[2],
                btn: o
            }))
        }
        UpBtn() {
            if (this._btnarr.length > 0) {
                let t = h.instance.game.GetRoomPR(this._room.roomIndex);
                for (let e = this._btnarr.length - 1; e >= 0; e--) {
                    let i = this._btnarr[e];
                    t.gold1 >= i.gold1 && t.gold2 >= i.gold2 && (i.btn.skin = "load/menuBtn.png", this._btnarr.splice(e, 1))
                }
            }
        }
        MenuShow() {
            if (this._build.numChildren > 0) {
                this._build.height = this._build.numChildren * this._buttonHeight, this._menu.height = this._bgHeight + this._build.height, this._menuBg.height = this._menu.height;
                let t = this._build.numChildren;
                for (let e = 0; e < t; e++) {
                    let t = this._build.getChildAt(e);
                    t.scale(0, 1), Laya.Tween.to(t, {
                        x: 270,
                        y: e * this._buttonHeight + 70,
                        scaleX: 1,
                        scaleY: 1
                    }, 200, null, null, 100 * e, !0)
                }
            }
            this._sceen.addChild(this._menu);
            let t = this._head.x,
                e = this._head.y;
            this._sceen.addChild(this._head), this._head.pos(t, e), this._menu.x = this._sceen.width / 2;
            let i = this._head.y / this._sceen.height,
                s = 1 - i;
            this._menu.y = i > s ? this._head.y - 45 - this._menu.height : this._head.y + 45, this._menu.zOrder = 19, r.instance.Fire(r.instance.UIGM_HIDESKILL)
        }
        MenuHide() {
            this._menu.parent == Laya.stage.getChildAt(0).getChildAt(0) && (this._menu.removeSelf(), this._head.removeSelf(), this.ClearMenu(), r.instance.Fire(r.instance.BUILD_CLICKBLICK_INIT), r.instance.Fire(r.instance.UIGM_SHOWSKILL))
        }
        get head() {
            return 0 == this._build.numChildren ? (r.instance.Fire(r.instance.UIGM_TIPS, "The building level reaches MAX"), null) : this._head
        }
        MenuClickEvent(t) {
            r.instance.Fire(r.instance.BUILD_BUILDORUP, t), this.MenuHide()
        }
        MenuClickEvent_ADV(t) {
            G.instance.ShowADV({
                success: () => {
                    this._room.door.adv = !0, r.instance.Fire(r.instance.BUILD_BUILDORUP_ADV, t), this.MenuHide()
                },
                fail: () => {
                    r.instance.Fire(r.instance.UIGM_TIPS, "视频未播放完成")
                }
            })
        }
        DismantleClickEvent() {
            u.instance.PlaySound(u.instance.Other_sound.CC), r.instance.Fire(r.instance.BUILD_BUILD_DISMANTLE), this.MenuHide()
        }
        ShowOff(t, e = null) {
            "上床" == t && this.GameOver(), null != e && this._off.pos(e.x, e.y), this._off.getChildByName("offImg").skin = "pipei/" + t + ".png", this._off.visible = !0
        }
        HideOff() {
            this._off.visible = !1
        }
        TwinkleHandle(t) {
            for (let e = 0; e < t.length; e++) {
                let i = t[e],
                    s = this.GetTwinkleImg();
                s.visible = !0, s.pos(i.x, i.y), this._panel.addChild(s), this.ShowTwinkle(s), this._dashedBox.push(s)
            }
        }
        setTwinkleSkin(t, e, i = 1) {
            let s = null;
            if (this._dashedBox.length > 0)
                for (let i = 0; i < this._dashedBox.length; i++) {
                    let _ = this._dashedBox[i];
                    if (_.x == t && _.y == e) {
                        s = _;
                        break
                    }
                }
            null != s && (s.skin = "UI/dashed_" + i + ".png")
        }
        ShowTwinkle(t) {
            t.alpha = 0, Laya.Tween.to(t, {
                alpha: 1
            }, 2e3, null, Laya.Handler.create(this, function() {
                Laya.Tween.to(t, {
                    alpha: 0
                }, 2e3, null, Laya.Handler.create(this, function() {
                    this.ShowTwinkle(t)
                }), 0, !0)
            }), 0, !0)
        }
        GetTwinkleImg() {
            let t;
            return (t = this._boxArr.length > 0 ? this._boxArr.shift() : new Laya.Image).width = 90, t.height = 90, t.pivot(45, 45), t.skin = "UI/dashed_1.png", t
        }
        GameOver() {
            for (let t = 0; t < this._dashedBox.length; t++) {
                let e = this._dashedBox[t];
                e.removeSelf(), Laya.Tween.clearAll(e), this._boxArr.push(e)
            }
            this._dashedBox.length = 0, this._btnarr.length = 0
        }
        StartGame() {
            c.instance.AddTimeLoopEvent("UpBtn", this.UpBtn, this, .2)
        }
        set room(t) {
            this._room = t
        }
    }
    class K extends b {
        Handel_UpData(t) {
            t.room.die || this.IncreasePR(t)
        }
        BlockInfo(t, e) {
            t.pR = e[3]
        }
        IncreasePR(t) {
            let e = t.pR * t.room.prLevel * t.room.doubleGold1;
            h.instance.game.SetPR(t.room.roomIndex, e, 0);
            let i = .01 * t.level;
            t.pREffect && (p.instance.Shake(t.build, i), p.instance.RFEffect("UI/gold1.png", t.pR, t.build))
        }
        GetBlockInfo() {
            if (this._blockInfos.length > 0)
                for (let t = this._blockInfos.length - 1; t >= 0; t--)
                    if (!this._blockInfos[t].isUse) {
                        let e = this._blockInfos[t];
                        return this._blockInfos.splice(t, 1), e
                    }
            return new P
        }
    }
    class V {
        constructor() {
            this.clickBlock = {
                x: null,
                y: null,
                blockC: null,
                roomIndex: null,
                block: null
            }, this._buildInfo = {
                bed: new w,
                door: new O,
                game: new D,
                at: new T,
                mine: new K
            }, this._loadBuild = !1, this._buildMenu = new Y, this._rooms = [], this._roomBuild = new Array, this.AddEvent(), this.AddUPEvent()
        }
        AddEvent() {
            r.instance.AddListEvent(r.instance.CLICK_BUILD, this.ClickBuildEvent, this), r.instance.AddListEvent(r.instance.COLLECTIVE_BUILD, this.CollectiveBuild, this), r.instance.AddListEvent(r.instance.BUILD_NEW, this.Build, this), r.instance.AddListEvent(r.instance.BUILD_BUILDORUP, this.BuildOrUp, this), r.instance.AddListEvent(r.instance.BUILD_BUILDORUP_ADV, this.BuildOrUpADV, this), r.instance.AddListEvent(r.instance.BUILD_CLICKBLICK_INIT, this.ClickBlockInit, this), r.instance.AddListEvent(r.instance.BUILD_UPBUILD, this.BuildUp, this), r.instance.AddListEvent(r.instance.BUILD_BUILD_DISMANTLE, this.BuildDismantle, this), r.instance.AddListEvent(r.instance.BUILD_HANDLEROOMBUFF, this.HandleRoomBuff, this), r.instance.AddListEvent(r.instance.BUILD_FINDDOOR, this.FindDoor, this), r.instance.AddListEvent(r.instance.BUILD_FINDBEDANDDOOR, this.FindBedAndDoor, this), r.instance.AddListEvent(r.instance.BUILD_FINDROOM, this.GetRoom, this), r.instance.AddListEvent(r.instance.BUILD_GOTOBED, this.GoToBed, this), r.instance.AddListEvent(r.instance.BUILD_GET_ROOMALLBLOCK, this.FindRoomBuild, this), r.instance.AddListEvent(r.instance.BUILD_FINDBLOCKPOS, this.FindBlockPos, this), r.instance.AddListEvent(r.instance.BUILD_PARALYSIS_ON, this.Paralysis_on, this), r.instance.AddListEvent(r.instance.BUILD_SKILLEVENT, this.SkillEvent, this), r.instance.AddListEvent(r.instance.BUILD_SETTWINKSKin, this.SetTwinkleSkin, this), r.instance.AddListEvent(r.instance.BUILD_SET_ROOM_DIE, this.SetRoomDie, this), r.instance.AddListEvent(r.instance.BUILD_GET_AT_BUILDCOUNT, this.GetBuildAtCount, this), r.instance.AddListEvent(r.instance.BUILD_GET_GAME_BUILDCOUNT, this.GetBuildGameCount, this), r.instance.AddListEvent(r.instance.BUILD_REACHC, this.ReachConditions, this)
        }
        AddUPEvent() {
            e.instance.AddUPEvent("buildManager", this.UpData, this)
        }
        ClickBuildEvent(t, e, i, s) {
            if (null != this.clickBlock.x && null != this.clickBlock.y && this.clickBlock.x == t && this.clickBlock.y == e) return void this._buildMenu.MenuHide();
            this.clickBlock.x = t, this.clickBlock.y = e, this.clickBlock.blockC = null, this.clickBlock.block = null, this.clickBlock.roomIndex = s;
            var _ = this._buildInfo[i];
            let n = this.GetRoom(s),
                a = null;
            if (s != y.instance.player.roomIndex) {
                if (!n.bed.isUse && 0 != i.length)
                    if (_) {
                        let i = t + "_" + e;
                        null != (l = _.FindBlockInfo_Pos(i)) && (this.clickBlock.block = l, this.clickBlock.blockC = _, this._buildMenu.BuildUpMenu(l, !1), a = this._buildMenu.head)
                    } else {
                        let s = n.getBlock(i, {
                            x: t,
                            y: e
                        });
                        null != s && (this.clickBlock.block = s, this.clickBlock.blockC = _, this._buildMenu.BuildUpMenu(s), a = this._buildMenu.head)
                    }
            } else if (null == _)
                if (0 == i.length) this._buildMenu.BuildMenu(), a = this._buildMenu.head;
                else {
                    let s = n.getBlock(i, {
                        x: t,
                        y: e
                    });
                    null != s && (this.clickBlock.block = s, this.clickBlock.blockC = _, this._buildMenu.BuildUpMenu(s, !0), a = this._buildMenu.head)
                }
            else {
                let i = t + "_" + e;
                var l;
                null != (l = _.FindBlockInfo_Pos(i)) && (this.clickBlock.block = l, this.clickBlock.blockC = _, this._buildMenu.BuildUpMenu(l), a = this._buildMenu.head)
            }
            null != a && r.instance.Fire(r.instance.SET_POS_MENU, t, e, a)
        }
        CollectiveBuild(t) {
            if (!(t.length < 0)) {
                for (let e = 0; e < t.length; e++) {
                    let i = t[e];
                    this.Build(i.pos, i.build, i.roomIndex)
                }
                this._loadBuild = !0
            }
        }
        Build(t, e, i) {
            let s = e.name.split("_")[0],
                _ = this._buildInfo[s],
                n = this.GetRoom(i);
            if (_) {
                let a = _.Build(t, e, n);
                this.AddRoomBuild(i, a), this._loadBuild && (u.instance.PlaySound(u.instance.TB_sound.build_build, 1, e.x, e.y), i == y.instance.player.roomIndex && h.instance.player.ModifiedBuileprintQuantity(s, -1))
            } else if (y.instance.player && i == y.instance.player.roomIndex) {
                if (h.instance.player.GetBuileprintNum(s) <= 0) {
                    r.instance.Fire(r.instance.UIGM_TIPS, "Please go to the store to buy blueprints"), r.instance.Fire(r.instance.MAP_DEMOLISH, e, null);
                    let t = h.instance.game.GetRoomPR(i),
                        s = e.name.split("_"),
                        _ = h.instance.build.GetBuildData(s[0], parseInt(s[1]));
                    t.gold1 += _[1], t.gold2 += _[2], r.instance.Fire(r.instance.MAP_BUILD_DISMANTLE, e, e.x, e.y)
                } else if (n.Build(t, e)) this._loadBuild && (u.instance.PlaySound(u.instance.TB_sound.build_build, 1, e.x, e.y), h.instance.player.ModifiedBuileprintQuantity(s, -1));
                else {
                    r.instance.Fire(r.instance.MAP_DEMOLISH, e, null);
                    let t = h.instance.game.GetRoomPR(i),
                        s = e.name.split("_"),
                        _ = h.instance.build.GetBuildData(s[0], parseInt(s[1]));
                    t.gold1 += _[1], t.gold2 += _[2], r.instance.Fire(r.instance.MAP_BUILD_DISMANTLE, e, e.x, e.y), r.instance.Fire(r.instance.UIGM_TIPS, "The number of buildings has reached the limit")
                }
            } else if (n.Build(t, e)) this._loadBuild && u.instance.PlaySound(u.instance.TB_sound.build_build, 1, e.x, e.y);
            else {
                r.instance.Fire(r.instance.MAP_DEMOLISH, e, null);
                let t = h.instance.game.GetRoomPR(i),
                    s = e.name.split("_"),
                    _ = h.instance.build.GetBuildData(s[0], parseInt(s[1]));
                t.gold1 += _[1], t.gold2 += _[2], r.instance.Fire(r.instance.MAP_BUILD_DISMANTLE, e, e.x, e.y)
            }
        }
        BuildUp(t, e) {
            let i = e.name.split("_")[0];
            this._buildInfo[i].BuildUp(t, e), u.instance.PlaySound(u.instance.TB_sound.build_up, 1, e.x, e.y)
        }
        BuildOrUp(t) {
            let e = h.instance.game.GetRoomPR(y.instance.player.roomIndex),
                i = t.split("_"),
                s = h.instance.build.GetBuildData(i[0], parseInt(i[1]));
            if (0 == s[5].length || this.ReachConditions(s[5], y.instance.player.roomIndex))
                if (e.gold1 >= s[1] && e.gold2 >= s[2])
                    if (e.gold1 -= s[1], e.gold2 -= s[2], null == this.clickBlock.blockC) r.instance.Fire(r.instance.MAP_BUILD_NEW, this.clickBlock.x, this.clickBlock.y, t);
                    else {
                        let e = this.clickBlock.blockC.FindBlockInfo_Pos(this.clickBlock.x + "_" + this.clickBlock.y);
                        null != e ? (u.instance.PlaySound(u.instance.TB_sound.build_up), r.instance.Fire(r.instance.MAP_UPBUILD, e.build, t), this.clickBlock.blockC.BuildUp(this.clickBlock.x + "_" + this.clickBlock.y), d.instance.AddEffect(d.instance.effectStr.buildDownEffect, e.build.x, e.build.y), this._buildMenu.MenuHide()) : r.instance.Fire(r.instance.UIGM_TIPS, "The building has been destroyed! ! !")
                    }
            else e.gold1 < s[1] && e.gold2 < s[2] ? r.instance.Fire(r.instance.UIGM_TIPS, "Gold、Insufficient lightning，Please upgrade the bed、lightning") : e.gold1 < s[1] ? r.instance.Fire(r.instance.UIGM_TIPS, "Not enough gold coins, please upgrade the bed") : r.instance.Fire(r.instance.UIGM_TIPS, "Please upgrade your game console");
            else {
                let t = s[5].split("_"),
                    e = h.instance.build.GetBuildData(t[0], parseInt(t[1]));
                r.instance.Fire(r.instance.UIGM_TIPS, "Need " + e[0])
            }
        }
        BuildOrUpADV(t) {
            if (null == this.clickBlock.blockC) r.instance.Fire(r.instance.MAP_BUILD_NEW, this.clickBlock.x, this.clickBlock.y, t);
            else {
                let e = this.clickBlock.blockC.FindBlockInfo_Pos(this.clickBlock.x + "_" + this.clickBlock.y);
                null != e ? (u.instance.PlaySound(u.instance.TB_sound.build_up), r.instance.Fire(r.instance.MAP_UPBUILD, e.build, t), this.clickBlock.blockC.BuildUp(this.clickBlock.x + "_" + this.clickBlock.y), d.instance.AddEffect(d.instance.effectStr.buildDownEffect, e.build.x, e.build.y), this._buildMenu.MenuHide()) : r.instance.Fire(r.instance.UIGM_TIPS, "The building has been destroyed! ! !")
            }
        }
        ReachConditions(t, e) {
            let i = t.split("_"),
                s = parseInt(i[1]);
            return !!this._buildInfo[i[0]].ReachConditions(s, e) || (h.instance.build.GetBuildData(i[0], parseInt(i[1])), !1)
        }
        BuildDismantle() {
            if (null != this.clickBlock.blockC) var t = this.clickBlock.blockC.FindBlockInfo_Pos(this.clickBlock.x + "_" + this.clickBlock.y);
            else {
                let e = (t = this.clickBlock.block).room;
                e.RemoveBuff(t.name), e.BuildDismantle(t)
            }
            let e = t.x,
                i = t.y,
                s = h.instance.game.GetRoomPR(y.instance.player.roomIndex);
            if (s) {
                let e = h.instance.build.GetBuildData(t.name, t.level),
                    i = Math.floor(e[1] / 2),
                    _ = Math.floor(e[2] / 2);
                s.gold1 += i, s.gold2 += _, 0 != e[1] && p.instance.RFEffect("UI/gold1.png", i, t.build), 0 != e[2] && p.instance.RFEffect("UI/gold2.png", _, t.build)
            }
            t.GameOver(), r.instance.Fire(r.instance.MAP_BUILD_DISMANTLE, t.build, e, i), this._buildMenu.MenuHide()
        }
        ClickBlockInit() {
            this.clickBlock.x = null, this.clickBlock.y = null, this.clickBlock.blockC = null, this.clickBlock.roomIndex = null, this.clickBlock.block = null
        }
        UpData() {
            for (let t = 0; t < this._rooms.length; t++) {
                this._rooms[t].UpHandle()
            }
            this._buildInfo.mine.UpData(), this._buildInfo.door.UpData(), this._buildInfo.game.UpData(), this._buildInfo.at.UpData(), this._buildInfo.bed.UpData()
        }
        FindDoor(t) {
            return this._buildInfo.door.FindBlockInfo_RoomIndex(t)
        }
        FindBedAndDoor(t) {
            return {
                bed: this._buildInfo.bed.FindBlockInfo_RoomIndex(t),
                door: this.FindDoor(t)
            }
        }
        GoToBed(t, e, i = !1) {
            t.build.skin = "build/bed_1.png", t.head = e, t.isOpen = !0;
            let s = this.FindDoor(t.room.roomIndex);
            if (s.CloseDoor(), r.instance.Fire(r.instance.MGM_SET_BLOCKDYNWALKABLE, s.x, s.y, s.isOpen), i) {
                let e = r.instance.FireReturn(r.instance.MGM_GET_BLOCKPOSS, t.room.roomIndex);
                null != e && (this._buildMenu.TwinkleHandle(e), this._roomBlock = this.GetRoomBuild(t.room.roomIndex).block, this._buildMenu.room = t.room, c.instance.AddTimeLoopEvent("RoomBuildUp", this.RoomBuildUp, this, .02))
            }
        }
        FindRoomBuild(t) {
            let e = [];
            for (let i in this._buildInfo) {
                let s = this._buildInfo[i].GetRoomAllBlock(t);
                null != s && (e = e.concat(s))
            }
            return e.length > 0 ? e : null
        }
        FindBlockPos(t, e) {
            for (let e in this._buildInfo) {
                let i = this._buildInfo[e].FindBlockInfo_Pos(t);
                if (null != i) return i
            }
            if (-1 != e) {
                return this.GetRoom(e).PosFindBlock(t)
            }
            return null
        }
        GameOver() {
            H.instence.GameOver(), F.GameOver(), this.ClearRoom(), this._buildMenu.GameOver(), this._buildInfo.mine.GameOver(), this._buildInfo.at.GameOver(), this._buildInfo.bed.GameOver(), this._buildInfo.door.GameOver(), this._buildInfo.game.GameOver(), this._buildMenu.MenuHide(), this._buildMenu.HideOff(), this.clickBlock = {
                x: null,
                y: null,
                blockC: null,
                roomIndex: null,
                block: null
            }, this._roomBlock = null, this._roomBuild.length = 0, this._loadBuild = !1
        }
        ClearRoom() {
            for (let t = 0; t < this._rooms.length; t++) {
                this._rooms[t].GameOver()
            }
        }
        GetRoom(t) {
            if (t >= 0 && t < this._rooms.length)
                for (let e = 0; e < this._rooms.length; e++) {
                    let i = this._rooms[e];
                    if (t == i.roomIndex) return i
                }
            let e = new F(t);
            return this._rooms.push(e), this.SortRoom(), e
        }
        StartGame() {
            if (this._rooms.length > 0)
                for (let t = 0; t < this._rooms.length; t++) {
                    this._rooms[t].StartGame()
                }
            this._buildMenu.StartGame()
        }
        Paralysis_on(t) {
            if (t.length > 0) {
                for (let e = 0; e < t.length; e++) {
                    let i = t[e],
                        s = this._buildInfo.at.FindBlockInfo_Pos(i);
                    s && s.isUse && (s.paralysis = !0, d.instance.AddEffect(d.instance.effectStr.build_vertigo, s.x, s.y, !0, 3e3))
                }
                this._paralyss = t, c.instance.AddTimeOnceEvent("paralysis_off", this.paralysis_off, this, 3)
            }
        }
        paralysis_off() {
            let t = this._paralyss;
            if (t.length > 0)
                for (let e = 0; e < t.length; e++) {
                    let i = t[e],
                        s = this._buildInfo.at.FindBlockInfo_Pos(i);
                    s && s.isUse && (s.paralysis = !1)
                }
            this._paralyss = null
        }
        HandleRoomBuff(t, e) {
            if (t < this._rooms.length && t >= 0) {
                this._rooms[t].HandleRoomBuff(e)
            }
        }
        SortRoom() {
            if (this._rooms.length > 1)
                for (let t = 0; t < this._rooms.length - 1; t++)
                    for (let e = t + 1; e < this._rooms.length; e++)
                        if (this._rooms[t].roomIndex > this._rooms[e].roomIndex) {
                            let i = this._rooms[t];
                            this._rooms[t] = this._rooms[e], this._rooms[e] = i
                        }
        }
        SkillEvent(t, e) {
            let i = this._rooms[t];
            i && i.SkillEvent(e)
        }
        GetRoomBuild(t) {
            if (this._roomBuild.length > 0)
                for (let e = 0; e < this._roomBuild.length; e++) {
                    let i = this._roomBuild[e];
                    if (i.roomIndex == t) return i
                }
            let e = {
                roomIndex: t,
                block: []
            };
            return this._roomBuild.push(e), e
        }
        AddRoomBuild(t, e) {
            let i = this.GetRoomBuild(t);
            for (let t = 0; t < i.block.length; t++) {
                if (i.block[t] == e) return
            }
            i.block.push(e)
        }
        RoomBuildUp() {
            if (this._roomBlock && this._roomBlock.length > 0)
                for (let t = this._roomBlock.length - 1; t >= 0; t--) {
                    let e = this._roomBlock[t];
                    e.isUse ? this.UpInspect(e.name, e.level + 1) ? e.isPromptUp || (this.SetTwinkleSkin(e.x, e.y, 0), e.isPromptUp = !0, e.ShowPromptUp()) : e.isPromptUp && (this.SetTwinkleSkin(e.x, e.y), e.isPromptUp = !1, e.HidePromptUp()) : this._roomBlock.splice(t, 1)
                }
        }
        SetTwinkleSkin(t, e, i = 1) {
            this._buildMenu.setTwinkleSkin(t, e, i)
        }
        UpInspect(t, e) {
            let i = t + "_" + e,
                s = h.instance.game.GetRoomPR(y.instance.player.roomIndex),
                _ = i.split("_"),
                n = h.instance.build.GetBuildData(_[0], parseInt(_[1]));
            return !!n && (!(0 != n[5].length && !this.ReachConditions(n[5], y.instance.player.roomIndex)) && (s.gold1 >= n[1] && s.gold2 >= n[2]))
        }
        SetRoomDie(t) {
            this.GetRoom(t).die = !0
        }
        GetBuildAtCount(t) {
            return this._buildInfo.at.FindBlockInfo_RoomIndex_count(t)
        }
        GetBuildGameCount(t) {
            return this._buildInfo.game.FindBlockInfo_RoomIndex_count(t)
        }
    }
    class W {
        constructor() {
            this._straightCost = 1, this._diagCost = Math.SQRT2, this._slant = !1, this._heuristic = this.euclidian
        }
        findPath(t) {
            return this._grid = t, this._open = [], this._closed = [], this._startNode = this._grid.startNode, this._endNode = this._grid.endNode, this._startNode.g = 0, this._startNode.h = this._heuristic(this._startNode), this._startNode.f = this._startNode.g + this._startNode.h, this.search()
        }
        search() {
            for (var t = this._startNode; t != this._endNode;) {
                for (var e = Math.max(0, t.x - 1), i = Math.min(this._grid.numCols - 1, t.x + 1), s = Math.max(0, t.y - 1), _ = Math.min(this._grid.numRows - 1, t.y + 1), n = e; n <= i; n++)
                    for (var a = s; a <= _; a++)
                        if (this._slant || n == t.x || a == t.y) {
                            var l = this._grid.getNode(n, a);
                            if (l != t && l.walkable && this._grid.getNode(t.x, l.y).walkable && this._grid.getNode(l.x, t.y).walkable) {
                                var h = this._straightCost;
                                t.x != l.x && t.y != l.y && (h = this._diagCost);
                                var o = t.g + h * l.costMultiplier,
                                    r = this._heuristic(l),
                                    d = o + r;
                                this.isOpen(l) || this.isClosed(l) ? l.f > d && (l.f = d, l.g = o, l.h = r, l.parent = t) : (l.f = d, l.g = o, l.h = r, l.parent = t, this._open.push(l))
                            }
                        }
                if (this._closed.push(t), 0 == this._open.length) return console.log("AStar >> no path found", n), !1;
                let c = this._open.length;
                for (let t = 0; t < c; t++)
                    for (let e = t + 1; e < c; e++)
                        if (this._open[t].f > this._open[e].f) {
                            let i = this._open[t];
                            this._open[t] = this._open[e], this._open[e] = i
                        }
                t = this._open.shift()
            }
            return this.buildPath(), !0
        }
        buildPath() {
            this._path = new Array;
            var t = this._endNode;
            for (this._path.push(t); t != this._startNode;) t = t.parent, this._path.unshift(t)
        }
        get path() {
            return this._path
        }
        isOpen(t) {
            for (var e = 0; e < this._open.length; e++)
                if (this._open[e] == t) return !0;
            return !1
        }
        isClosed(t) {
            for (var e = 0; e < this._closed.length; e++)
                if (this._closed[e] == t) return !0;
            return !1
        }
        manhattan(t) {
            return Math.abs(t.x - this._endNode.x) * this._straightCost + Math.abs(t.y + this._endNode.y) * this._straightCost
        }
        euclidian(t) {
            var e = t.x - this._endNode.x,
                i = t.y - this._endNode.y;
            return Math.sqrt(e * e + i * i) * this._straightCost
        }
        diagonal(t) {
            var e = Math.abs(t.x - this._endNode.x),
                i = Math.abs(t.y - this._endNode.y),
                s = Math.min(e, i),
                _ = e + i;
            return this._diagCost * s + this._straightCost * (_ - 2 * s)
        }
        get visited() {
            return this._closed.concat(this._open)
        }
        set slant(t) {
            this._slant = t
        }
    }
    class X {
        constructor(t, e) {
            this.walkable = !0, this.dynWalkable = !0, this.costMultiplier = 1, this.x = t, this.y = e
        }
    }
    class j {
        constructor(t, e) {
            this._numCols = t, this._numRows = e, this._nodes = [];
            for (let i = 0; i < t; i++) {
                this._nodes[i] = [];
                for (let t = 0; t < e; t++) this._nodes[i][t] = new X(i, t)
            }
        }
        set mapData(t) {
            this._mapData = t
        }
        getNode(t, e) {
            return t < 0 || t >= this.numCols || e < 0 || e >= this.numRows ? null : this._nodes[t][e]
        }
        setEndNode(t, e) {
            if (this._endNode = this.getNode(t, e), null == this._endNode) return !0;
            if (!this._endNode.walkable) {
                let i = [],
                    s = this.getNode(t - 1, e),
                    _ = this.getNode(t + 1, e),
                    n = this.getNode(t, e - 1),
                    a = this.getNode(t, e + 1);
                if (null != s && s.walkable && i.push(s), null != _ && _.walkable && i.push(_), null != n && n.walkable && i.push(n), null != a && a.walkable && i.push(a), i.length > 0) {
                    let t = i[Math.floor(Math.random() * i.length)];
                    this._endNode = t
                }
            }
            return !1
        }
        setStartNode(t, e) {
            this._startNode = this._nodes[t][e]
        }
        setWalkable(t, e, i) {
            this._nodes[t][e].walkable = i
        }
        setDynWalkable(t, e, i) {
            this._nodes[t][e].dynWalkable = i
        }
        get endNode() {
            return this._endNode
        }
        get numCols() {
            return this._numCols
        }
        get numRows() {
            return this._numRows
        }
        get startNode() {
            return this._startNode
        }
        SetAllWalkable() {
            for (let t = 0; t < this.numCols; t++)
                for (let e = 0; e < this._numRows; e++) this.setWalkable(t, e, this._mapData.IsWalkable(t, e)), this.setDynWalkable(t, e, this._mapData.IsWalkable(t, e))
        }
    }
    class z {
        constructor() {
            this._mapW = 90, this._showDataCoordinate = {
                startX: -1,
                endX: -1,
                startY: -1,
                endY: -1
            }, this._resShowMap = !1, this._screen = Laya.stage.getChildAt(0).getChildAt(0), this._sceneWidth = Laya.stage.width, this._sceneHeight = Laya.stage.height, this._screen.width = this._sceneWidth, this._screen.height = this._sceneHeight, this._showCols = Math.floor((this._sceneHeight + 180) / this._mapW), this._showRows = Math.floor((this._sceneWidth + 180) / this._mapW), this._images = new Array, this._showArea = new Array, this._blackArr = new Array, this._panelMap = new Laya.Sprite, this._landMap = new Laya.Sprite, this._inMap = new Laya.Sprite, this._activityMap = new Laya.Sprite, this._panelMap.addChild(this._landMap), this._panelMap.addChild(this._inMap), this._panelMap.addChild(this._activityMap), this._screen.addChild(this._panelMap)
        }
        AddEvent() {
            r.instance.AddListEvent(r.instance.CLICK_MAP, this.BlockClickEvent, this), r.instance.AddListEvent(r.instance.SET_POS_MENU, this.SetBuildMenuPos, this), r.instance.AddListEvent(r.instance.MAP_BUILD_NEW, this.NewBuild, this), r.instance.AddListEvent(r.instance.MAP_UPBUILD, this.BuildUp, this), r.instance.AddListEvent(r.instance.MAP_BUILD_DISMANTLE, this.BuildDismantle, this), r.instance.AddListEvent(r.instance.MAP_ADD_ACTIVITY, this.AddAtivity, this), r.instance.AddListEvent(r.instance.MAP_MAPMOVE, this.MoveMap, this), r.instance.AddListEvent(r.instance.MAP_DISTANCE, this.ReturnDistance, this), r.instance.AddListEvent(r.instance.MAP_GET_ACTIVITYMAP, this.GetActivityMap, this), r.instance.AddListEvent(r.instance.MAP_DEMOLISH, this.Demolish, this)
        }
        SetMapData(t) {
            this._mapData = t, this.readMapCR(), this.Init()
        }
        Init() {
            this._landMap.width = this._numRows * this._mapW, this._landMap.height = this._numCols * this._mapW, this._inMap.width = this._numRows * this._mapW, this._inMap.height = this._numCols * this._mapW, this._activityMap.width = this._numRows * this._mapW, this._activityMap.height = this._numCols * this._mapW, this._panelMap.width = this._numRows * this._mapW, this._panelMap.height = this._numCols * this._mapW, this._landMap.pos(0, 0), this._inMap.pos(0, 0)
        }
        readMapCR() {
            let t = this._mapData.GetMapColsOrRows();
            this._numCols = t[0], this._numRows = t[1]
        }
        get numCols() {
            return this._numCols
        }
        get numRows() {
            return this._numRows
        }
        GetImage() {
            var t;
            return this._images.length > 0 && (t = this._images.shift()), null == t && (t = this.CreateImage()), t.visible = !0, t.width = 90, t.height = 90, t.pivot(45, 45), t.rotation = 0, t.name = "", t
        }
        CreateImage() {
            return new Laya.Image
        }
        ClearMap() {
            for (let t = this._landMap.numChildren - 1; t >= 0; t--) {
                let e = this._landMap.getChildAt(t);
                e.visible = !1, this._images.push(e), this._landMap.removeChild(e)
            }
        }
        Demolish(t, e) {
            null != t && (this._images.push(t), t.visible = !1, this._inMap.removeChild(t)), null != e && (this._images.push(e), e.visible = !1)
        }
        get panelMap() {
            return this._panelMap
        }
        SetShowPoint(t, e, i, s) {
            this._showX = t, this._showY = e, this._posX = i, this._posY = s, this.CalculationShowRangeX(), this.CalculationShowRangeY()
        }
        ShowPoint() {
            for (let e = this._showDataCoordinate.startX; e < this._showDataCoordinate.endX + 1; e++) {
                var t = [];
                for (let i = this._showDataCoordinate.startY; i < this._showDataCoordinate.endY + 1; i++) t.push(this.ShowLandImag(e, i));
                this._showArea.push(t)
            }
            this.MoveMapReachPos(this._posX, this._posY, this._showX, this._showY), this.BuildIn()
        }
        MoveMapReachPos(t, e, i, s) {
            var _ = this.ScreenPosTMapPos(t, e),
                n = this.DataPosTMapPos(i, s),
                a = [_.x - n.x, _.y - n.y];
            this._panelMap.x += a[0], this._panelMap.y += a[1]
        }
        ShowLandImag(t, e) {
            let i = this._mapData.readMap(t, e),
                s = 90 * e + 45,
                _ = 90 * t + 45,
                n = this.GetImage();
            return this._landMap.addChild(n), n.pos(s, _), n.rotation = 90 * i.landRot, this.SetMapSkin(n, null, i.landBlock, null), n.name = t + "_" + e, n
        }
        ShowInImag(t, e) {
            let i = this._mapData.readMap(t, e),
                s = 90 * e + 45,
                _ = 90 * t + 45,
                n = this.GetImage();
            return this._inMap.addChild(n), n.pos(s, _), n.rotation = 90 * i.inRot, this.SetMapSkin(null, n, null, i.inBlock), n
        }
        SetMapSkin(t, e, i, s) {
            var _ = this._mapData.GetImageSkin(i, s);
            null != t && (t.skin = "map/" + _.landSkin + ".png", t.name = _.landSkin), null != e && this.SkinSelect(e, _.inSkin)
        }
        SkinSelect(t, e) {
            var i = e.split("_")[0];
            if (t.name = e, "at" == i) {
                let i;
                t.skin = "Atower/" + e + ".png", t.numChildren > 0 ? i = t.getChildAt(0) : (i = this.GetImage(), t.addChild(i), i.pos(45, 45)), i.skin = "Atower/" + e + "_B.png"
            } else t.skin = "build/" + e + ".png"
        }
        CalculationShowRangeY() {
            var t, e, i = this._posX,
                s = this._sceneWidth - i + 45,
                _ = i + 45,
                n = Math.floor(s / 90),
                a = Math.floor(_ / 90);
            t = this._showY - a, e = this._showY + n, t = Math.max(0, t), e = Math.min(e, this._numRows), this._showDataCoordinate.startY = t, this._showDataCoordinate.endY = e
        }
        CalculationShowRangeX() {
            var t, e, i = this._posY,
                s = this._sceneHeight - i + 45,
                _ = i + 45,
                n = Math.floor(s / 90),
                a = Math.floor(_ / 90);
            t = this._showX - a, e = this._showX + n, t = Math.max(0, t), e = Math.min(e, this._numCols), this._showDataCoordinate.startX = t, this._showDataCoordinate.endX = e
        }
        BlockClickEvent(t, e, i) {
            var s = this.ScreenPosTMapPos(t, e),
                _ = this.MapPosTDataPos(s.x, s.y),
                n = this._mapData.RoomFindBlock(_.x, _.y); - 1 != n.roomIndex ? r.instance.Fire(r.instance.CLICK_BUILD, _.x, _.y, n.inSkin, n.roomIndex) : r.instance.Fire(r.instance.HIDE_MENU)
        }
        ScreenPosTMapPos(t, e) {
            return {
                x: t - this._panelMap.x,
                y: e - this._panelMap.y
            }
        }
        MapPosTScreenPos(t, e) {
            return {
                x: t + this._panelMap.x,
                y: e + this._panelMap.y
            }
        }
        MapPosTDataPos(t, e) {
            return {
                x: Math.floor(e / this._mapW),
                y: Math.floor(t / this._mapW)
            }
        }
        DataPosTMapPos(t, e) {
            return {
                x: e * this._mapW + 45,
                y: t * this._mapW + 45
            }
        }
        MoveMap(t, e) {
            0 == t && 0 == e || (t > 0 ? this._panelMap.x < -80 ? this._panelMap.x += t : t = 0 : this._panelMap.x > -(this._panelMap.width - this._sceneWidth - 80) ? this._panelMap.x += t : t = 0, e > 0 ? this._panelMap.y < -80 ? this._panelMap.y += e : e = 0 : this._panelMap.y > -(this._panelMap.height - this._sceneHeight - 80) ? this._panelMap.y += e : e = 0, 0 == t && 0 == e || this.VisibleCoordinateTraversal())
        }
        VisibleCoordinateTraversal() {
            if (!this._resShowMap) {
                var t = this.DataPosTMapPos(this._showDataCoordinate.startX, this._showDataCoordinate.startY),
                    e = this.MapPosTScreenPos(t.x, t.y),
                    i = this.DetectionDisplayArea(e.x, e.y);
                0 == i.dataX && 0 == i.dataY || (this._resShowMap = !0, this.RecyclingResourcesOutsideTheArea(i.dataX, i.dataY), this.ShowDisplayableArea(), this.InMapOptimization())
            }
        }
        InMapOptimization() {
            if (this._inMap.numChildren > 0)
                for (let t = 0; t < this._inMap.numChildren; t++) this.ImgShowOrHide(this._inMap.getChildAt(t))
        }
        ImgShowOrHide(t) {
            let e = t.name.split("_")[0];
            this.IsScreenRange(t.x, t.y) ? t.visible = !0 : "bed" != e && "mine" != e || (t.visible = !1)
        }
        IsScreenRange(t, e) {
            let i = this.MapPosTDataPos(t, e);
            return i.x >= this._showDataCoordinate.startX && i.x <= this._showDataCoordinate.endX && i.y >= this._showDataCoordinate.startY && i.y <= this._showDataCoordinate.endY
        }
        DetectionDisplayArea(t, e) {
            var i = 0,
                s = 0;
            return t > 40 ? i = -1 : t < -80 && (i = 1), e > 40 ? s = -1 : e < -80 && (s = 1), {
                dataX: s,
                dataY: i
            }
        }
        RecyclingResourcesOutsideTheArea(t, e) {
            var i = null;
            if (t > 0 ? (i = this._showArea.shift(), this._showArea.push(i)) : t < 0 && (i = this._showArea.pop(), this._showArea.unshift(i)), null != i)
                for (let t = 0; t < i.length; t++) {
                    var s = i[t];
                    this._images.push(s), i[t] = null
                }
            if (e > 0)
                for (let t = 0; t < this._showArea.length; t++)
                    for (let e = 0; e < this._showArea[t].length; e++) {
                        if (null == (s = this._showArea[t][e])) break;
                        0 == e ? this._images.push(s) : (this._showArea[t][e - 1] = s, e == this._showArea[t].length - 1 && (this._showArea[t][e] = null))
                    } else if (e < 0)
                        for (let t = 0; t < this._showArea.length; t++)
                            for (let e = this._showArea[t].length - 1; e >= 0; e--) {
                                if (null == (s = this._showArea[t][e])) break;
                                e == this._showArea[t].length - 1 ? this._images.push(s) : (this._showArea[t][e + 1] = s, 0 == e && (this._showArea[t][e] = null))
                            }
            this._showDataCoordinate.startX += t, this._showDataCoordinate.endX += t, this._showDataCoordinate.startY += e, this._showDataCoordinate.endY += e
        }
        ShowDisplayableArea() {
            for (let e = this._showDataCoordinate.startX; e < this._showDataCoordinate.endX + 1; e++)
                for (let i = this._showDataCoordinate.startY; i < this._showDataCoordinate.endY + 1; i++) {
                    var t = this._showArea[e - this._showDataCoordinate.startX][i - this._showDataCoordinate.startY];
                    null == t && (t = this.ShowLandImag(e, i), this._showArea[e - this._showDataCoordinate.startX][i - this._showDataCoordinate.startY] = t)
                }
            this._resShowMap = !1
        }
        BuildIn() {
            var t = this._mapData.build;
            if (!(t.length <= 0)) {
                var e = new Array;
                for (let i = 0; i < t.length; i++) {
                    let s = t[i],
                        _ = this._mapData.BlockFindRoom(s.x, s.y);
                    e.push({
                        pos: s.x + "_" + s.y,
                        build: this.ShowInImag(s.x, s.y),
                        roomIndex: _
                    })
                }
                r.instance.Fire(r.instance.COLLECTIVE_BUILD, e)
            }
        }
        NewBuild(t, e, i) {
            this._mapData.SetMap(t, e, i);
            let s = this.ShowInImag(t, e),
                _ = this._mapData.BlockFindRoom(t, e);
            r.instance.Fire(r.instance.BUILD_NEW, t + "_" + e, s, _), d.instance.AddEffect(d.instance.effectStr.buildDownEffect, s.x, s.y), this.ImgShowOrHide(s)
        }
        BuildUp(t, e) {
            this.SkinSelect(t, e)
        }
        BuildDismantle(t, e, i) {
            if (null != t && (this._inMap.removeChild(t), t.visible = !1, t.numChildren > 0))
                for (let e = t.numChildren - 1; e >= 0; e--) {
                    let i = t.getChildAt(e);
                    i.visible = !1, t.removeChild(i), this._images.push(i)
                }
            let s = this.MapPosTDataPos(e, i);
            this._mapData.SetMap(s.x, s.y, "")
        }
        SetBuildMenuPos(t, e, i) {
            let s = this.DataPosTMapPos(t, e),
                _ = this.MapPosTScreenPos(s.x, s.y);
            i.pos(_.x, _.y), r.instance.Fire(r.instance.SHOW_MENU)
        }
        ReturnDistance(t, e) {
            let i = t.x,
                s = t.y,
                _ = Math.abs(i - e.x),
                n = Math.abs(s - e.y);
            return _ * _ + n * n
        }
        AddAtivity(t, e, i) {
            this._activityMap.addChild(t);
            let s = this.DataPosTMapPos(e, i);
            t.pos(s.x, s.y)
        }
        GetActivityMap() {
            return this._activityMap
        }
        GetPathMapPos(t) {
            if (!t) return null;
            let e = [];
            for (let i = 1; i < t.length; i++) {
                let s = t[i],
                    _ = this.DataPosTMapPos(s.x, s.y);
                e.push([_.x, _.y])
            }
            return e
        }
        GameOver() {
            this._showArea.length = 0, this._showDataCoordinate = {
                startX: -1,
                startY: -1,
                endX: -1,
                endY: -1
            }, this.ClearMap(), this.SelfTest(), this.ClearRoomblack()
        }
        SelfTest() {
            if (this._images.length > 0)
                for (let t = this._images.length - 1; t >= 0; t--) {
                    let e = this._images[t];
                    for (let i = t - 1; i >= 0; i--) {
                        e == this._images[i] && this._images.splice(i, 1)
                    }
                }
        }
        RoomBlack(t) {
            if (t.length > 0)
                for (let e = 0; e < t.length; e++) {
                    let i = t[e],
                        s = this.GetImage();
                    this._activityMap.addChild(s), s.pos(i.x, i.y), s.skin = "UI/zhezhao.png", s.alpha = 0, this._blackArr.push(s), p.instance.Alpha(s, 1, 1)
                }
        }
        ClearRoomblack() {
            if (this._blackArr.length > 0) {
                for (let t = 0; t < this._blackArr.length; t++) {
                    let e = this._blackArr[t];
                    e.removeSelf(), e.visible = !1, this._images.push(e)
                }
                this._blackArr = []
            }
        }
        get MapPanelMaxPos() {
            return {
                x: this._panelMap.width - 80,
                y: this._panelMap.height - 80
            }
        }
    }
    class q {
        constructor() {
            this._index = null, this._maps = {
                map0: [
                    ["9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "6_3_0_0", "0_0_0_0", "6_3_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "2_0_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "0_0_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "3_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "2_0_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "3_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "2_0_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "3_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "2_0_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "3_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "2_0_0_0", "5_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_1_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_1_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "3_2_0_0", "6_1_0_0", "6_1_0_0", "2_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_2_3", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "2_0_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "3_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "3_2_0_0", "6_1_0_0", "1_0_2_0", "6_1_0_0", "6_1_0_0", "2_2_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_1_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "3_2_0_0", "6_1_0_0", "1_0_2_0", "6_1_0_0", "2_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "3_2_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "2_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "2_0_0_0", "6_3_0_0", "6_3_0_0", "3_0_0_0", "0_0_0_0", "2_0_0_0", "6_3_0_0", "6_3_0_0", "3_0_0_0", "0_0_0_0", "0_0_0_0", "2_0_0_0", "6_3_0_0", "1_0_2_2", "6_3_0_0", "3_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "2_0_0_0", "6_3_0_0", "6_3_0_0", "3_0_0_0", "2_0_0_0", "6_3_0_0", "3_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "4_2_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "3_2_0_0", "3_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_1_0", "3_2_0_0", "2_2_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "3_2_0_0", "1_0_2_2", "2_2_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "2_0_0_0", "3_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_1_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_1_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "3_2_0_0", "7_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "5_0_0_0", "2_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "3_2_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "2_2_0_0", "0_0_0_0", "3_2_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "2_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "3_2_0_0", "1_0_2_0", "6_1_0_0", "6_1_0_0", "2_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "4_0_0_0", "4_0_0_0"],
                    ["4_2_0_0", "4_2_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0"],
                    ["4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "4_0_0_0", "4_0_0_0"],
                    ["4_2_0_0", "4_2_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "2_0_0_0", "6_3_0_0", "1_0_2_2", "6_3_0_0", "3_0_0_0", "0_0_0_0", "2_0_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "3_0_0_0", "0_0_0_0", "0_0_0_0", "2_0_0_0", "1_0_2_2", "3_0_0_0", "2_0_0_0", "6_3_0_0", "6_3_0_0", "3_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "2_0_0_0", "6_3_0_0", "5_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "4_0_0_0", "4_2_0_0", "1_0_1_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "1_0_2_1", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "4_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_1_0", "4_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "4_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_1_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "4_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "3_2_0_0", "6_1_0_0", "6_1_0_0", "7_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "3_2_0_0", "6_1_0_0", "7_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "3_2_0_0", "2_2_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "3_2_0_0", "6_1_0_0", "6_1_0_0", "2_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "5_0_0_0", "2_2_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "3_2_0_0", "6_1_0_0", "6_1_0_0", "2_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "3_2_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "2_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "2_0_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "3_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "2_0_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "6_3_0_0", "3_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "2_0_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "1_0_2_2", "3_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_1_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_1_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "3_2_0_0", "7_0_0_0", "1_0_0_0", "1_0_0_0", "2_0_0_0", "2_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "3_2_0_0", "3_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_1_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "3_2_0_0", "3_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "2_0_0_0", "2_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_2_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "1_0_0_0", "4_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "3_2_0_0", "6_1_0_0", "1_0_2_0", "6_1_0_0", "6_1_0_0", "2_2_0_0", "0_0_0_0", "0_0_0_0", "3_2_0_0", "6_1_0_0", "1_0_2_0", "6_1_0_0", "2_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "3_2_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "2_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "4_2_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "0_0_0_0", "4_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "3_2_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "0_0_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "2_2_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "6_1_0_0", "0_0_0_0", "6_1_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0"],
                    ["9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "6_1_0_0", "6_1_0_0", "6_1_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0", "9_0_0_0"]
                ]
            }, this._gameMapData = new Array, this._rooms = new Array, this._build = new Array, this._landSkin = ["floor_1", "floor_2", "wall_1", "wall_2", "wall_3", "wall_4", "wall_5", "wall_6", "empty_1", "HSZZ0_1"], this._inSkin = ["", "bed_1", "door_1", "repair_1", "game_1", "at_1", "ice_1", "barb_1", "particlea_1", "spell_1", "entrapment_1", "guillotine_1", "energyhood_1", "smoney_1", "longrange_1", "solenoid_1", "mine_1", "mine_2", "mine_3", "mine_4"]
        }
        SelectMap(t) {
            return this._index = t, this._map = this._maps["map" + t], null == this._map ? (this._index = null, !1) : (this.MapConversion(), !0)
        }
        IsWalkable(t, e) {
            let i = this.readMap(t, e);
            return "floor" == this._landSkin[i.landBlock].split("_")[0]
        }
        GetMapColsOrRows() {
            return null != this._index ? (this._numClos = this._map.length, this._numRows = this._map[0].length, [this._numClos, this._numRows]) : null
        }
        readMap(t, e) {
            return this._gameMapData[t][e]
        }
        SetMap(t, e, i) {
            if (0 == i.length) this.readMap(t, e).inBlock = 0;
            else
                for (let s = 0; s < this._inSkin.length; s++)
                    if (i == this._inSkin[s]) return void(this.readMap(t, e).inBlock = s)
        }
        GetImageSkin(t, e) {
            var i = this._landSkin[t],
                s = this._inSkin[e];
            return null == i && (i = ""), null == s && (s = ""), {
                landSkin: i,
                inSkin: s
            }
        }
        MapConversion() {
            for (let e = 0; e < this._map.length; e++) {
                var t = new Array;
                for (let i = 0; i < this._map[e].length; i++) {
                    let s = this._map[e][i].split("_"),
                        _ = {
                            landBlock: parseInt(s[0]),
                            landRot: parseInt(s[1]),
                            inBlock: parseInt(s[2]),
                            inRot: parseInt(s[3])
                        };
                    t.push(_);
                    let n = this._inSkin[_.inBlock].split("_")[0];
                    "bed" == n && this._rooms.push({
                        pos: e + "_" + i,
                        door: "",
                        room: []
                    }), "" != n && this._build.push({
                        x: e,
                        y: i
                    })
                }
                this._gameMapData.push(t)
            }
            this.SearchRooms()
        }
        SearchRooms() {
            for (let e = 0; e < this._rooms.length; e++) {
                var t = [];
                let i = this._rooms[e],
                    s = i.pos.split("_");
                this.SearchRoom(parseInt(s[0]), parseInt(s[1]), t, []), i.room = t, i.door = t[0]
            }
        }
        SearchRoom(t, e, i, s) {
            var _ = t + "_" + e;
            if (this.SearchArray(_, i) || this.SearchArray(_, s)) return;
            let n = this.readMap(t, e),
                a = this._landSkin[n.landBlock].split("_")[0],
                l = this._inSkin[n.inBlock].split("_")[0];
            "floor" == a ? "door" != l ? (i.push(_), this.SearchRoom(t + 1, e, i, s), this.SearchRoom(t - 1, e, i, s), this.SearchRoom(t, e + 1, i, s), this.SearchRoom(t, e - 1, i, s)) : i.unshift(_) : s.push(_)
        }
        SearchArray(t, e) {
            if (0 != e.length)
                for (let i = 0; i < e.length; i++)
                    if (t == e[i]) return !0;
            return !1
        }
        RoomFindBlock(t, e) {
            let i = this.readMap(t, e),
                s = this._landSkin[i.landBlock].split("_")[0],
                _ = this._inSkin[i.inBlock].split("_")[0];
            return "floor" != s ? {
                inSkin: _,
                roomIndex: -1
            } : {
                inSkin: _,
                roomIndex: this.BlockFindRoom(t, e)
            }
        }
        BlockFindRoom(t, e) {
            let i = this.readMap(t, e);
            if ("floor" != this._landSkin[i.landBlock].split("_")[0]) return -1;
            for (let i = 0; i < this._rooms.length; i++) {
                let s = this._rooms[i],
                    _ = t + "_" + e;
                if (this.BlockIsRoom(s.room, _)) return i
            }
            return -1
        }
        BlockIsRoom(t, e) {
            for (let i = 0; i < t.length; i++)
                if (t[i] == e) return !0;
            return !1
        }
        get build() {
            return this._build
        }
        GetDoorFloor(t) {
            let e = this._rooms[t],
                i = e.door.split("_"),
                s = this.readMap(parseInt(i[0]), parseInt(i[1]) + 1),
                _ = this.readMap(parseInt(i[0]) + 1, parseInt(i[1])),
                n = this.readMap(parseInt(i[0]), parseInt(i[1]) - 1),
                a = this.readMap(parseInt(i[0]) - 1, parseInt(i[1]));
            return this.DoorAroundBlock(s, e.room, parseInt(i[0]) + "_" + (parseInt(i[1]) + 1)) ? [parseInt(i[0]), parseInt(i[1]) + 1] : this.DoorAroundBlock(_, e.room, parseInt(i[0]) + 1 + "_" + parseInt(i[1])) ? [parseInt(i[0]) + 1, parseInt(i[1])] : this.DoorAroundBlock(n, e.room, parseInt(i[0]) + "_" + (parseInt(i[1]) - 1)) ? [parseInt(i[0]), parseInt(i[1]) - 1] : this.DoorAroundBlock(a, e.room, parseInt(i[0]) - 1 + "_" + parseInt(i[1])) ? [parseInt(i[0]) - 1, parseInt(i[1])] : void 0
        }
        DoorAroundBlock(t, e, i) {
            return (0 == t.landBlock || 0 != t.inBlock) && !this.BlockIsRoom(e, i)
        }
        GetAroundBuild(t, e, i) {
            let s = 90 * i;
            s *= s;
            let _ = [];
            return this.AroundBuild(t, e, _, [], s), _
        }
        AroundBuild(t, e, i, s, _) {
            if (this.SearchArrayAround(t, e, i) || this.SearchArrayAround(t, e, s)) return;
            t * t + e * e > _ ? s.push([t, e]) : this.PosIsBuild(t, e) ? (i.push([t, e]), this.AroundBuild(t, e + 1, i, s, _), this.AroundBuild(t, e - 1, i, s, _), this.AroundBuild(t + 1, e, i, s, _), this.AroundBuild(t - 1, e, i, s, _)) : s.push([t, e])
        }
        SearchArrayAround(t, e, i) {
            if (i.length > 0)
                for (let s = 0; s < i.length; s++) {
                    let _ = i[s];
                    if (_[0] == t && _[1] == e) return !0
                }
            return !1
        }
        PosIsBuild(t, e) {
            return 0 != this.readMap(t, e).inBlock
        }
        GetRoomCount() {
            return this._rooms.length
        }
        GetOpenSpace(t, e) {
            let i = this._rooms[t],
                s = [];
            for (let t = 0; t < i.room.length; t++) {
                let e = i.room[t].split("_"),
                    _ = parseInt(e[0]),
                    n = parseInt(e[1]);
                0 == this.readMap(_, n).inBlock && s.push({
                    x: _,
                    y: n
                })
            }
            if (0 == s.length) return null; {
                let i = null;
                if (e) {
                    let e = this._rooms[t].door.split("_"),
                        _ = {
                            x: parseInt(e[0]),
                            y: parseInt(e[1])
                        };
                    i = s[0];
                    for (let t = 1; t < s.length; t++) {
                        let e = s[t],
                            n = Math.abs(i.x - _.x),
                            a = Math.abs(i.y - _.y),
                            l = Math.abs(e.x - _.x),
                            h = Math.abs(e.y - _.y);
                        n * n + a * a > l * l + h * h && (i = e)
                    }
                } else {
                    i = s[Math.floor(Math.random() * s.length)]
                }
                return i
            }
        }
        FindPlayerAround(t, e) {
            let i = Math.max(t - 1, 0),
                s = Math.max(e - 1, 0),
                _ = Math.min(t + 1, this._numClos),
                n = Math.min(e + 1, this._numRows),
                a = [];
            for (let t = i; t <= _; t++)
                for (let e = s; e <= n; e++) {
                    let i = this.FindPlayerAroundDoorOrBed(t, e);
                    null != i && a.push(i)
                }
            if (0 == a.length) return null;
            if (1 == a.length) return a[0]; {
                let i = a[0];
                for (let s = 1; s < a.length; s++) {
                    let _ = a[s];
                    this.Distance(i.x, i.y, t, e) > this.Distance(_.x, _.y, t, e) && (i = _)
                }
                return i
            }
        }
        Distance(t, e, i, s) {
            let _ = t - i,
                n = e - s;
            return _ * _ + n * n
        }
        FindPlayerAroundDoorOrBed(t, e) {
            let i = this.readMap(t, e),
                s = this._inSkin[i.inBlock].split("_")[0];
            return "door" == s ? {
                build: "door",
                x: t,
                y: e
            } : "bed" == s ? {
                build: "bed",
                x: t,
                y: e
            } : null
        }
        GetRoom(t) {
            return this._rooms[t]
        }
        GameOver() {
            this._gameMapData = new Array, this._rooms = new Array, this._build = new Array, this._index = null, this._map = void 0
        }
        GetPosAroundBuild(t, e, i, s) {
            let _ = new Array,
                n = Math.max(0, t - s),
                a = Math.max(0, e - s),
                l = Math.min(this._numClos, t + s),
                h = Math.min(this._numRows, e + s);
            for (let t = n; t < l; t++)
                for (let e = a; e < h; e++) {
                    let s = this.readMap(t, e);
                    if (this._inSkin[s.inBlock].split("_")[0] == i) {
                        let i = t + "_" + e;
                        _.push(i)
                    }
                }
            return _
        }
    }
    class Z {
        AddUpEvent() {
            c.instance.AddTimeLoopEvent("UpTask", this.UpTask, this, .1)
        }
        RemoveUpEvent() {
            c.instance.RemoveListLoopEvent("UpTask")
        }
        UpTask() {
            this._player && this._player.bed && this.taskFunc && this.taskFunc()
        }
        Task1() {
            null != this._player.bed && (this.room = this._player.bed.room, this.TaskCompelet())
        }
        Task2() {
            this._player.bed.level >= 2 && this.TaskCompelet()
        }
        Task3() {
            this.room.door.level >= 2 && this.TaskCompelet()
        }
        Task4() {
            this.room.bed.level >= 3 && this.TaskCompelet()
        }
        Task5() {
            this.room.bed.level >= 4 && this.TaskCompelet()
        }
        Task6() {
            r.instance.FireReturn(r.instance.BUILD_GET_AT_BUILDCOUNT, this._player.roomIndex) > 1 && this.TaskCompelet()
        }
        Task7() {
            this.room.bed.level >= 5 && this.TaskCompelet()
        }
        Task8() {
            r.instance.FireReturn(r.instance.BUILD_GET_GAME_BUILDCOUNT, this._player.roomIndex) > 1 && this.TaskCompelet()
        }
        Task9() {
            this.room.bed.level >= 7 && this.TaskCompelet()
        }
        Task10() {
            r.instance.FireReturn(r.instance.BUILD_REACHC, "at_5", this._player.roomIndex) && this.TaskCompelet()
        }
        Task11() {
            r.instance.FireReturn(r.instance.BUILD_REACHC, "mine_1", this._player.roomIndex) && this.TaskCompelet()
        }
        set task(t) {
            switch (t) {
                case 0:
                    this.taskFunc = this.Task1;
                    break;
                case 1:
                    this.taskFunc = this.Task2;
                    break;
                case 2:
                    this.taskFunc = this.Task3;
                    break;
                case 3:
                    this.taskFunc = this.Task4;
                    break;
                case 4:
                    this.taskFunc = this.Task5;
                    break;
                case 5:
                    this.taskFunc = this.Task6;
                    break;
                case 6:
                    this.taskFunc = this.Task7;
                    break;
                case 7:
                    this.taskFunc = this.Task8;
                    break;
                case 8:
                    this.taskFunc = this.Task9;
                    break;
                case 9:
                    this.taskFunc = this.Task10;
                    break;
                case 10:
                    this.taskFunc = this.Task11;
                    break;
                default:
                    this.taskFunc = null
            }
        }
        TaskCompelet() {
            r.instance.Fire(r.instance.BATTLEUI_TASKCOMPLETE), this.taskFunc = null
        }
        set player(t) {
            console.log(t)
            this._player = t
        }
    }
    class Q {
        constructor() {
            this._zOrder = 0
        }
        LoadPanel(t = !1) {
            let e = Laya.loader.getRes(this._path);
            this.panel = new Laya.View, this.panel.createView(e), t && this.scene.addChild(this.panel), this.panel.zOrder = this._zOrder, this.ReadUIInfo()
        }
        Init() {}
        ReadUIInfo() {}
        set path(t) {
            this._path = t
        }
        get path_Str() {
            return this._path
        }
        set zOrder(t) {
            this._zOrder = t
        }
        get scene() {
            return null == Q.scene && (Q.scene = Laya.stage.getChildAt(0).getChildAt(0)), Q.scene
        }
        AddUpData() {}
        Show(...t) {
            this.scene.addChild(this.panel), this._Show(...t)
        }
        Hide(...t) {
            this.scene.removeChild(this.panel), this._Hide(...t)
        }
        _Show(...t) {}
        _Hide(...t) {}
    }
    Q.strArr = {
        battleUI: "battleUI",
        startGameUI: "startGameUI",
        gameOverUI: "gameOverUI",
        macthingUI: "macthingUI",
        skillUI: "skillUI",
        shopUI: "shopUI",
        treasureChestUI: "treasureChestUI",
        tipsUI: "tipsUI"
    };
    class J extends Q {
        constructor() {
            super(), this.timernum = 30, this.taskIndex = 0, this.path = "Prefabs/BattleUI.json", this.zOrder = 3
        }
        ReadUIInfo() {
            this.gold1 = this.panel.getChildByName("Gold1"), this.gold2 = this.panel.getChildByName("Gold2"), this.gold3 = this.panel.getChildByName("Gold3"), this.timepanel = this.panel.getChildByName("timePanel"), this.timer = this.timepanel.getChildByName("timer"), this.head = this.panel.getChildByName("head"), this.backBtn = this.panel.getChildByName("back"), this.backPanel = this.panel.getChildByName("BattleBackUI"), this.cGame = this.backPanel.getChildByName("cGame"), this.rGame = this.backPanel.getChildByName("rGame"), this.backPanel.width = this.scene.width, this.backPanel.height = this.scene.height, this.backPanel.visible = !1, this.backBtn.on(Laya.Event.CLICK, this, this.BackBtnClickEvent), this.cGame.on(Laya.Event.CLICK, this, this.CGameClickEvent), this.rGame.on(Laya.Event.CLICK, this, this.RGameClickEvent);
            let t = [this.cGame, this.rGame, this.backBtn];
            p.instance.AddBtnEvent(t)
        }
        Init() {
            this.gold1.text = "0", this.gold2.text = "0", this.timernum = 30, this.timer.text = this.timernum.toString(), this.timepanel.visible = !0, this.HeadInit(), this.TaskInit(), c.instance.AddTimeLoopEvent("StartTimer", this.StartTimer, this, 1)
        }
        UpGold() {
            let t = y.instance.player.roomIndex,
                e = h.instance.game.GetRoomPR(t);
            null != e && (this.gold1.text = e.gold1.toString(), this.gold2.text = e.gold2.toString())
        }
        AddUpData() {
            c.instance.AddTimeLoopEvent("UpGpld", this.UpGold, this, .25)
        }
        StartTimer() {
            this.timernum--, this.timer.text = this.timernum.toString(), 0 == this.timernum && (c.instance.RemoveListLoopEvent("StartTimer"), r.instance.Fire(r.instance.UIGM_TIPS, "The ghost entered the dormitory"), u.instance.PlaySound(u.instance.Other_sound.ermt_0), this.timepanel.visible = !1, r.instance.Fire(r.instance.MAINLG_TROLLUPDATA)), this.timernum < 10 && u.instance.PlaySound(u.instance.Other_sound.timer)
        }
        HeadInit() {
            if (this.head.numChildren > 0) {
                let t = y.instance.head,
                    e = [];
                for (let i = 0; i < t.length; i++) {
                    let s = this.head.getChildAt(i),
                        _ = s.getChildByName("head");
                    s.getChildByName("red").alpha = 0, s.getChildByName("x").visible = !1;
                    let n = t[i];
                    _.skin = "pipei/pGame_" + n + ".png", s.on(Laya.Event.CLICK, this, this.HeadClickEvent, [i]), e.push(s)
                }
                let i = this.head.getChildAt(t.length);
                i.getChildByName("head").skin = "pipei/pGame_" + h.instance.player.playerSelectIndex + ".png", i.on(Laya.Event.CLICK, this, this.HeadClickEvent, [t.length]), e.push(i), p.instance.AddBtnEvent(e)
            }
        }
        playerHit(t) {
            if (t < 0 || t > 5) return;
            let e = this.head.getChildAt(t);
            if (e) {
                let t = e.getChildByName("x");
                t.visible = !0, t.scale(1.5, 1.5), t.alpha = 0, Laya.Tween.to(t, {
                    scaleX: 1,
                    scaleY: 1,
                    alpha: 1
                }, 300, null, null, 0, !0)
            }
        }
        playerHitEffect(t) {
            if (t < 0 || t > 5) return;
            let e = this.head.getChildAt(t);
            if (e) {
                let t = e.getChildByName("red"),
                    i = e.getChildByName("head");
                p.instance.Breathing(t, 0, 4), p.instance.ShakeHead(i, 0, 6)
            }
        }
        HeadClickEvent(t) {
            y.instance.LookPos(t)
        }
        TaskInit() {
            h.instance.player.DZCount < h.instance.cdn.cdn.taskOpenCount ? (this.taskPanel || (this.taskPanel = this.panel.getChildByName("task"), this.taskText = this.taskPanel.getChildByName("taskText"), this.taskBtn = this.taskPanel.getChildByName("taskBtn"), r.instance.AddListEvent(r.instance.BATTLEUI_TASKCOMPLETE, this.CompleteTask, this), this.taskPanel.visible = !0), this.taskIndex = 0, this.tasklg.player = y.instance.player, this.tasklg.task = this.taskIndex, this.tasklg.AddUpEvent(), this.TaskPanel()) : this.taskPanel && (this.taskPanel.visible = !1)
        }
        CompleteTask() {
            this.taskBtn.text = "Get", this.taskBtn.color = "#23af00", this.taskBtn.underlineColor = "#23af00", this.taskBtn.on(Laya.Event.CLICK, this, this.TaskBtnClickEvent)
        }
        TaskBtnClickEvent() {
            this.taskIndex++, this.TaskPanel(), this.tasklg.task = this.taskIndex
        }
        TaskPanel() {
            let t = h.instance.task.GetTaskText(this.taskIndex);
            t ? (this.taskIndex > h.instance.player.taskIndex && (h.instance.player.taskIndex++, h.instance.player.gold += 5, this.gold3.y = 225.5, p.instance.Gold3Effwct(this.gold3)), this.taskText.text = t, this.taskBtn.text = "Get", this.taskBtn.color = "#675a59", this.taskBtn.underlineColor = "#675a59", this.taskBtn.offAll()) : (this.TaskOver(), this.tasklg.RemoveUpEvent())
        }
        TaskOver() {
            this.taskPanel.visible = !1, r.instance.Fire(r.instance.UIGM_TIPS, "you to complete all tasks"), h.instance.player.taskOk = !0
        }
        get tasklg() {
            return this._tasklg && null != this._tasklg || (this._tasklg = new Z), this._tasklg
        }
        BackBtnClickEvent() {
            this.backPanel.visible = !0, this.panel.height = this.scene.height, G.instance.BoxBannerShow()
        }
        CGameClickEvent() {
            this.backPanel.visible = !1, this.panel.height = 320, G.instance.BoxBannerHied()
        }
        RGameClickEvent() {
            r.instance.Fire(r.instance.GM_GAMEOVER, null), this.CGameClickEvent()
        }
        _Show() {
            this.panel.height = 320, this.backPanel.visible = !1
        }
        _Hide() {
            this.panel.height = 320;
            let t = [];
            for (let e = 0; e < this.head.numChildren; e++) {
                let i = this.head.getChildAt(e);
                t.push(i)
            }
            p.instance.RemoveBtnEvent(t)
        }
    }
    class $ extends Q {
        constructor() {
            super(), this._timegold = 10, this._wingold = 10, this._killgold = 20, this.rewardGold = 10, this._rewardTimeMin = 210, this._rewardTimeMax = 330, this.path = "Prefabs/GameOverUI.json", this.zOrder = 10
        }
        ReadUIInfo() {
            this.panel.width = this.scene.width, this.panel.height = this.scene.height, this.bg = this.panel.getChildByName("bg"), this.bg.width = this.scene.width, this.bg.height = this.scene.height, this.redPanel = this.panel.getChildByName("red"), this.redPanel.y = (this.scene.height - this.redPanel.height) / 2, this.rewardBtn_1 = this.redPanel.getChildByName("rewardBtn_1"), this.rewardBtn_3 = this.redPanel.getChildByName("rewardBtn_3"), this._advImg = this.rewardBtn_3.getChildByName("a"), this._rtext = this.rewardBtn_3.getChildByName("t"), this.loseImg = this.redPanel.getChildByName("loseImg"), this.winImg = this.redPanel.getChildByName("winImg"), this.win = this.redPanel.getChildByName("win"), this.loser = this.redPanel.getChildByName("loser"), this.mvp = this.redPanel.getChildByName("mvp"), this.allGold = this.redPanel.getChildByName("gold"), this.gg = this.redPanel.getChildByName("gg"), this.tips = this.redPanel.getChildByName("ttt"), this.win.visible = !1, this.loser.visible = !1, this.rewardBtn_1.on(Laya.Event.CLICK, this, this.RewardBtn_1_ClickEvent), this.rewardBtn_3.on(Laya.Event.CLICK, this, this.RewardBtn_3_ClickEvent);
            let t = [this.rewardBtn_1, this.rewardBtn_3];
            p.instance.AddBtnEvent(t)
        }
        StartGame() {
            p.instance.Shake(this.rewardBtn_1, .05), Laya.timer.once(100, this, function() {
                r.instance.FireReturn(r.instance.UIGM_SHOW, Q.strArr.shopUI), r.instance.FireReturn(r.instance.UIGM_SHOW, Q.strArr.startGameUI) && this.Hide()
            })
        }
        _Show() {
            showInter();
            this.OpenTreasureChest(), this.loser.visible = !h.instance.game.isWin, this.win.visible = h.instance.game.isWin, u.instance.PlaySound(u.instance.Other_sound.game_fail), this.mvp.visible = !1, h.instance.game.isWin ? this.Win() : this.Lose(), this.Reward(), this.allGold.text = this.rewardGold.toString()
        }
        IsMVP() {
            h.instance.game.isMvp && (h.instance.player.mvp++, this.mvp.visible = !0)
        }
        _Hide() {
            this.rewardGold = 10, this.gg.visible = !1
        }
        Reward() {
            let t = [0, 0, 0],
                e = c.instance.gameTime;
            e >= this._rewardTimeMin && (t[0] = Math.floor(Math.min(e / this._rewardTimeMax, 1) * this._timegold)), h.instance.game.isWin && (t[1] = this._wingold, h.instance.game.isMvp ? t[2] = this._killgold : t[2] = this._killgold / 2);
            let i = 0;
            this.rewardGold += t[i++] + t[i++] + t[2]
        }
        RewardBtn_1_ClickEvent() {
            h.instance.player.gold += this.rewardGold, this.StartGame(), r.instance.Fire(r.instance.UIGM_TIPS, "Get X " + this.rewardGold + " Coin")
        }
        RewardBtn_3_ClickEvent() {
            let t = this;
            G.instance.ShowADV({
                success: () => {
                    h.instance.player.gold += 3 * t.rewardGold, t.StartGame(), r.instance.Fire(r.instance.UIGM_TIPS, "Get X " + 3 * t.rewardGold + " Coin")
                },
                fail: () => {
                    r.instance.Fire(r.instance.UIGM_TIPS, "请观看完整视频，获取三倍奖励")
                }
            })
        }
        OpenTreasureChest() {
            if (h.instance.player.DZCount >= h.instance.cdn.cdn.treasureChestOpenCount) {
                let t = null;
                if (h.instance.player.DZCount == h.instance.cdn.cdn.treasureChestOpenCount) t = h.instance.cdn.cdn.treasureChestArr[h.instance.cdn.cdn.treasureChestFirstShow], h.instance.cdn.tcArr = t, r.instance.Fire(r.instance.UIGM_SHOW, Q.strArr.treasureChestUI);
                else {
                    let e = h.instance.player.DZCount - h.instance.cdn.cdn.treasureChestFirstShow;
                    if (e % h.instance.cdn.cdn.treasureChestShow == 0) {
                        let i = Math.floor(e / h.instance.cdn.cdn.treasureChestShow) % h.instance.cdn.cdn.treasureChestLoopShow.length,
                            s = h.instance.cdn.cdn.treasureChestLoopShow[i];
                        t = h.instance.cdn.cdn.treasureChestArr[s], h.instance.cdn.tcArr = t, r.instance.Fire(r.instance.UIGM_SHOW, Q.strArr.treasureChestUI)
                    }
                }
            }
        }
        Win() {
            this.tips.text = "win", h.instance.player.win++, this.IsMVP(), this.gg.visible = !0, p.instance.RotEffect_360(this.gg, 36), this.winImg.skin = "StartGameUI/player_" + h.instance.game.mvpIndex + ".png", this.winImg.visible = !0, this.loseImg.visible = !1, this.rewardBtn_3.skin = "StartGameUI/winBtn.png", this._advImg.skin = "StartGameUI/winADV.png", this._rtext.color = "#63e05e"
        }
        Lose() {
            this.tips.text = "consolation prize", this.gg.visible = !1, h.instance.player.lose++, this.winImg.visible = !1, this.loseImg.visible = !0, this.rewardBtn_3.skin = "StartGameUI/loseBtn.png", this._advImg.skin = "StartGameUI/loseADV.png", this._rtext.color = "#ff0400"
        }
    }
    class tt {
        constructor() {
            this._name_1 = ["Literati", "Raprap", "Hario", "Lolita", "Breaker", "Atom", "Dreamer", "She-Wolf", "Suportiou", "Smoke Bomb", "Slungsho", "Spectre", "Dingdong", "ProcSocks", "Newbie", "Rancor", "Rancors", "Lil Kid", "Steppe", "Super Piggy", "Caprice", "W", "DoubleMess", "Puzzler", "Smart Boy", "Hardlife", "Venom", "Diviner", "Anna", "Anna", "Funny Games", "Teatime", "terry", "༺༑༻", "Crucible", "cql", "Baseball", "Classmate", "Dihya", "Married Man", "Subculture", "Hardcore", "Hardcore", "Mental", "Radium", "Natural Gold", "Haᴄer", "Haᴄer", "Woody", "Legend", "Firedog", "Irons", "Electron", "LightFighter", "Poor Guy", "Wealthy", "Shrimp", "Lil Fellow", "Kiddo", "Goshawk", "Forever Young", "Scary Ninja", "Jumper", "Breach"],
                this._name_2 = ["爱", "安", "百", "邦", "宝", "保", "抱", "贝", "倍", "蓓", "本", "必", "碧", "璧", "斌", "冰", "兵", "炳", "步", "彩", "曹",
                    "昌", "长", "常", "超", "朝", "陈", "晨", "成", "呈", "承", "诚", "崇", "楚", "传", "春", "纯", "翠", "村", "殿", "丁", "定", "东", "冬", "二",
                    "凡", "方", "芳", "昉", "飞", "菲", "纷", "芬", "奋", "风", "峰", "锋", "凤", "芙", "福", "付", "复", "富", "改", "刚", "高", "阁", "铬", "根",
                    "庚", "耕", "公", "功", "冠", "光", "广", "归", "桂", "国", "海", "寒", "翰", "昊", "浩", "荷", "红", "宏", "洪", "鸿", "厚", "华", "存", "大",
                    "丹", "道", "德", "登", "砥", "典", "佃", "小", "狗", "亲"
                ]
        }
        static get instance() {
            return this._instance
        }
        get name() {
            let t;
            // if (Math.random() < .5) {
            //     t = this._name_1[Math.floor(Math.random() * this._name_1.length)] + this._name_2[Math.floor(Math.random() * this._name_2.length)]
            // } else {
            //     t = this._name_1[Math.floor(Math.random() * this._name_1.length)] + this._name_2[Math.floor(Math.random() * this._name_2.length)] + this._name_2[Math.floor(Math.random() * this._name_2.length)]
            // }
            t = this._name_1[Math.floor(Math.random() * this._name_1.length)]
            return t
        }
    }
    tt._instance = new tt;
    class et extends Q {
        constructor() {
            super(), this.time = 0, this.playerSKin = 5, this.headImg = [0, 1, 3, 4, 5, 6], this._isMatch = !1, this._aiNameArr = [], this.path = "Prefabs/MatchingUI.json", this.zOrder = 10
        }
        ReadUIInfo() {
            this.panel.height = this.scene.height, this.heads = this.panel.getChildByName("head"), this.startGameBtn = this.panel.getChildByName("startGameBtn"), this.startText = this.startGameBtn.getChildByName("text"), this.black = this.startGameBtn.getChildByName("black"), this.pp = this.panel.getChildByName("PP"), this.backBtn = this.panel.getChildByName("backBtn"), this.backBtn.on(Laya.Event.CLICK, this, this.BackBtnClickEvent), p.instance.AddBtnEvent([this.backBtn])
        }
        HeadInit() {
            for (let t = 0; t < this.heads.numChildren; t++) {
                let e = this.heads.getChildAt(t);
                e.skin = "pipei/z20kb3.png", e.getChildByName("name").text = "????"
            }
        }
        StartGame() {
            u.instance.PlaySound(u.instance.Other_sound.btn_gameStart), r.instance.Fire(r.instance.GM_STARTGAME), p.instance.Shake(this.startGameBtn, .05), Laya.timer.once(200, this, () => {
                this.Hide()
            }, null, !0)
        }
        _Show() {
            this.startGameBtn.on(Laya.Event.CLICK, this, this.StartBtnClick), this.pp.text = "Matching...", this.HeadInit(), this._isMatch = !1, this.startText.text = "Prepare", this.black.alpha = 0, Laya.timer.loop(1e3, this, this.MatchEvent);
            let t = this.heads.getChildAt(2);
            t.skin = "StartGameUI/player_" + h.instance.player.playerSelectIndex + ".png", t.getChildByName("name").text = "Me";
            let e = (this.scene.height - this.startGameBtn.y + this.startGameBtn.height / 2) / this.scene.height;
            G.instance.CustomAdShow(e)
        }
        _Hide() {
            Laya.timer.clear(this, this.MatchEvent), this.headImg = [0, 1, 3, 4, 5, 6], this.time = 0, this._aiNameArr.length = 0, G.instance.CustomAdHide()
        }
        MatchEvent() {
            if (this.headImg.length > 0) {
                this.time++, this.pp.text = "Matching  " + this.time + "s";
                let t = Math.random();
                if (t < .7) {
                    t = Math.floor(Math.random() * this.headImg.length);
                    let e = this.headImg[t],
                        i = this.heads.getChildAt(e);
                    this.headImg.splice(t, 1);
                    let s = i.getChildByName("name"),
                        _ = tt.instance.name;
                    if (0 == e) i.skin = "StartGameUI/mg_" + h.instance.player.trollIndex + ".png", h.instance.game.trollName = _;
                    else {
                        let t = Math.floor(Math.random() * this.playerSKin);
                        i.skin = "StartGameUI/player_" + t + ".png", h.instance.game.playerArr = {
                            name: _,
                            index: t
                        }
                    }
                    s.text = _, p.instance.Shake(i, .2), u.instance.PlaySound(u.instance.Other_sound.MP)
                }
            } else this._isMatch && (Laya.timer.clear(this, this.MatchEvent), this.StartGame(), this.pp.visible = !1)
        }
        StartBtnClick() {
            this._isMatch ? (Laya.timer.clear(this, this.MatchEvent), this.StartGame(), this.pp.visible = !1) : (this._isMatch = !0, this.startText.text = "Ready", this.startGameBtn.off(Laya.Event.CLICK, this, this.StartBtnClick), p.instance.Alpha(this.black, .5, 1)), p.instance.Shake(this.startGameBtn, .1)
        }
        BackBtnClickEvent() {
            this.Hide(), p.instance.Shake(this.startGameBtn, .1), Laya.timer.clear(this, this.MatchEvent), r.instance.Fire(r.instance.UIGM_SHOW, "startGameUI")
        }
    }
    class it extends Q {
        constructor() {
            super(), this._bgHeight = 100, this._buttonHeight = 134, this.advArr = {}, this.path = "Prefabs/ShopUI.json", this.zOrder = 20
        }
        ReadUIInfo() {
            this.panel.width = this.scene.width, this.panel.height = this.scene.height, this.panel.pivot(this.panel.width / 2, this.panel.height / 2), this.panel.pos(this.panel.pivotX, this.panel.pivotY), this._shopBtnArr = [], this._shop = this.panel.getChildByName("menu"), this._select = this._shop.getChildByName("select"), this._build = this._shop.getChildByName("build"), this._closeBtn = this._shop.getChildByName("close"), this._gold = this._shop.getChildByName("gold"), this._closeBtn.on(Laya.Event.CLICK, this, this.Close), this._shopPrefabs = Laya.loader.getRes("Prefabs/ShopMenu.json"), this.SelectInit()
        }
        SelectInit() {
            if (this._select.numChildren > 0) {
                let t = [];
                for (let e = 0; e < this._select.numChildren; e++) {
                    let i = this._select.getChildAt(e);
                    i.on(Laya.Event.CLICK, this, this.SelectClickEvent, [e]), t.push(i)
                }
                t.push(this._closeBtn), p.instance.AddBtnEvent(t)
            }
        }
        ShowShopMenu() {
            if (this._build.numChildren > 0) {
                this._build.height = this._build.numChildren * this._buttonHeight, this._shop.height = this._build.height + this._bgHeight;
                for (let t = 0; t < this._build.numChildren; t++) {
                    let e = this._build.getChildAt(t);
                    e.scale(0, 0), Laya.Tween.to(e, {
                        x: 246.5,
                        y: t * this._buttonHeight + 74,
                        scaleX: 1,
                        scaleY: 1
                    }, 200, null, null, 100 * t, !0)
                }
            }
        }
        SelectClickEvent(t) {
            this.ClearBuild(), this.selectTSkin(t);
            let e = h.instance.build.GetShopData(t);
            for (let t = 0; t < e.length; t++) {
                let i = e[t];
                this.SetShopBtnInfo(i)
            }
            if (this.ShowShopMenu(), 0 == t) {
                let t = (this.scene.height - 969) / this.scene.height;
                G.instance.CustomAdShow(t)
            } else G.instance.CustomAdHide()
        }
        selectTSkin(t) {
            if (this._select.numChildren > 0)
                for (let e = 0; e < this._select.numChildren; e++) {
                    let i = this._select.getChildAt(e);
                    i.skin = t == e ? "UI/selectShopBtn.png" : "UI/shopBtn.png"
                }
        }
        ShopBtnEvent(...t) {
            let e = t[0].split("_")[0],
                i = t[1],
                s = h.instance.build.GetShopBuildMoney(e)[1];
            h.instance.player.gold >= s ? (h.instance.player.gold -= s, h.instance.player.ModifiedBuileprintQuantity(e, 1), i.text = h.instance.player.GetBuileprintNum(e), this._gold.text = h.instance.player.gold.toString(), r.instance.Fire(r.instance.UIGM_TIPS, "successful purchase")) : r.instance.Fire(r.instance.UIGM_TIPS, "Not enough diamonds")
        }
        ShopBtnEvent_ADV(...t) {
            let e = t[0].split("_")[0],
                i = t[1];
            this.getAdvNum(e) == h.instance.player.DZCount ? r.instance.Fire(r.instance.UIGM_TIPS, "Please try again later") : G.instance.ShowADV({
                success: () => {
                    h.instance.player.ModifiedBuileprintQuantity(e, 1), i.text = h.instance.player.GetBuileprintNum(e), this.setAdvNum(e)
                },
                fail: () => {}
            })
        }
        getAdvNum(t) {
            let e = this.advArr[t];
            return e || (this.advArr[t] = 0, this.advArr[t])
        }
        setAdvNum(t) {
            this.advArr[t] = h.instance.player.DZCount
        }
        SetShopBtnInfo(t) {
            let e = t.split("_"),
                i = e[0],
                s = parseInt(e[1]),
                _ = this.shopBtn,
                n = h.instance.build.GetShopBuildMoney(i),
                a = h.instance.build.GetIntroduce(i, 1),
                l = h.instance.player.GetBuileprintNum(i),
                o = _.getChildByName("btn"),
                r = o.getChildByName("goldText1"),
                d = _.getChildByName("name"),
                c = _.getChildByName("count"),
                u = _.getChildByName("introduce"),
                m = _.getChildByName("buildImg"),
                g = _.getChildByName("subBuildImg"),
                y = o.getChildByName("adv");
            m.skin = "build/" + i + "_1.png";
            let f = h.instance.build.GetSubSkin(i);
            null == f ? g.visible = !1 : (g.visible = !0, g.skin = f), d.text = n[0], r.text = n[1].toString(), u.text = a, c.text = l, 1 == s ? (r.visible = !0, y.visible = !1, h.instance.player.gold >= n[1] ? (o.skin = "load/menuBtn.png", r.color = "#ffffff") : (o.skin = "load/menuBtnNo.png", r.color = "#000000"), o.on(Laya.Event.CLICK, this, this.ShopBtnEvent, [t, c])) : (r.visible = !1, y.visible = !0, o.on(Laya.Event.CLICK, this, this.ShopBtnEvent_ADV, [t, c]), o.skin = "load/doorAdvBtn.png"), this._build.addChild(_), p.instance.AddBtnEvent([o])
        }
        get shopBtn() {
            let t;
            return this._shopBtnArr.length > 0 ? ((t = this._shopBtnArr.shift()).visible = !0, t) : ((t = new Laya.View).createView(this._shopPrefabs), t)
        }
        ClearBuild() {
            if (this._build.numChildren > 0)
                for (let t = this._build.numChildren - 1; t >= 0; t--) {
                    let e = this._build.getChildAt(t);
                    e.removeSelf(), e.visible = !1, e.getChildByName("btn").offAll(), this._shopBtnArr.push(e), p.instance.RemoveBtnEvent([e])
                }
        }
        _Show(...t) {
            this.panel.alpha = 1, this.SelectClickEvent(0), this._gold.text = h.instance.player.gold.toString()
        }
        _Hide(...t) {
            this.ClearBuild(), this.panel.scale(1, 1), G.instance.CustomAdHide()
        }
        Close() {
            Laya.Tween.to(this.panel, {
                scaleX: .1,
                scaleY: .1,
                alpha: 0
            }, 300, null, Laya.Handler.create(this, () => {
                this.Hide()
            }), 0, !0)
        }
    }
    class st extends Q {
        constructor() {
            super(), this._repair_Skill = !1, this._repairTimeInterval = 20, this._roomindex = 0, this._isShow = !1, this.path = "Prefabs/SkillUI.json", this.zOrder = 10
        }
        ReadUIInfo() {
            this.panel.width = 1, this._skill_repair = this.panel.getChildByName("skill1"), this._repair_mask = new Laya.Sprite, this._skill_repair.addChild(this._repair_mask), this._skill_repair.on(Laya.Event.CLICK, this, this.Repair_Click), this._repair_mask.alpha = .7, this._skill_player = this.panel.getChildByName("skill2"), this.AddEvent()
        }
        AddEvent() {
            r.instance.AddListEvent(r.instance.SKILL_ADDUPEVENT, this.AddUpEvent, this)
        }
        Init() {
            this._isShow = !1, this.HideSkill(), this._repairTime = 0, this._repair_Skill = !1, this._repair_mask.graphics.clear()
        }
        AddUpEvent() {
            this._isShow = !0, c.instance.AddTimeLoopEvent("SkillUIUpEvent", this.UpEvent, this, .02), this.ShowSkill()
        }
        UpEvent() {
            this._repair_Skill && this.Darw(this._skill_repair, this._repair_mask, this._repairTime, this._repairTimeInterval)
        }
        Darw(t, e, i, s) {
            let _ = c.instance.AfterAPeriodOfTime_Proportion(i, s);
            e.graphics.clear(), 1 == _ ? (i = 0, this._repair_Skill = !1) : e.graphics.drawPie(t.pivotX, t.pivotY, t.width / 2, 0, 360 * (1 - _), "#4c4444")
        }
        Repair_Click() {
            this._repair_Skill || (this._repairTime = c.instance.gameTime, this._repair_Skill = !0, this._repair_mask.graphics.drawPie(45, 45, 45, 0, 360, "4c4444"), r.instance.Fire(r.instance.BUILD_SKILLEVENT, this._roomindex, 0), p.instance.Shake(this._skill_repair, .2))
        }
        set roomIndex(t) {
            this._roomindex = t
        }
        HideSkill() {
            p.instance.Hide(this._skill_repair), p.instance.Hide(this._skill_player)
        }
        ShowSkill() {
            this._isShow && p.instance.Show(this._skill_repair)
        }
        SkillPlayerClickEvent() {
            this._skill_player_func && this._skill_player_func()
        }
        DoubleGlod1() {}
        InvincibleDoor() {}
        DounbleAttackSpeed() {}
        AwayTroll() {}
        DoubleGold2() {}
    }
    class _t extends Q {
        constructor() {
            super(), this._anim = null, this._animFactory = null, this.selectIndex = 0, this.gsTime = 3, this.path = "Prefabs/StartGame.json", this.zOrder = 10
        }
        ReadUIInfo() {
            this.panel.width = this.scene.width, this.panel.height = this.scene.height,
                this.ysPanel = this.panel.getChildByName("ysPanel"), this.ysPanel.height = this.scene.height, this.ysP = this.ysPanel.getChildByName("p"),
                this.ysP.y = (this.scene.height - this.ysP.height) / 2, this.ysV = this.ysP.getChildByName("panel"), this.ysV.vScrollBarSkin = "",
                this.yesBtn = this.ysP.getChildByName("yesBtn"), this.noBtn = this.ysP.getChildByName("noBtn"), this.noBtn.on(Laya.Event.CLICK, this, this.NoBtnClickEvent),
                this.ysPanel.visible = !1, this.yszcBtn = this.panel.getChildByName("yszcBtn"), this.bg = this.panel.getChildByName("bg"), this.bg.height = this.scene.height,
                this.startGameBtn = this.panel.getChildByName("StartBtn"), this.startGameBtn.pos(this.panel.width / 2, this.panel.height / 2),
                this.deng = this.panel.getChildByName("deng"), this.select = this.panel.getChildByName("Select"), this.shopBtn = this.panel.getChildByName("Shop"),
                this.gs = this.panel.getChildByName("gs"), this.gs.visible = !1, this.gs.width = this.scene.height, this.gs.height = this.scene.height,
                this.gsPanel = this.gs.getChildByName("GS"), this.gsBtn = this.gsPanel.getChildByName("gsBtn"), this.gsText = this.gsBtn.getChildByName("gstext"),
                this.gsPanel.y = (this.scene.height - this.gsPanel.height) / 2, this.gold3 = this.panel.getChildByName("gold").getChildByName("text"),
                this.gold3.text = h.instance.player.gold.toString(), h.instance.player.goldText = this.gold3, u.instance.playMusic(u.instance.BG_music.gs),
                this.startGameBtn.on(Laya.Event.CLICK, this, this.StartGame), this.shopBtn.on(Laya.Event.CLICK, this, this.ShopBtnClickEvent),
                this._anim || this.SelectHandle(), p.instance.AddBtnEvent([this.shopBtn, this.startGameBtn, this.yesBtn, this.noBtn, this.yszcBtn]),
                this._Show()
            // h.instance.player.ysOK ? (this.gs.visible = !0, this.GsTime(), this.yesBtn.on(Laya.Event.CLICK, this, this.YesBtnClickEvent_2)) : (this.ysPanel.visible = !0, this.yesBtn.on(Laya.Event.CLICK, this, this.YesBtnClickEvent_1))
            this.gs.visible = !0, this.GsTime()
        }
        StartGame() {
            this.RandomDiff(), p.instance.Shake(this.startGameBtn, .05), Laya.timer.once(100, this, function() {
                this.Hide(), r.instance.FireReturn(r.instance.UIGM_SHOW, Q.strArr.macthingUI)
            })
        }
        SelectHandle() {
            let t = h.instance.player.PlayerSkin;
            this.selectIndex = h.instance.player.playerSelectIndex;
            for (let e = 0; e < t.length; e++) {
                let i = t[e],
                    s = this.select.getChildAt(i);
                if (s.getChildByName("adv").visible = !1, this.selectIndex == i) {
                    s.getChildByName("text").visible = !0, s.skin = "StartGameUI/select_0.png"
                }
            }
            this.LoadAnim()
        }
        AddSeleceEvent() {
            let t = [];
            for (let e = 0; e < this.select.numChildren; e++) {
                let i = this.select.getChildAt(e);
                i.on(Laya.Event.CLICK, this, this.Select, [e]), t.push(i)
            }
            p.instance.AddBtnEvent(t)
        }
        Select(t) {
            if (t != this.selectIndex && null != this.selectIndex) {
                let e = this.select.getChildAt(t),
                    i = e.getChildByName("adv"),
                    s = e.getChildByName("text"),
                    _ = this.select.getChildAt(this.selectIndex),
                    n = this,
                    a = _.getChildByName("text");
                i.visible ? G.instance.ShowADV({
                    success: function() {
                        h.instance.player.skinMax && G.instance.GameDrawerShow(), a.visible = !1, _.skin = "StartGameUI/select_1.png", e.skin = "StartGameUI/select_0.png", s.visible = !0, i.visible = !1, n.selectIndex = t, n.LoadAnim(), h.instance.player.playerSelectIndex = t, h.instance.player.PlayerSkin = [t]
                    },
                    fail: function() {
                        r.instance.Fire(r.instance.UIGM_TIPS, "视频未完全播放！！！")
                    }
                }) : (_.skin = "StartGameUI/select_1.png", e.skin = "StartGameUI/select_0.png", a.visible = !1, s.visible = !0, this.selectIndex = t, this.LoadAnim(), h.instance.player.playerSelectIndex = t, h.instance.player.PlayerSkin = [t])
            }
        }
        LoadAnim() {
            this._animFactory = new Laya.Templet, this._animFactory.on(Laya.Event.COMPLETE, this, this.parseComplete), this._animFactory.loadAni(this.skin)
        }
        parseComplete() {
            this._anim && this._anim.destroy(), this._anim = this._animFactory.buildArmature(0), this._anim.visible = !0, this._anim.play(0, !0), this._anim.pivotY = -20, this.deng.addChild(this._anim), this._anim.pos(this.deng.pivotX, this.deng.pivotY), this._anim.zOrder = 3
        }
        get skin() {
            return "res/Skeleton/player/player_" + this.selectIndex + ".sk"
        }
        _Show(...t) {
            h.instance.player.DZCount < h.instance.cdn.cdn.animSelectOpenCount ? this.select.visible = !1 : (h.instance.player.skinMax ? G.instance.GameDrawerShow() : G.instance.GameDrawerHide(), this.select.visible = !0), h.instance.player.DZCount < h.instance.cdn.cdn.shopOpenCount ? this.shopBtn.visible = !1 : this.shopBtn.visible = !0
        }
        _Hide(...t) {
            r.instance.Fire(r.instance.UIGM_HIDE, Q.strArr.shopUI), G.instance.GameDrawerHide()
        }
        ShopBtnClickEvent() {
            r.instance.Fire(r.instance.UIGM_SHOW, Q.strArr.shopUI)
        }
        RandomDiff() {
            let t = h.instance.cdn.cdn.diff,
                e = t.diffCount,
                i = 0,
                s = h.instance.player.DZCount;
            for (let t = 0; t < e.length; t++) {
                s < e[t] ? i = t : t == e.length - 1 && (i = e.length)
            }
            let _ = Math.floor(Math.random() * t.diff[i].length);
            h.instance.troll.difficulty = t.diff[i][_]
        }
        GsTime() {
            this.gsText.text = this.gsTime.toString(), this.gsTime--, 0 == this.gsTime ? Laya.timer.once(1e3, this, () => {
                this.gsText.text = "OK", this.gsBtn.on(Laya.Event.CLICK, this, this.CloseGs), p.instance.AddBtnEvent([this.gsBtn])
            }) : Laya.timer.once(1e3, this, () => {
                this.GsTime()
            })
        }
        CloseGs() {
            this.gs.removeSelf(), this.gs.visible = !1, this.gs.destroy(!0), u.instance.StopMusic(), this.AddSeleceEvent(), this.yszcBtn.on(Laya.Event.CLICK, this, this.YszcBtnClickEvent)
            this.yszcBtn.visible = false;
        }
        YesBtnClickEvent_1() {
            this.ysPanel.visible = !1, h.instance.player.ysOK = !0, this.yesBtn.off(Laya.Event.CLICK, this, this.YesBtnClickEvent_1), this.yesBtn.on(Laya.Event.CLICK, this, this.YesBtnClickEvent_2), this.gs.visible = !0, this.GsTime()
        }
        NoBtnClickEvent() {
            h.instance.player.ysOK = !1, G.instance.GameExit()
        }
        YesBtnClickEvent_2() {
            this.ysPanel.visible = !1
        }
        YszcBtnClickEvent() {
            this.ysPanel.visible = !0
        }
    }
    class nt extends Q {
        constructor() {
            super(), this.path = "Prefabs/TipsUI.json", this.zOrder = 100
        }
        ReadUIInfo() {
            this.panel.pos(this.scene.width / 2, .25 * this.scene.height), this.textTips = this.panel.getChildByName("Text")
        }
        _Show(t) {
            this.textTips.text = t, p.instance.Shake(this.panel, .05), Laya.timer.once(1e3, this, this.ShakeHide, null, !0)
        }
        ShakeHide() {
            let t = this;
            p.instance.ShakeHide(this.panel, function() {
                t.Hide()
            })
        }
    }
    class at extends Q {
        constructor() {
            super(), this.path = "Prefabs/TreasureChestUI.json", this.zOrder = 11
        }
        ReadUIInfo() {
            this.imgArr = new Array, this.useImgArr = new Array, this.panel.width = this.scene.width, this.panel.height = this.scene.height, this.closeBtn = this.panel.getChildByName("closeBtn"), this.advBtn = this.panel.getChildByName("advBtn"), this.tcEffct = this.panel.getChildByName("tceffect"), this.tcText = this.panel.getChildByName("tcText"), this.qq = this.panel.getChildByName("qq"), this.qq.visible = !1, this.qq.zOrder = -2, this.advBtn.on(Laya.Event.CLICK, this, this.ADVClickEvent), this.closeBtn.on(Laya.Event.CLICK, this, this.CloseBtnClickEvent), p.instance.AddBtnEvent([this.closeBtn]), this.tc = new Laya.Animation, Laya.loader.load("res/atlas/taAnim.atlas", Laya.Handler.create(this, () => {
                this.tc.loadAnimation("tcAnim.ani", Laya.Handler.create(this, () => {
                    this.tc.zOrder = -1, this.panel.addChild(this.tc), this.tc.x = this.scene.width / 2, this.tc.y = this.scene.height / 2, this.tc.gotoAndStop(0)
                }))
            }))
        }
        Init() {}
        _Hide(...t) {
            this.qq.visible = !1, this.qq.rotation = 0, this.tcText.visible = !1, this.advBtn.visible = !1, this.advBtn.rotation = 0, this.advBtn.scale(1, 1), this.closeBtn.visible = !1, this.ClearImg(), this.closeBtn.getChildAt(0).text = "关闭"
        }
        _Show(...t) {
            this.qq.visible = !0, this.qq.alpha = 0, this.tcText.visible = !0, this.tcText.alpha = 0, this.advBtn.visible = !0, this.advBtn.alpha = 0, this.closeBtn.visible = !0, this.closeBtn.alpha = 0, this.tc.gotoAndStop(0), this.tc.y = -this.tc.getBounds().height, this.TcEffectInit(), this.Start()
        }
        Start() {
            Laya.Tween.to(this.tc, {
                y: .4 * this.scene.height
            }, 1e3, Laya.Ease.circIn, Laya.Handler.create(this, () => {
                this.TcEffectInit(), this.tc.play(0, !1, "dd"), this.tcText.y = .2 * this.scene.height, this.advBtn.y = this.tc.y + 2 * this.advBtn.height, this.closeBtn.y = this.advBtn.y + 1.2 * this.closeBtn.height, p.instance.Alpha(this.advBtn, .4), p.instance.Alpha(this.closeBtn, .4), p.instance.Alpha(this.tcText, .05), p.instance.ADVEffect(this.advBtn, 0), this.TcEffect(), this.qq.pos(this.tc.x, this.tc.y), Laya.Tween.to(this.qq, {
                    alpha: 1
                }, 400, null, Laya.Handler.create(this, () => {
                    p.instance.RotEffect_360(this.qq, 36)
                }), 0, !0)
            }), 0, !0)
        }
        TcEffectInit() {
            if (this.tcEffct.numChildren > 0)
                for (let t = 0; t < this.tcEffct.numChildren; t++) {
                    let e = this.tcEffct.getChildAt(t);
                    e.alpha = 0, e.y = this.tc.y + e.height, Laya.Tween.clearAll(e)
                }
        }
        TcEffect(t = 0) {
            let e = this.tcEffct.getChildAt(t);
            Laya.Tween.to(e, {
                alpha: 1,
                y: this.tc.y
            }, 2e3, null, Laya.Handler.create(this, () => {
                t++, this.tcEffct.numChildren == t ? this.TcEffect() : this.TcEffect(t), Laya.Tween.to(e, {
                    alpha: 0,
                    y: this.tc.y - e.height
                }, 2e3, null, Laya.Handler.create(this, () => {
                    e.y = this.tc.y + e.height
                }), 0, !0)
            }), 0, !0)
        }
        ADVClickEvent() {
            G.instance.ShowADV({
                success: () => {
                    u.instance.PlaySound(u.instance.Other_sound.tcOpen), this.TcEffectInit(), this.MoveDown(this.tc, this.advBtn.y, 1, 600, () => {
                        this.tc.play(0, !1, "open"), this.tc.on(Laya.Event.COMPLETE, this, this.open)
                    }), this.advBtn.visible = !1, this.qq.visible = !1, this.MoveDown(this.closeBtn, this.closeBtn.y + this.closeBtn.height, 0, 200, () => {
                        this.closeBtn.visible = !1
                    })
                },
                fail: () => {
                    r.instance.Fire(r.instance.UIGM_TIPS, "请观看完整视频，获得宝箱")
                }
            })
        }
        open() {
            this.tc.play(0, !0, "openLoop"), this.tc.offAll(), this.OpenOver()
        }
        MoveDown(t, e, i, s, _ = null) {
            t && Laya.Tween.to(t, {
                y: e,
                alpha: i
            }, s, null, Laya.Handler.create(this, () => {
                _ && _()
            }), 0, !0)
        }
        OpenOver() {
            let t = h.instance.cdn.tcArr;
            if (t) {
                let e = 100,
                    i = 20,
                    s = this.tc.y - this.tc.getBounds().height / 2 - 250;
                for (let _ = 0; _ < t.length; _++) {
                    let n = t[_].split("_");
                    h.instance.player.ModifiedBuileprintQuantity(n[0], 1);
                    let a = this.img,
                        l = a.getChildAt(0);
                    a.skin = "build/" + t[_] + ".png";
                    let o = h.instance.build.GetSubSkin(n[0]);
                    o ? (l.skin = o, l.visible = !0) : l.visible = !1;
                    let r = _ % 5,
                        d = e + (a.width + i) * r,
                        c = s + Math.floor(_ / 5) * (a.height + 20);
                    Laya.Tween.to(a, {
                        x: d,
                        y: c,
                        alpha: 1,
                        scaleX: 1,
                        scaleY: 1
                    }, 300 * _, Laya.Ease.bounceIn, null, 0, !0)
                }
            }
            this.closeBtn.visible = !0, p.instance.Alpha(this.closeBtn, .5, 1), this.closeBtn.getChildAt(0).text = "Get", this.closeBtn.y = this.tc.y + this.tc.getBounds().height
        }
        ClearImg() {
            if (this.useImgArr.length > 0) {
                for (let t = 0; t < this.useImgArr.length; t++) {
                    let e = this.useImgArr[t];
                    e.removeSelf(), this.imgArr.push(e)
                }
                this.useImgArr.length = 0
            }
        }
        get img() {
            let t;
            if (this.imgArr.length > 0) t = this.imgArr.shift();
            else {
                let e = new Laya.Image;
                (t = new Laya.Image).width = 90, t.height = 90, t.pivot(45, 45), e.width = 90, e.height = 90, e.pivot(45, 45), t.addChild(e), e.pos(45, 45)
            }
            return t.scale(0, 0), t.alpha = 0, this.panel.addChild(t), t.pos(this.tc.x, this.tc.y - 90), this.useImgArr.push(t), t
        }
        CloseBtnClickEvent() {
            this.Hide(), Laya.timer.once(1e3, this, () => {
                this.tc.play(0, !1, "dd")
            })
        }
    }
    class lt {
        constructor() {
            this.script = {
                battleUI: null,
                startGameUI: null,
                gameOverUI: null,
                macthingUI: null,
                tipsUI: null,
                skillUI: null,
                shopUI: null,
                treasureChestUI: null
            }, lt._ins = this, this.ReadUIInfo(), this.AddEvent()
        }
        static get instance() {
            return this._ins
        }
        AddEvent() {
            r.instance.AddListEvent(r.instance.UIGM_SHOW, this.Show, this), r.instance.AddListEvent(r.instance.UIGM_HIDE, this.Hide, this), r.instance.AddListEvent(r.instance.UIGM_TIPS, this.Tips, this), r.instance.AddListEvent(r.instance.UIGM_HIDESKILL, this.HideSkill, this), r.instance.AddListEvent(r.instance.UIGM_SHOWSKILL, this.ShowSkill, this), r.instance.AddListEvent(r.instance.UIGM_PLAYERHIT, this.PlayerHit, this), r.instance.AddListEvent(r.instance.UIGM_PLAYERHITEFFECT, this.playerHitEffect, this)
        }
        ReadUIInfo() {
            this.script.battleUI = new J, this.script.gameOverUI = new $, this.script.macthingUI = new et, this.script.startGameUI = new _t, this.script.tipsUI = new nt, this.script.skillUI = new st, this.script.shopUI = new it, this.script.treasureChestUI = new at
        }
        Init() {
            this.script.battleUI.Init()
        }
        LoadOne() {
            Laya.loader.load([this.script.startGameUI.path_Str, this.script.battleUI.path_Str, this.script.gameOverUI.path_Str, this.script.macthingUI.path_Str, this.script.tipsUI.path_Str, this.script.skillUI.path_Str, this.script.shopUI.path_Str, this.script.treasureChestUI.path_Str], Laya.Handler.create(this, this.LoadOneClass))
        }
        LoadOneClass() {
            this.script.startGameUI.LoadPanel(!0), this.script.battleUI.LoadPanel(), this.script.gameOverUI.LoadPanel(), this.script.macthingUI.LoadPanel(), this.script.tipsUI.LoadPanel(), this.script.skillUI.LoadPanel(), this.script.shopUI.LoadPanel(), this.script.treasureChestUI.LoadPanel()
        }
        AddUpData() {}
        StartGame() {
            this.script.battleUI.AddUpData(), this.script.battleUI.Init(), this.script.skillUI.Init(), this.script.battleUI.Show()
        }
        GameMove(t) {
            this.script.battleUI.Hide(), this.script.skillUI.Hide(), t ? this.script.startGameUI.Show() : this.script.gameOverUI.Show()
        }
        Show(t) {
            let e = this.script[t];
            return null != e && (e.Show(), !0)
        }
        Hide(t) {
            let e = this.script[t];
            return null != e && (e.Hide(), !0)
        }
        Tips(t) {
            this.script.tipsUI.Show(t)
        }
        set SkillRoomindex(t) {
            this.script.skillUI.roomIndex = t, this.script.skillUI.Show()
        }
        ShowSkill() {
            this.script.skillUI.ShowSkill()
        }
        HideSkill() {
            this.script.skillUI.HideSkill()
        }
        PlayerHit(t) {
            this.script.battleUI.playerHit(t - 1)
        }
        playerHitEffect(t) {
            this.script.battleUI.playerHitEffect(t - 1)
        }
    }
    class ht {
        constructor() {
            this._offEventHandle = null, this._block = null, this.AddEvent()
        }
        get player() {
            return y.instance.player
        }
        AddEvent() {
            r.instance.AddListEvent(r.instance.PLOGIC_OFFEVENTHANDLE, this.OffEventHandle, this), r.instance.AddListEvent(r.instance.PLOGIC_TESTAROUNDBLOCK, this.TestAroundBlock, this)
        }
        PlayerMove(t, e) {
            if (0 == t && 0 == e) return;
            let i = 0,
                s = 0;
            t > 0 ? i = 1 : t < 0 && (i = -1), e > 0 ? s = 1 : e < 0 && (s = -1), this.player.player.zOrder = this.player.y, 0 != i && (this.player.direction = i);
            let _ = r.instance.FireReturn(r.instance.MGM_PROTAGONIST_MOVE, this.player.x, this.player.y, i, s);
            if (null != _.x) {
                Math.abs(this.player.x - _.x) <= 60 && (t = 0)
            }
            if (null != _.y) {
                Math.abs(this.player.y - _.y) <= 60 && (e = 0)
            }
            f.instance.OperationMovement(this.player.player, t * this.player.speed, e * this.player.speed)
        }
        TestAroundBlock() {
            this.player.curRoom = r.instance.FireReturn(r.instance.MGM_GET_BLOCKFINDROOM, this.player.x, this.player.y);
            let t = r.instance.FireReturn(r.instance.MGM_MONTIORPLAYERAROUND, this.player.x, this.player.y);
            if (null == t) return this._block = null, this._offEventHandle = null, void r.instance.Fire(r.instance.OFF_HIDE_MENU);
            if (-1 == this.player.curRoom) return void r.instance.Fire(r.instance.OFF_HIDE_MENU);
            this._block = t.block;
            let e = {
                    x: null,
                    y: null
                },
                i = this._block.x - this.player.x,
                s = this._block.y - this.player.y;
            Math.abs(i) > Math.abs(s) ? (e.x = i > 0 ? this._block.x + 90 : this._block.x - 90, e.y = this._block.y) : (e.y = s > 0 ? this._block.y + 90 : this._block.y - 90, e.x = this._block.x), e = r.instance.FireReturn(r.instance.MGM_GET_MAPPOSTSCENEPOS, e.x, e.y), "door" == t.build ? t.block.isOpen ? (this._offEventHandle = this.OffDoor, r.instance.Fire(r.instance.OFF_SHOW_MENU, "closeDoor", {
                x: e[0],
                y: e[1]
            })) : (this._offEventHandle = this.OpenDoor, r.instance.Fire(r.instance.OFF_SHOW_MENU, "openDoor", {
                x: e[0],
                y: e[1]
            })) : "bed" == t.build && (null != this.player.bed ? (this._offEventHandle = this.DownBen, r.instance.Fire(r.instance.OFF_SHOW_MENU, "upBed", {
                x: e[0],
                y: e[1]
            })) : (this._offEventHandle = this.UpBed, t.block.isOpen || r.instance.Fire(r.instance.OFF_SHOW_MENU, "upBed", {
                x: e[0],
                y: e[1]
            })))
        }
        OffEventHandle() {
            this._offEventHandle(this._block)
        }
        UpBed(t) {
            this.player.player.visible = !1, this.player.player.stop(), this.player.roomIndex = t.room.roomIndex, this.player.curRoom = t.room.roomIndex, this.player.bed = t, u.instance.AddUpSound(t.room), r.instance.Fire(r.instance.BUILD_GOTOBED, t, this.player.id, !0), r.instance.Fire(r.instance.OINPUT_Event_ON), this._offEventHandle = this.DownBen, r.instance.Fire(r.instance.OFF_SHOW_MENU, "upBed"), r.instance.Fire(r.instance.OFF_HIDE_MENU), r.instance.Fire(r.instance.PAIL_KILLPLAYER, t), lt.instance.SkillRoomindex = this.player.roomIndex
        }
        DownBen(t) {
            t.isOpen ? r.instance.Fire(r.instance.UIGM_TIPS, "someone already～～") : (this.player.player.visible = !0, this.player.player.play(0, !0), t.build.skin = "build/bed_1.png", t.isOpen = !1, this.player.bed = null, r.instance.Fire(r.instance.OINPUT_Event_RS_ON), this._offEventHandle = this.UpBed, r.instance.Fire(r.instance.OFF_SHOW_MENU, "upBed"))
        }
        OpenDoor(t) {
            t.OpenDoor(), r.instance.Fire(r.instance.MGM_SET_BLOCKDYNWALKABLE, t.x, t.y, t.isOpen), this._offEventHandle = this.OffDoor, r.instance.Fire(r.instance.OFF_SHOW_MENU, "closeDoor"), c.instance.AddTimeOnceEvent("closeDoor", () => {
                this.OffDoor(t)
            }, this, 1.5)
        }
        OffDoor(t) {
            t.CloseDoor(), r.instance.Fire(r.instance.MGM_SET_BLOCKDYNWALKABLE, t.x, t.y, t.isOpen), this._offEventHandle = this.OpenDoor, r.instance.Fire(r.instance.OFF_SHOW_MENU, "openDoor")
        }
        GameOver() {
            this._block = null, this._offEventHandle = null
        }
    }! function(t) {
        t[t.Slide = 0] = "Slide", t[t.RS = 1] = "RS"
    }(A || (A = {}));
    class ot {
        constructor() {
            this._OIM = A.Slide, this._clickDownPos = {
                x: null,
                y: null
            }, this._clickMoveStartPos = {
                x: null,
                y: null
            }, this._clickMoveEndPos = {
                x: null,
                y: null
            }, this._SOX = 0, this._SOY = 0, this._RSX = 0, this._RSY = 0, this._mapMoveSpeed = 20, this._RSOffR = 79, this._rs = 9.8 * this._RSOffR, this._isMove = !1, this._RSmove = !1, this.RS_C = null, this.RS_D = null, this.off = .01, this._progLogic = new ht, this._scene = Laya.stage.getChildAt(0).getChildAt(0), this._panel = new Laya.Sprite, this._panel.width = Laya.stage.width, this._panel.height = Laya.stage.height, this._scene.addChild(this._panel), this._panel.visible = !1, this._panel.zOrder = 1, this.AddEvent()
        }
        AddEvent() {
            r.instance.AddListEvent(r.instance.OINPUT_Event_RS_ON, this.Event_RS_on, this), r.instance.AddListEvent(r.instance.OINPUT_Event_ON, this.Event_on, this)
        }
        Event_on() {
            this.Event_RS_off(), this._panel.on(Laya.Event.CLICK, this, this.ClickEvent), this._panel.on(Laya.Event.MOUSE_DOWN, this, this.ClickDownEvent), this._panel.on(Laya.Event.MOUSE_MOVE, this, this.MoveSlideEvent), this._panel.on(Laya.Event.MOUSE_UP, this, this.ClickUPEvent), this._panel.visible = !0
        }
        Event_off() {
            this._panel.off(Laya.Event.CLICK, this, this.ClickEvent), this._panel.off(Laya.Event.MOUSE_DOWN, this, this.ClickDownEvent), this._panel.off(Laya.Event.MOUSE_MOVE, this, this.MoveSlideEvent), this._panel.off(Laya.Event.MOUSE_UP, this, this.ClickUPEvent), this._panel.visible = !1
        }
        Event_RS_on() {
            this.Event_off(), null == this.RS_C && this.CreateRSImg(), this.RS_C.visible = !0, this._panel.on(Laya.Event.MOUSE_DOWN, this, this.ClickDownEvent), this._panel.on(Laya.Event.MOUSE_UP, this, this.ClickUPEvent), this._panel.on(Laya.Event.MOUSE_MOVE, this, this.MoveRSEvent), e.instance.AddUPEvent("MoveRSEvent_UpData", this.MoveRSEvent_UpData, this), c.instance.AddTimeLoopEvent("TestAroundBlock", () => {
                this._RSmove && r.instance.Fire(r.instance.PLOGIC_TESTAROUNDBLOCK)
            }, this, .2), this._panel.visible = !0
        }
        Event_RS_off() {
            this._panel.off(Laya.Event.MOUSE_DOWN, this, this.ClickDownEvent), this._panel.off(Laya.Event.MOUSE_UP, this, this.ClickUPEvent), this._panel.off(Laya.Event.MOUSE_MOVE, this, this.MoveRSEvent), e.instance.removeListEvent("MoveRSEvent_UpData"), c.instance.RemoveListLoopEvent("TestAroundBlock"), this._panel.visible = !1, this.RS_C.visible = !1
        }
        MoveSlideEvent() {
            if (this._clickMoveEndPos = {
                    x: this._panel.mouseX,
                    y: this._panel.mouseY
                }, this._SOX = this._clickMoveEndPos.x - this._clickMoveStartPos.x, this._SOY = this._clickMoveEndPos.y - this._clickMoveStartPos.y, r.instance.Fire(r.instance.MAP_MAPMOVE, this.SOX, this.SOY), this._clickMoveStartPos = {
                    x: this._panel.mouseX,
                    y: this._panel.mouseY
                }, !this._isMove) {
                let t = Math.abs(this._SOX),
                    e = Math.abs(this._SOY);
                (t > this.off || e > this.off) && (r.instance.Fire(r.instance.HIDE_MENU), this._isMove = !0)
            }
        }
        MoveRSEvent() {
            this._clickMoveEndPos = {
                x: this._panel.mouseX,
                y: this._panel.mouseY
            }, this._RSX = this._clickMoveEndPos.x - this._clickDownPos.x, this._RSY = this._clickMoveEndPos.y - this._clickDownPos.y, this._RSmove = !0
        }
        MoveRSEvent_UpData() {
            this.MoveRS_D(this.RSX, this.RSY)
        }
        ClickDownEvent() {
            this._clickDownPos = {
                x: this._panel.mouseX,
                y: this._panel.mouseY
            }, this._clickMoveStartPos = {
                x: this._panel.mouseX,
                y: this._panel.mouseY
            }, this._clickMoveEndPos = {
                x: this._panel.mouseX,
                y: this._panel.mouseX
            }, this._RSX = 0, this._RSY = 0, this._SOX = 0, this._SOY = 0, this._isMove = !1, null != this.RS_C && (this.RS_C.pos(this._clickDownPos.x, this._clickDownPos.y), this.RS_D.pos(this.RS_C.pivotX, this.RS_C.pivotY))
        }
        ClickUPEvent() {
            this._clickDownPos = {
                x: null,
                y: null
            }, this._clickMoveStartPos = {
                x: null,
                y: null
            }, this._clickMoveEndPos = {
                x: null,
                y: null
            }, this._RSX = 0, this._RSY = 0, this._SOX = 0, this._SOY = 0, this._RSmove = !1, this.InitRSPos()
        }
        ClickEvent() {
            this._isMove || r.instance.Fire(r.instance.CLICK_MAP, this._panel.mouseX, this._panel.mouseY, y.instance.player.roomIndex)
        }
        get RSX() {
            return this._RSX > 0 ? this._RSX = Math.min(this._RSX, this._RSOffR) : this._RSX < 0 && (this._RSX = Math.max(this._RSX, -this._RSOffR)), this._RSX / this._RSOffR
        }
        get RSY() {
            return this._RSY > 0 ? this._RSY = Math.min(this._RSY, this._RSOffR) : this._RSY < 0 && (this._RSY = Math.max(this._RSY, -this._RSOffR)), this._RSY / this._RSOffR
        }
        getOIMod(t) {
            return this._OIM == t
        }
        get SOX() {
            return this._SOX > 0 ? Math.min(this._SOX, this._mapMoveSpeed) : this._SOX < 0 ? Math.max(this._SOX, -this._mapMoveSpeed) : this._SOX
        }
        get SOY() {
            return this._SOY > 0 ? Math.min(this._SOY, this._mapMoveSpeed) : this._SOY < 0 ? Math.max(this._SOY, -this._mapMoveSpeed) : this._SOY
        }
        GameOver() {
            this.Event_off(), this.Event_RS_off(), this.ClickUPEvent()
        }
        CreateRSImg() {
            this.InitRS_C(), this.InitRS_D(), this._scene.addChild(this.RS_C), this.RS_C.addChild(this.RS_D), this.InitRSPos()
        }
        InitRSPos() {
            let t = this._scene.width / 2,
                e = (1 - this.RS_C.height / this._scene.height) * this._scene.height;
            this.RS_C.pos(t, e), this.RS_D.pos(this.RS_C.pivotX, this.RS_C.pivotY)
        }
        InitRS_C() {
            this.RS_C = this.CreateImg(), this.RS_C.skin = "UI/RS_C.png", this.RS_C.width = 242, this.RS_C.height = 242, this.RS_C.pivot(121, 121)
        }
        InitRS_D() {
            this.RS_D = this.CreateImg(), this.RS_D.skin = "UI/RS_D.png", this.RS_D.width = 84, this.RS_D.height = 84, this.RS_D.pivot(42, 42)
        }
        CreateImg() {
            return new Laya.Image
        }
        MoveRS_D(t, e) {
            if (0 == t && 0 == e) this.RS_D.pos(121, 121);
            else {
                let i = t * this._rs,
                    s = e * this._rs,
                    _ = Math.atan2(s, i),
                    n = 121,
                    a = 121,
                    l = 0,
                    h = 0;
                n = i > 0 ? Math.min(Math.cos(_) * this._RSOffR, i) : i < 0 ? Math.max(Math.cos(_) * this._RSOffR, i) : 0, a = s > 0 ? Math.min(Math.sin(_) * this._RSOffR, s) : s < 0 ? Math.max(Math.sin(_) * this._RSOffR, s) : 0, l = n / this._RSOffR, h = a / this._RSOffR, this.RS_D.pos(n + 121, a + 121), this._progLogic.PlayerMove(l, h)
            }
        }
    }
    class rt {
        constructor() {
            this._map = new z, this._mapData = new q, this._operInput = new ot, this.AddEvent(), this.screen = Laya.stage.getChildAt(0).getChildAt(0)
        }
        AddEvent() {
            this._map.AddEvent(), r.instance.AddListEvent(r.instance.MGM_START_END_PATH, this.GetStartPos_EndPos_Path, this), r.instance.AddListEvent(r.instance.MGM_PROTAGONIST_MOVE, this.ProtagonistMove, this), r.instance.AddListEvent(r.instance.MGM_AIORTROLLIS_MOVE, this.AIOrTrollIsMove, this), r.instance.AddListEvent(r.instance.MGM_FIND_AROUND_BUILD, this.FindTheTarget, this), r.instance.AddListEvent(r.instance.MGM_BUILDDIE, this.BuildDie, this), r.instance.AddListEvent(r.instance.MGM_GET_ROOMCOUNT, this.GetRoomCount, this), r.instance.AddListEvent(r.instance.MGM_GET_BLOCKFINDROOM, this.GetBlockIsRoom, this), r.instance.AddListEvent(r.instance.MGM_SET_BLOCKWALKABLE, this.SetBlockWalkable, this), r.instance.AddListEvent(r.instance.MGM_SET_BLOCKDYNWALKABLE, this.SetBlockDynWalkable, this), r.instance.AddListEvent(r.instance.MGM_GET_OPENSPACE, this.GetOpenSpace, this), r.instance.AddListEvent(r.instance.MGM_MONTIORPLAYERAROUND, this.MonitorPlayerAround, this), r.instance.AddListEvent(r.instance.MGM_FINDPOSBLOCK, this.FindPosBLock, this), r.instance.AddListEvent(r.instance.MGM_GET_DATAPOSTMAPPOS, this.GetDataPosTMapPos, this), r.instance.AddListEvent(r.instance.MGM_GET_MAPPOSTSCENEPOS, this.GetMapPosTScenePos, this), r.instance.AddListEvent(r.instance.MGM_GET_BLOCKPOSS, this.GetRoomBlockPos, this), r.instance.AddListEvent(r.instance.MGM_GET_POSAROUND, this.GetPosAroundBuild, this), r.instance.AddListEvent(r.instance.MGM_IS_SCREENRANGE, this.IsScreenRange, this), r.instance.AddListEvent(r.instance.MGM_ROOMBLACK, this.RoomBlock, this), r.instance.AddListEvent(r.instance.MGM_LOOKPOS, this.LookPos, this)
        }
        SelectMap(t = 0) {
            this._mapData.SelectMap(t), this._map.SetMapData(this._mapData), this._grid = new j(this._map.numCols, this._map.numRows), this._grid.mapData = this._mapData, this._grid.SetAllWalkable()
        }
        ShowMap() {
            this.SetScnenShowPos(20, 21), this._operInput.Event_RS_on()
        }
        SetScnenShowPos(t, e) {
            this._map.SetShowPoint(t, e, this.screen.width / 2, this.screen.height / 2), this._map.ShowPoint()
        }
        LookPos(t, e) {
            let i = this._map.ScreenPosTMapPos(this.screen.width / 2, this.screen.height / 2),
                s = this._map.ScreenPosTMapPos(0, 0),
                _ = this._map.ScreenPosTMapPos(this.screen.width, this.screen.height),
                n = this._map.MapPanelMaxPos,
                a = _.x - n.x,
                l = _.y - n.y,
                h = i.x - t,
                o = i.y - e;
            console.log("位移", _, n), h > 5 ? h >= s.x && (h = s.x - 90) : h < -5 && h < a && (h = a), o > 5 ? o >= s.y && (o = s.y - 90) : o < -5 && o < l && (o = l), this._map.MoveMap(h, o), this.MoveMapLoop(0)
        }
        MoveMapLoop(t) {
            t > 20 || (Laya.timer.once(20, this, this.MoveMapLoop, [t + 1]), this._map.MoveMap(.1, .01))
        }
        GetStartPos_EndPos_Path(t, e, i, s) {
            let _ = this._map.MapPosTDataPos(t, e),
                n = this._map.MapPosTDataPos(i, s);
            if (this._grid.setStartNode(_.x, _.y), this._grid.setEndNode(n.x, n.y)) return;
            let a = new W;
            a.findPath(this._grid);
            let l = a.path;
            return this._map.GetPathMapPos(l)
        }
        ProtagonistMove(t, e, i, s) {
            this.ProtagonistMapMove(t, e);
            let _ = this._map.MapPosTDataPos(t, e),
                n = this._grid.getNode(_.x, _.y + i),
                a = this._grid.getNode(_.x + s, _.y),
                l = {
                    x: null,
                    y: null
                };
            if (!n.dynWalkable) {
                let t = this._map.DataPosTMapPos(n.x, n.y).x;
                l.x = t
            }
            if (!a.dynWalkable) {
                let t = this._map.DataPosTMapPos(a.x, a.y).y;
                l.y = t
            }
            return l
        }
        MonitorPlayerAround(t, e) {
            let i = this._map.MapPosTDataPos(t, e),
                s = this._mapData.FindPlayerAround(i.x, i.y);
            if (null == s) return null; {
                let t = r.instance.FireReturn(r.instance.BUILD_FINDBLOCKPOS, s.x + "_" + s.y);
                return null == t ? null : {
                    build: s.build,
                    block: t
                }
            }
        }
        AIOrTrollIsMove(t, e) {
            let i = this._map.MapPosTDataPos(t, e),
                s = this._grid.getNode(i.x, i.y),
                _ = this._mapData.BlockFindRoom(i.x, i.y);
            return s.dynWalkable ? null : r.instance.FireReturn(r.instance.BUILD_FINDBLOCKPOS, i.x + "_" + i.y, _)
        }
        FindPosBLock(t, e) {
            let i = this._map.MapPosTDataPos(t, e),
                s = i.x + "_" + i.y;
            return r.instance.FireReturn(r.instance.BUILD_FINDBLOCKPOS, s)
        }
        ProtagonistMapMove(t, e) {
            let i = this._map.MapPosTScreenPos(t, e),
                s = 0,
                _ = 0,
                n = this.screen.width / 2,
                a = this.screen.height / 2;
            s = n - i.x, _ = a - i.y, this._map.MoveMap(s, _)
        }
        FindTheTarget(t, e) {
            let i = this._map.MapPosTDataPos(t, e);
            return this._mapData.GetAroundBuild(i.x, i.y, 6)
        }
        GetRoomCount() {
            return this._mapData.GetRoomCount()
        }
        GetBlockIsRoom(t, e) {
            let i = this._map.MapPosTDataPos(t, e);
            return this._mapData.BlockFindRoom(i.x, i.y)
        }
        SetBlockWalkable(t, e, i) {
            let s = this._map.MapPosTDataPos(t, e);
            this._grid.setWalkable(s.x, s.y, i)
        }
        SetBlockDynWalkable(t, e, i) {
            let s = this._map.MapPosTDataPos(t, e);
            this._grid.setDynWalkable(s.x, s.y, i)
        }
        GetOpenSpace(t, e = !1) {
            return this._mapData.GetOpenSpace(t, e)
        }
        BuildDie(t, e, i) {
            let s = this._map.MapPosTDataPos(t, e);
            this._mapData.readMap(s.x, s.y).inBlock = 0, this.SetBlockDynWalkable(t, e, !0)
        }
        GetDataPosTMapPos(t, e) {
            let i = this._map.DataPosTMapPos(t, e);
            return [i.x, i.y]
        }
        GetMapPosTScenePos(t, e) {
            let i = this._map.MapPosTScreenPos(t, e);
            return [i.x, i.y]
        }
        GetRoomBlockPos(t) {
            let e = this._mapData.GetRoom(t);
            if (null != e) {
                let t = e.room,
                    i = [];
                for (let e = 0; e < t.length; e++) {
                    let s = t[e].split("_"),
                        _ = this._map.DataPosTMapPos(parseInt(s[0]), parseInt(s[1]));
                    i.push(_)
                }
                return i
            }
            return null
        }
        GameOver() {
            this._operInput.GameOver(), this._mapData.GameOver(), this._map.GameOver(), delete this._grid
        }
        GetPosAroundBuild(t, e, i, s) {
            let _ = this._map.MapPosTDataPos(t, e);
            return this._mapData.GetPosAroundBuild(_.x, _.y, i, s)
        }
        IsScreenRange(t, e) {
            return this._map.IsScreenRange(t, e)
        }
        RoomBlock(t) {
            let e = this.GetRoomBlockPos(t);
            null != e && this._map.RoomBlack(e)
        }
    }
    class dt {
        Move(t, e) {
            let i = t.speed,
                s = e,
                _ = t.x - s[0],
                n = t.y - s[1];
            var a = Math.abs(_) + Math.abs(n);
            return _ > 0 ? (t.x -= i * (Math.abs(_) / a), t.direction = -1) : _ < 0 && (t.x += i * (Math.abs(_) / a), t.direction = 1), n > 0 ? (t.y -= i * (Math.abs(n) / a), t.player.zOrder = t.y) : n < 0 && (t.y += i * (Math.abs(n) / a), t.player.zOrder = t.y), Math.abs(_) < i && (t.x = s[0]), Math.abs(n) < i && (t.y = s[1]), t.x == s[0] && t.y == s[1]
        }
        GoToBed(t, e) {
            t.player.visible = !1, t.player.stop(), t.player.pos(e.x, e.y), t.bed = e, r.instance.Fire(r.instance.BUILD_GOTOBED, e, t.id)
        }
    }
    class ct {
        constructor() {
            this._build = [
                ["game_1", "at_1"],
                ["ice_1", "barb_1", "particlea_1", "spell_1", "entrapment_1", "guillotine_1", "energyhood_1", "smoney_1", "longrange_1", "solenoid_1", "repair_1", "mine_1", "mine_2", "mine_3", "mine_4"]
            ], this._bed_4 = ["game_1", "at_1"], this._AILevelNum = 4, this._AILevelArr = [
                [1.6, 1.7, 1.8, 1.9, 2],
                [1.3, 1.4, 1.5, 1.6, 1.7],
                [1.2, 1.3, 1.4, 1.5, 1.6],
                [1.1, 1.2, 1.3, 1.4, 1.5],
                [1, 1.05, 1.1, 1.15, 1.2]
            ], this._AI = {
                player: [],
                room: [],
                bed: [],
                target: [],
                path: [],
                build: [],
                nextBuild: [],
                weight: []
            }, this._noTarget = [], this.CC_Player = new dt
        }
        StartGame() {
            this.FindRoom(), this.RetestAI(), this.GetPath(), this.AddMoveHandle(), this.AIGoTobedOver(), c.instance.AddTimeLoopEvent("GoldCoinDetection", this.GoldCoinDetection, this, 1), this.RandomAILevel()
        }
        RandomAILevel() {
            this._AILevelNum = Math.floor(Math.random() * this._AILevelArr.length)
        }
        AddMoveHandle() {
            e.instance.AddUPEvent("AIMove", this.PlayerMoveHandle, this)
        }
        RemoveMoveHandle() {
            e.instance.removeListEvent("AIMove"), c.instance.RemoveListLoopEvent("GoldCoinDetection")
        }
        AddEvent() {
            r.instance.AddListEvent(r.instance.PAIL_FILTERDIEAI, this.FilterDieAI, this), r.instance.AddListEvent(r.instance.PAIL_KILLPLAYER, this.KillPlayer, this), r.instance.AddListEvent(r.instance.PAIL_SET_ATTACKEDAI, this.setAttackedAI, this)
        }
        FindRoom() {
            let t = r.instance.FireReturn(r.instance.MGM_GET_ROOMCOUNT),
                e = [];
            for (let i = 0; i < t; i++) e.push(i);
            for (let t = 0; t < this._AI.player.length; t++) {
                let i = Math.floor(Math.random() * e.length),
                    s = e[i];
                e.splice(i, 1);
                let _ = r.instance.FireReturn(r.instance.BUILD_FINDBEDANDDOOR, s);
                null == _ || _.bed.isOpen ? (this._AI.bed.push(null), this._AI.target.push(null), this._noTarget.push(t)) : (this._AI.bed.push(_.bed), _.door.isOpen ? this._AI.target.push(_.bed) : this._AI.target.push(_.door)), this._AI.path.push(null)
            }
        }
        GetPath() {
            for (let t = 0; t < this._AI.player.length; t++) this.SetPath(t)
        }
        SetPath(t) {
            let e = this._AI.player[t],
                i = this._AI.target[t];
            if (null != i) {
                let s = r.instance.FireReturn(r.instance.MGM_START_END_PATH, e.x, e.y, i.x, i.y);
                this._AI.path[t] = s
            } else this._AI.path[t] = null
        }
        RetestAI() {
            let t = r.instance.FireReturn(r.instance.MGM_GET_ROOMCOUNT);
            for (let e = 0; e < t; e++) {
                let t = r.instance.FireReturn(r.instance.BUILD_FINDBEDANDDOOR, e);
                if ((t.bed || null != t.bed) && (!t.bed.isOpen && t.bed.isUse)) {
                    if (!(this._noTarget.length > 0)) return; {
                        let e = this._noTarget.shift();
                        this._AI.bed[e] = t.bed, t.door.isOpen ? this._AI.target[e] = t.bed : this._AI.target[e] = t.door
                    }
                }
            }
        }
        PlayerMoveHandle() {
            for (let t = 0; t < this._AI.player.length; t++) {
                let e = this._AI.player[t],
                    i = this._AI.path[t];
                e.isDie && (null != i && i.length > 0 && this.CC_Player.Move(e, i[0]) && (i.shift(), 0 == i.length ? this._AI.bed[t].isOpen && this._AI.bed[t].isUse ? (this._AI.bed[t] = null, this._AI.target[t] = null, this._noTarget.push(t), this.RetestAI(), this.SetPath(t)) : (this.CC_Player.GoToBed(e, this._AI.bed[t]), e.roomIndex = e.curRoom, this._AI.room[t] = r.instance.FireReturn(r.instance.BUILD_FINDROOM, e.roomIndex), e.isbed = !0, this.UpOrBuild(t)) : (e.curRoom = r.instance.FireReturn(r.instance.MGM_GET_BLOCKFINDROOM, e.x, e.y), -1 == e.curRoom ? e.isRoom = !1 : e.isRoom = !0, this._AI.bed[t].isOpen && this._AI.bed[t].isUse && (this._AI.bed[t] = null, this._AI.target[t] = null, this._noTarget.push(t), this.RetestAI(), this.SetPath(t)))))
            }
        }
        set players(t) {
            this._AI.player = t
        }
        FilterDieAI() {
            for (let t = this._AI.player.length - 1; t >= 0; t--) {
                this._AI.player[t].isDie || this._AI.player.splice(t, 1)
            }
        }
        GoldCoinDetection() {
            this.AttackedAIEventHandle();
            for (let t = 0; t < this._AI.player.length; t++) {
                let e = this._AI.player[t];
                if (!e.isDie) continue;
                if (!e.isbed) continue;
                let i = h.instance.game.GetRoomPR(e.roomIndex),
                    s = "";
                if (null == this._AI.nextBuild[t].build)
                    if (null != this._AI.nextBuild[t].upbuild && this._AI.nextBuild[t].upbuild.isUse) {
                        let e = this._AI.nextBuild[t].upbuild.level + 1;
                        s = this._AI.nextBuild[t].upbuild.name + "_" + e
                    } else s = "";
                else s = this._AI.nextBuild[t].build;
                let _ = s.split("_"),
                    n = h.instance.build.GetBuildData(_[0], parseInt(_[1]));
                if (null != n)
                    if (i.gold1 >= n[1] && i.gold2 >= n[2]) {
                        if (null == this._AI.nextBuild[t].build) {
                            i.gold1 -= n[1], i.gold2 -= n[2], r.instance.Fire(r.instance.MAP_UPBUILD, this._AI.nextBuild[t].upbuild.build, s);
                            let e = this._AI.nextBuild[t].upbuild.build.x + "_" + this._AI.nextBuild[t].upbuild.build.y;
                            if (r.instance.Fire(r.instance.BUILD_UPBUILD, e, this._AI.nextBuild[t].upbuild), parseInt(_[1]) > 5) {
                                let e = this._AI.room[t];
                                if (1 == e.prLevel) {
                                    let t = Math.floor(Math.random() * this._AILevelArr[this._AILevelNum].length);
                                    e.prLevel = this._AILevelArr[this._AILevelNum][t]
                                }
                            }
                        } else {
                            let t = null;
                            null != (t = "at" == _[0] ? r.instance.FireReturn(r.instance.MGM_GET_OPENSPACE, e.roomIndex, !0) : r.instance.FireReturn(r.instance.MGM_GET_OPENSPACE, e.roomIndex)) && (i.gold1 -= n[1], i.gold2 -= n[2], r.instance.Fire(r.instance.MAP_BUILD_NEW, t.x, t.y, s))
                        }
                        this._AI.nextBuild[t].build = null, this._AI.nextBuild[t].mod = null, this._AI.nextBuild[t].upbuild = null, this.UpOrBuild(t)
                    } else {
                        Math.random() < .2 && (this._AI.nextBuild[t].build = null, this._AI.nextBuild[t].mod = null, this._AI.nextBuild[t].upbuild = null, this.UpOrBuild(t))
                    }
                else this._AI.nextBuild[t].build = null, this._AI.nextBuild[t].mod = null, this._AI.nextBuild[t].upbuild = null, this.UpOrBuild(t)
            }
        }
        UpOrBuild(t) {
            if (null == this._AI.nextBuild[t].mod) {
                this.GetAiBuild(t);
                let e = [
                    [],
                    [],
                    [],
                    []
                ];
                for (let i = 0; i < this._AI.build[t].length; i++) {
                    let s = this._AI.build[t][i],
                        _ = s.name;
                    "bed" == _ ? e[0].push(s) : "at" == _ ? e[1].push(s) : "door" == _ ? e[2].push(s) : "game" == _ && e[3].push(s)
                }
                if (!(e[0].length > 0 && e[2].length > 0)) return;
                let i = e[0][0],
                    s = e[2][0];
                if (i.level < 5) {
                    console.log("五级钱");
                    let _ = Math.random();
                    if (_ < .7) 10 == i.level ? (this._AI.nextBuild[t].mod = 1, this._AI.nextBuild[t].build = this._build[0][this._AI.nextBuild[t].mod]) : this._AI.nextBuild[t].upbuild = e[0][0];
                    else if (_ < .75)
                        if (e[1].length > 0) {
                            let i = Math.floor(Math.random() * e[1].length);
                            this._AI.nextBuild[t].upbuild = e[1][i]
                        } else this._AI.nextBuild[t].mod = 1, this._AI.nextBuild[t].build = this._build[0][this._AI.nextBuild[t].mod];
                    else 13 == s.level ? (this._AI.nextBuild[t].mod = 0, this._AI.nextBuild[t].build = this._build[0][this._AI.nextBuild[t].mod]) : this._AI.nextBuild[t].upbuild = e[2][0]
                } else {
                    if (console.log("五级厚"), Math.random() < .65) {
                        let _ = Math.random();
                        if (_ < .4) 10 == i.level ? (this._AI.nextBuild[t].mod = 1, this._AI.nextBuild[t].build = this._build[0][this._AI.nextBuild[t].mod]) : this._AI.nextBuild[t].upbuild = e[0][0];
                        else if (_ < .7)
                            if (e[1].length > 0) {
                                let i = Math.floor(Math.random() * e[1].length);
                                this._AI.nextBuild[t].upbuild = e[1][i]
                            } else this._AI.nextBuild[t].mod = 1, this._AI.nextBuild[t].build = this._build[0][this._AI.nextBuild[t].mod];
                        else if (_ < .85) 13 == s.level ? (this._AI.nextBuild[t].mod = 0, this._AI.nextBuild[t].build = this._build[0][this._AI.nextBuild[t].mod]) : this._AI.nextBuild[t].upbuild = e[2][0];
                        else if (e[3].length > 0) {
                            let i = Math.floor(Math.random() * e[3].length);
                            this._AI.nextBuild[t].upbuild = e[3][i]
                        } else this._AI.nextBuild[t].mod = 0, this._AI.nextBuild[t].build = this._build[0][this._AI.nextBuild[t].mod]
                    } else {
                        let i = Math.random(),
                            s = 1;
                        if (e[3].length > 0)
                            for (let t = 0; t < e.length; t++) {
                                let i = e[3][t];
                                if (i && i.level >= 2) {
                                    s = .5;
                                    break
                                }
                            }
                        if (i < s) {
                            let i = Math.floor(Math.random() * this._build[0].length);
                            e[3].length > 7 && (i = 1), this._AI.nextBuild[t].mod = i, this._AI.nextBuild[t].build = this._build[0][this._AI.nextBuild[t].mod]
                        } else {
                            let e = Math.floor(Math.random() * this._build[1].length);
                            this._AI.nextBuild[t].mod = e, this._AI.nextBuild[t].build = this._build[1][this._AI.nextBuild[t].mod]
                        }
                    }
                }
            }
        }
        AIGoTobedOver() {
            this._AI.build = [];
            for (let t = 0; t < this._AI.player.length; t++) this._AI.build.push(null), this._AI.nextBuild.push({
                mod: null,
                upbuild: null,
                build: null
            })
        }
        GetAiBuild(t) {
            let e = this._AI.player[t],
                i = r.instance.FireReturn(r.instance.BUILD_GET_ROOMALLBLOCK, e.roomIndex);
            i.length > 0 && (this._AI.build[t] = i)
        }
        GameOver() {
            this._AI = {
                player: [],
                room: [],
                bed: [],
                target: [],
                path: [],
                build: [],
                nextBuild: [],
                weight: []
            }, this._noTarget = [], this._attackedAI = null
        }
        KillPlayer(t) {
            if (this._AI.player.length > 0)
                for (let e = 0; e < this._AI.player.length; e++) {
                    let i = this._AI.player[e];
                    if (i.isbed && i.roomIndex == t.room.roomIndex) return void i.Hit(500)
                }
        }
        setAttackedAI(t) {
            if (this._AI.room.length > 0)
                for (let e = 0; e < this._AI.room.length; e++) {
                    let i = this._AI.room[e];
                    if (i && i.roomIndex == t) return void(this._attackedAI = e)
                }
            this._attackedAI = null
        }
        AttackedAIEventHandle() {
            if (null == this._attackedAI) return;
            let t = this._AI.room[this._attackedAI].door;
            this._AI.nextBuild[this._attackedAI].upbuild != t && t.hp < .5 && (this._AI.nextBuild[this._attackedAI].build = null, this._AI.nextBuild[this._attackedAI].mod = null, this._AI.nextBuild[this._attackedAI].upbuild = t)
        }
    }
    class ut {
        constructor() {
            this._path = null
        }
        FindTheTarget() {}
        AddUpEvent() {}
        Move() {
            if (null != this._path && (this._troll.StateDetection(S.move) || this._troll.StateDetection(S.escape)) && !this._troll.StateDetection(S.vertigo) && this._path.length > 0) {
                let e = r.instance.FireReturn(r.instance.MGM_AIORTROLLIS_MOVE, this._path[0][0], this._path[0][1]);
                if (null != e) return r.instance.Fire(r.instance.TL_STARTATTACK, e), void(this._path = null);
                let i = this._troll.speed,
                    s = this._path[0],
                    _ = this._troll.x - s[0],
                    n = this._troll.y - s[1];
                var t = Math.abs(_) + Math.abs(n);
                let a = this._troll.gethpStrip();
                _ > 0 ? (this._troll.x -= i * (Math.abs(_) / t), this._troll.troll.scaleX = -1, null != a && (a.scaleX = -1)) : _ < 0 && (this._troll.x += i * (Math.abs(_) / t), this._troll.troll.scaleX = 1, null != a && (a.scaleX = 1)), _ > 0 ? this._troll.x -= i * (Math.abs(_) / t) : _ < 0 && (this._troll.x += i * (Math.abs(_) / t)), n > 0 ? (this._troll.y -= i * (Math.abs(n) / t), this._troll.troll.zOrder = this._troll.y) : n < 0 && (this._troll.y += i * (Math.abs(n) / t), this._troll.troll.zOrder = this._troll.y), Math.abs(_) < i && (this._troll.x = s[0]), Math.abs(n) < i && (this._troll.y = s[1]), this._troll.x == s[0] && this._troll.y == s[1] && (u.instance.PlaySound(u.instance.TB_sound.troll_Wll, 1, this._troll.x, this._troll.y), 1 == this._path.length ? (this._path = null, r.instance.Fire(r.instance.TL_MOVEOVER_HANDLE)) : (this._path.shift(), r.instance.Fire(r.instance.TL_MOVESELECT_HANDLE)))
            }
        }
        set troll(t) {
            this._troll = t
        }
        set path(t) {
            this._path = t
        }
        get path() {
            return this._path
        }
    }! function(t) {
        t[t.justfierce = 0] = "justfierce", t[t.healthy = 1] = "healthy", t[t.weak = 2] = "weak", t[t.counselled = 3] = "counselled"
    }(k || (k = {}));
    class pt {
        constructor() {
            this._aroundBuild = [], this.logicState = k.justfierce, this._Uptime = null, this._moveOverHandle = null, this._moveSelectHandle = null, this._UpDatahandle = null, this._homeTime = 0, this._eTime = 0, this._aeTime = 0, this._eTimePro = .5, this._eHpPro = .3, this.CC_troll = new ut, this.AddEvent()
        }
        GameOver() {
            Laya.timer.clearAll(this), this._aroundBuild = [], this._aroundPlayer = void 0, this._curAtPlayer = void 0, this._attackTarget = void 0, this.logicState = k.justfierce, this._moveOverHandle = null, this._moveSelectHandle = null, this._UpDatahandle = null, this._Uptime = null, this._attackTime = null, this._homeTime = 0, this._troll.troll.removeSelf(), this.CC_troll.path = null
        }
        StartGame() {
            this._eTimePro = h.instance.troll.eTimePro, this._eHpPro = h.instance.troll.eHpPro
        }
        set troll(t) {
            this._troll = t, this.CC_troll.troll = t
        }
        get troll() {
            return this._troll
        }
        AddEvent() {
            r.instance.AddListEvent(r.instance.TL_GET_AROUNDPLAYER, this.GetTrollAroundPlayer, this), r.instance.AddListEvent(r.instance.TL_MOVESELECT_HANDLE, this.MoveSelectHandle, this), r.instance.AddListEvent(r.instance.TL_MOVEOVER_HANDLE, this.MoveOverHander, this), r.instance.AddListEvent(r.instance.TL_STARTATTACK, this.StartAttack, this), r.instance.AddListEvent(r.instance.TL_TROLLHIT, this.Hit, this), r.instance.AddListEvent(r.instance.TL_MOVESPEED_REDUCTION, this.MoveSpeedReduction, this), r.instance.AddListEvent(r.instance.TL_VERTIGO_REDUCTION, this.VertigoReduction, this)
        }
        UpData() {
            null != this._Uptime && c.instance.AfterAPeriodOfTime_Bool(this._Uptime, .5) && (this.Reduction(), this._Uptime = c.instance.gameTime), this._troll.IsPlayIndex(B.move) && this.CC_troll.Move(), null != this._UpDatahandle && this._UpDatahandle()
        }
        TrollAttack() {
            if (this._troll.troll.play(1, !1), this._troll.Attack(), c.instance.AfterAPeriodOfTime_Bool(this._attackTime, 20) && (this._troll.TrollSkill(), this._attackTime = Number.MAX_VALUE), null != this._attackTarget && null != this._attackTarget.x && null != this._attackTarget.y) {
                u.instance.PlaySound(u.instance.TB_sound.troll_attack, 1, this._troll.x, this._troll.y), d.instance.AddEffect(d.instance.effectStr.trollAttackEffect, this._attackTarget.x, this._attackTarget.y);
                let t = this._attackTarget.Hit(this._troll.power);
                this._curAtPlayer != this._attackTarget && this._troll.AttackEvent(this._attackTarget), t || (null == this._curAtPlayer || this._curAtPlayer.bed != this._attackTarget && this._curAtPlayer != this._attackTarget ? (null == this._curAtPlayer ? this.AttackBuild() : null != this._curAtPlayer.bed ? this._attackTarget = this._curAtPlayer.bed : this.AttackBuild(), this.SetMovePath()) : this.PlayerDie(this._curAtPlayer))
            }
        }
        PlayerDie(t) {
            if (!t || null == t) return;
            t.Hit(500);
            let e = t.bed;
            t.bed = null, r.instance.Fire(r.instance.BUILD_SET_ROOM_DIE, t.roomIndex), r.instance.Fire(r.instance.MGM_ROOMBLACK, t.roomIndex), null != e && e.isUse && e.GameOver(), r.instance.Fire(r.instance.UIGM_TIPS, "player：" + t.name + " eliminated！"), t.isGod ? r.instance.Fire(r.instance.GM_GAMEOVER) : (this.FindPlayer(), this.SetMovePath())
        }
        BloodVolumeDetector() {
            this._troll.StateDetection(S.escape) || this._troll.hp <= this._eHpPro && this.Escape()
        }
        TrollPatrol() {
            let t = r.instance.FireReturn(r.instance.MGM_GET_ROOMCOUNT),
                e = Math.floor(Math.random() * t),
                i = r.instance.FireReturn(r.instance.BUILD_FINDBEDANDDOOR, e);
            i.door.isOpen ? this._attackTarget = i.bed : this._attackTarget = i.door, this._moveSelectHandle = this.Chase, this._moveOverHandle = this.SelectDaquan, this._UpDatahandle = null, this.SetMovePath()
        }
        SelectDaquan() {
            switch (Math.floor(2 * Math.random())) {
                case 0:
                    this.TrollPatrol();
                    break;
                case 1:
                    this.FindPlayer()
            }
        }
        AttackBuild() {
            if (this.GetTrollAroundPlayer(), this._aroundPlayer.length > 0) this._curAtPlayer = this._aroundPlayer[0], this._attackTarget = this._curAtPlayer, this.SetMovePath();
            else if (this._aroundBuild.length <= 3 && (this._aroundBuild = r.instance.FireReturn(r.instance.MGM_FIND_AROUND_BUILD, this._troll.x, this._troll.y)), this._aroundBuild.length > 0) {
                let t = this._aroundBuild.shift(),
                    e = r.instance.FireReturn(r.instance.MGM_FINDPOSBLOCK, t[0], t[1]);
                this._attackTarget = e
            } else this.FindPlayer()
        }
        FindPlayer() {
            let t = this.players,
                e = Math.floor(Math.random() * t.length);
            if (t[e].isDie) {
                if (this._curAtPlayer = t[e], this._curAtPlayer.isRoom) {
                    let t = r.instance.FireReturn(r.instance.BUILD_FINDDOOR, this._curAtPlayer.curRoom);
                    null == t || t.isOpen ? this._attackTarget = this._curAtPlayer : this._attackTarget = t
                } else this._attackTarget = this._curAtPlayer;
                this._UpDatahandle = null, this._moveSelectHandle = this.Chase, this._moveOverHandle = this.Chase, this.SetMovePath()
            } else this.FindPlayer()
        }
        SetMovePath() {
            let t = r.instance.FireReturn(r.instance.MGM_START_END_PATH, this._troll.x, this._troll.y, this._attackTarget.x, this._attackTarget.y);
            null != t && t && 0 != t.length ? (this.CC_troll.path = t, this._troll.IsPlayIndex(B.move) || this._troll.setplay(B.move, !0), this._troll.state = S.move, u.instance.PlaySound(u.instance.TB_sound.troll_Wll, 1, this._troll.x, this._troll.y)) : this.AttackBuild()
        }
        Chase() {
            if (this.GetTrollAroundPlayer(), this._aroundPlayer.length > 0) {
                let t = Math.floor(Math.random() * this._aroundPlayer.length);
                this._curAtPlayer = this._aroundPlayer[t], this._attackTarget = this._curAtPlayer, this.SetMovePath(), this._UpDatahandle = null, this._moveSelectHandle = null, this._moveOverHandle = this.StartAttack
            } else null == this.CC_troll.path && this.FindPlayer()
        }
        Escape() {
            if (this.troll.StateDetection(S.escape) || this.troll.StateDetection(S.vertigo)) return;
            this._troll.state = S.escape;
            let t = h.instance.build.GetTrollPos();
            this._UpDatahandle = null, this._moveSelectHandle = null, t = r.instance.FireReturn(r.instance.MGM_GET_DATAPOSTMAPPOS, t[0], t[1]);
            let e = r.instance.FireReturn(r.instance.MGM_START_END_PATH, this._troll.x, this._troll.y, t[0], t[1]);
            null != e ? (this.CC_troll.path = e, this._moveOverHandle = this.EscapeMoveOverHandle, this._troll.IsPlayIndex(B.move) || this._troll.setplay(B.move, !0), r.instance.Fire(r.instance.BUILD_HANDLEROOMBUFF, this._attackTarget.roomIndex, 1), this.troll.Escape()) : this.Escape()
        }
        EscapeMoveOverHandle() {
            this._homeTime = c.instance.gameTime, this._moveOverHandle = null, this._UpDatahandle = this.HomeUpHandle
        }
        HomeUpHandle() {
            c.instance.AfterAPeriodOfTime_Bool(this._homeTime, 1) && (this._homeTime = c.instance.gameTime, this.HomeBB())
        }
        HomeBB() {
            this._troll.hpCur += .1 * this._troll.hpMax, 1 == this._troll.hp && (this._UpDatahandle = null, this.FindPlayer())
        }
        MoveOverHander() {
            null != this._moveOverHandle && this._moveOverHandle()
        }
        MoveSelectHandle() {
            null != this._moveSelectHandle && this._moveSelectHandle()
        }
        AttackHandle() {
            if (this._troll.StateDetection(S.attack) && (c.instance.AfterAPeriodOfTime_Bool(this._troll.lastAtTime, this._troll.atSpeed) && (this._troll.lastAtTime = c.instance.gameTime, this.AtRadius(this._attackTarget.x, this._attackTarget.y) ? (null == this._attackTime && (this._attackTime = c.instance.gameTime), this.TrollAttack()) : this.Chase()), c.instance.AfterAPeriodOfTime_Bool(this._eTime, this.aeTime))) {
                this._eTime = c.instance.gameTime, Math.random() < this._eTimePro && (this.troll.hp > .5 ? this.FindPlayer() : this.Escape())
            }
        }
        StartAttack(t = null) {
            null != t && (this._attackTarget = t, this.troll.StartAttack(this._attackTarget), r.instance.Fire(r.instance.BUILD_HANDLEROOMBUFF, t.roomIndex, 2), r.instance.Fire(r.instance.PAIL_SET_ATTACKEDAI, t.roomIndex), this._curAtPlayer && r.instance.Fire(r.instance.UIGM_PLAYERHITEFFECT, this._curAtPlayer.uid)), this._UpDatahandle = this.AttackHandle, this.troll.state = S.attack, this._Uptime = c.instance.gameTime, this._eTime = c.instance.gameTime
        }
        Hit(t, e) {
            if (!(this._troll.hp <= 0)) {
                if (this._troll.hit(t), this._troll.hp <= 0) {
                    let t = y.instance.GetPlayerName(e);
                    return null == t ? r.instance.Fire(r.instance.UIGM_TIPS, "Ghost is defeated by mysterious player") : r.instance.Fire(r.instance.UIGM_TIPS, t + " beat the ghost"), e == y.instance.player.roomIndex ? h.instance.game.isMvp = !0 : h.instance.game.isMvp = !1, h.instance.game.mvpIndex = y.instance.GetPlayerSkinId(e), void r.instance.Fire(r.instance.GM_GAMEOVER, !0)
                }
                this._troll.StateDetection(S.escape) || this.BloodVolumeDetector()
            }
        }
        get players() {
            return y.instance.playerSorts
        }
        GetTrollAroundPlayer() {
            let t = [],
                e = this.players;
            for (let i = 0; i < e.length; i++) {
                let s = e[i];
                if (!s.isDie) continue;
                if (-1 != s.curRoom) {
                    let t = r.instance.FireReturn(r.instance.BUILD_FINDDOOR, s.curRoom);
                    if (null != t && !t.isOpen) continue
                }
                let _ = Math.abs(s.x - this._troll.x),
                    n = Math.abs(s.y - this._troll.y);
                _ * _ + n * n < this._troll.r && t.push(s)
            }
            this._aroundPlayer = t
        }
        AtRadius(t, e) {
            let i = Math.abs(this._troll.x - t),
                s = Math.abs(this._troll.y - e);
            return i * i + s * s <= this._troll.atR
        }
        MoveSpeedReduction(t) {
            this._troll.speedScale -= t, this._troll.moveSpeedTime = c.instance.gameTime
        }
        VertigoReduction(t = 0) {
            this._troll.vertigoTime = t
        }
        Reduction() {
            this._troll.StateDetection(S.vertigo) && c.instance.AfterAPeriodOfTime_Bool(this._troll.startVertiogTime, this._troll.vertigoTime) && this.VertigoReduction()
        }
        get aeTime() {
            return this._troll.level >= 5 ? this._aeTime = 20 : this._aeTime = 10, this._aeTime
        }
    }
    class mt {
        constructor() {
            this._trollThawTime = 30, this._trollLgoic = new pt, this._playerAILogic = new ct, this._playerAILogic.AddEvent(), r.instance.AddListEvent(r.instance.MAINLG_TROLLUPDATA, this.TrollUpData, this)
        }
        StartGame() {
            this._trollLgoic.StartGame(), this._trollLgoic.troll = L.instance.trollSprict, this._playerAILogic.players = y.instance.players, c.instance.AddTimeOnceEvent("player", this.player, this, 1)
        }
        GameOver() {
            this._trollLgoic.GameOver(), this._playerAILogic.GameOver(), e.instance.removeListEvent("trollUpData")
        }
        TrollUpData() {
            e.instance.AddUPEvent("trollUpData", this._trollLgoic.UpData, this._trollLgoic), this._trollLgoic.TrollPatrol(), r.instance.Fire(r.instance.SKILL_ADDUPEVENT)
        }
        player() {
            this._playerAILogic.StartGame()
        }
    }
    class gt {
        constructor() {
            this.gold1Arr = [100, 200, 400, 1e3, 2e3, 3e3, 4e3, 5e3, 6e3, 7e3, 8e3, 9e3, 1e4, 3e4, 5e4, 8e4, 1e5, 15e4, 4e5, 8e5], this.gold2Arr = [100, 200, 300, 400, 500, 600, 700, 1e3, 1500, 2e3, 3e3, 4e3, 5e3, 6e3, 7e3, 8e3, 9e3, 1e4, 15e3, 2e4, 5e4], this._UIManager = new lt, this._UIManager.AddUpData(), this._UIManager.LoadOne(), this._mapGManager = new rt, this._buildManager = new V, this._playerManager = new y, this._trollManager = new L, this._mainTPLogic = new mt, this.AddEvent()
        }
        AddEvent() {
            r.instance.AddListEvent(r.instance.GM_STARTGAME, this.StartGame, this), r.instance.AddListEvent(r.instance.GM_GAMEOVER, this.GameOver, this)
        }
        StartGame() {
            u.instance.playMusic(u.instance.BG_music.gameBGM), h.instance.StartGame(), c.instance.StartGame(), this._buildManager.StartGame(), this._mapGManager.SelectMap(), this._mapGManager.ShowMap(), this._playerManager.StartGame(6), this._UIManager.StartGame(), this._trollManager.StartGame(), this._mainTPLogic.StartGame(), e.instance.StartGame()
        }
        GameOver(t = !1) {
            this.DD_Economics(), h.instance.GameOver(), u.instance.StopAll(), d.instance.GameOver(), c.instance.GameOver(), f.instance.GameOver(), h.instance.game.isWin = t;
            p.instance.GameOver(), e.instance.GameOver(), this._mainTPLogic.GameOver(), this._buildManager.GameOver(), this._playerManager.GameOver(), this._trollManager.GameOver(), this._UIManager.GameMove(null == t), this._mapGManager.GameOver()
        }
        DD_Economics() {
            let t = h.instance.game.GetRoomPR(this._playerManager.player.roomIndex),
                e = 0,
                i = 0;
            if (t) {
                e = t.gold1_Count, i = t.gold2_Count;
                for (let t = this.gold1Arr.length - 1; t >= 0; t--) {
                    let i = this.gold1Arr[t];
                    if (e >= i) {
                        e = i;
                        break
                    }
                    0 == t && (e = 0)
                }
                for (let t = this.gold2Arr.length - 1; t >= 0; t--) {
                    let e = this.gold2Arr[t];
                    if (i >= e) {
                        i = e;
                        break
                    }
                    0 == t && (i = 0)
                }
            }
        }
    }
    class yt extends Laya.Script {
        constructor() {
            super(...arguments), this.spth = ["Prefabs/buildMenu.json", "Prefabs/off.json", "Prefabs/BuildBloodStrip.json", "Prefabs/TrollBloodStrip.json", "Prefabs/RF.json", "Prefabs/menu.json", "Prefabs/ShopMenu.json", "Prefabs/StartGame.json", "Prefabs/BattleUI.json", "Prefabs/GameOverUI.json", "Prefabs/MatchingUI.json", "Prefabs/TipsUI.json", "Prefabs/SkillUI.json", "Prefabs/ShopUI.json", "Prefabs/TreasureChestUI.json", "res/atlas/UI.atlas", "res/atlas/StartGameUI.atlas", "res/atlas/pipei.atlas", "res/atlas/map.atlas", "res/atlas/load.atlas", "res/atlas/bullet.atlas", "res/atlas/build.atlas", "res/atlas/Atower.atlas"], this._loadWidth = 380
        }
        onAwake() {
            this._scene = Laya.stage.getChildAt(0).getChildAt(0), this._loadIng = this._scene.getChildByName("loading"), this._loadPanel = this._loadIng.getChildByName("loadPanel"), this._loadText = this._loadPanel.getChildByName("loadText"), this._load = this._loadPanel.getChildByName("load"), this._scene.width = Laya.stage.width, this._scene.height = Laya.stage.height, this._loadIng.width = this._scene.width, this._loadIng.height = this._scene.height, this._loadPanel.pos(this._loadIng.width / 2, .45 * this._loadIng.height), this._loadText.text = "猛鬼加载中0%.....", this._load.width = 0
        }
        onStart() {
            Laya.loader.load(this.spth, Laya.Handler.create(this, this.onAssetLoaded), Laya.Handler.create(this, this.onLoading, null, !1))
        }
        onUpdate() {
            e.instance.HandleUPEvent()
        }
        onAssetLoaded(t) {
            new gt, this._loadIng.removeSelf(), this._loadIng.visible = !1, this._loadIng.destroy(!0)
        }
        onLoading(t) {
            let e = t * this._loadWidth;
            t *= 100, t = Math.floor(t);
            let i = Math.ceil(t % 10) / 2,
                s = "";
            for (let t = 0; t < i; t++) s += ".";
            this._loadText.text = "Loading " + t + "%" + s, this._load.width = e
        }
    }
    class ft {
        constructor() {}
        static init() {
            (0, Laya.ClassUtils.regClass)("Script/UpDataScript.ts", yt)
        }
    }
    ft.width = 640, ft.height = 1136, ft.scaleMode = "fixedwidth", ft.screenMode = "none", ft.alignV = "top", ft.alignH = "left", ft.startScene = "Main.scene", ft.sceneRoot = "", ft.debug = !1, ft.stat = !1, ft.physicsDebug = !1, ft.exportSceneToJson = !0, ft.init();
    new class {
        constructor() {
            console.log(Laya.version)
            window.Laya3D ? Laya3D.init(ft.width, ft.height) : Laya.init(ft.width, ft.height, Laya.WebGL), Laya.Physics && Laya.Physics.enable(), Laya.DebugPanel && Laya.DebugPanel.enable(), Laya.stage.scaleMode = ft.scaleMode, Laya.stage.screenMode = ft.screenMode, Laya.stage.alignV = ft.alignV, Laya.stage.alignH = ft.alignH, Laya.URL.exportSceneToJson = ft.exportSceneToJson, (ft.debug || "true" == Laya.Utils.getQueryString("debug")) && Laya.enableDebugPanel(), ft.physicsDebug && Laya.PhysicsDebugDraw && Laya.PhysicsDebugDraw.enable(), ft.stat && Laya.Stat.show(), Laya.alertGlobalError(!0), Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION)
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded))
        }
        onConfigLoaded() {
            ft.startScene && Laya.Scene.open(ft.startScene)
        }
    }
}();