linesToSkip=$1
field=$2
{
for ((i=$linesToSkip;i--;)) ;do
    read
done
while read line ;do
   printf '%s' "$line"
   #echo $line

   fields=($(printf "%s" "$line"|cut -d" " --output-delimiter=" " -f1-))
   echo ${fields[field]}
done
} < /home/ziga/workspace/parseLog.txt
